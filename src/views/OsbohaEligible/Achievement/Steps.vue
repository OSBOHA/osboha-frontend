<template>
  <div class="row">
    <div class="col-12">

      <fullNote :rejected="rejected" :rejectedMsg="rejectedMsg" :retard="retard" :retardTheses="retardTheses"
        :retardQuestions="retardQuestions" :retardGeneralInformations="retardGeneralInformations" />

      <EligibleSteps :user_book="userBook" />
    </div>
    <iq-card v-if="completionPercentage">
      <template v-slot:body>
        <h4 class="text-center mb-2">املأ خزان ثقافتك بالقراءة</h4>
        <Chart :percintage="completionPercentage" />
      </template>
      <div v-if="msg" class="col-12 alert alert-danger">
        <h5 class="text-center">{{ msg }}</h5>
      </div>
      <div v-else>
        <h3 class="text-center">التسليــم النهائــي</h3>
        <br />
        <div v-if="completionPercentage >= 80">
          <h5 v-if="userStatus == 0" style="color: red" class="text-center mb-3">
            يرجى انتظار تفعيل حسابك لتسليم الانجاز
          </h5>
          <h5 v-else-if="userStatus != 1" style="color: red" class="text-center mb-3">
            <span class="dark-color d-inline-block line-height-2">
              <router-link :to="{ name: 'user.update-info' }">
                تفعيل الحساب
              </router-link></span>
            يجب تفعيل حسابك لتسليم انجازك
          </h5>

          <h5 class="text-center mb-3">
            سيتم تمكينك من الضغط هنا فقط في حال اكمالك اعتماد كامل إجابتك أدناه
          </h5>
        </div>
        <div class="col-12 d-flex justify-content-center mb-3">
          <input type="submit" value="تسليم" href="javascript:void(0);" class="btn btn-primary d-block w-75"
            @click="updateUserBook()" :disabled="isDisabled" />
        </div>
        <div class="col-12 d-flex justify-content-center mb-3"
          v-if="userBook.status != 'audited' || userBook.status != 'finished'">
          <input type="submit" value="الغاء التوثيق" href="javascript:void(0);" class="btn btn-danger d-block w-75"
            @click="cancel()" />
        </div>
      </div>
    </iq-card>
  </div>
</template>
<script>
import userBookServices from "@/API/EligibleServices/userBookServices";
import Chart from "@/components/Charts/fluid-meter-chart";
import EligibleSteps from "@/components/EligibleComponents/EligibleSteps";
import fullNote from "@/components/EligibleComponents/reviews/fullNote";
import UserService from '@/API/services/user.service';

export default {
  name: "Steps",
  components: {
    Chart,
    EligibleSteps,
    fullNote,
  },
  async created() {
    await this.getUserStatus();
    await this.getById();
  },
  data() {
    return {
      loader: false,
      isDisabled: true,
      msg: "",
      userStatus: "",
      userBook: null,
      isThesesReady: false,
      isGeneralReady: false,
      isQuestionsReady: false,
      completionPercentage: null,
      rejected: false,
      rejectedMsg: "",
      retard: false,
      retardMsg: "لديك انجاز يجب يجب اعادته",
      retardTheses: null,
      retardQuestions: null,
      retardGeneralInformations: false,
    };
  },
  methods: {
    async getUserStatus() {
      const response = await UserService.getInfo(this.user.id);
      this.userStatus = response.allowed_to_eligible;
    },
    async updateUserBook() {
      this.isDisabled = true;
      this.loader = true;
      await userBookServices.updateUserBook("review", this.userBook.id);
      this.loader = false;
      this.msg = "تم تسليم طلبك";
    },

    async getById() {
      const response = await userBookServices.getById(
        this.$route.params.id
      );
      this.completionPercentage = response.completionPercentage;
      this.userBook = response.userBook;

      if (this.userBook.status == "rejected") {
        this.rejected = true;
        this.rejectedMsg = this.userBook.reviews;
      } else if (this.userBook.status == "retard") {
        this.retard = true;
        this.retardTheses = this.userBook.thesises.reduce(function (
          retardTheses,
          element,
          index
        ) {
          if (element.status === "retard") retardTheses.push(index + 1);
          return retardTheses;
        },
          []);
        this.retardQuestions = this.userBook.questions.reduce(function (
          retardQuestions,
          element,
          index
        ) {
          if (element.status === "retard") retardQuestions.push(index + 1);
          return retardQuestions;
        },
          []);
        if (
          this.userBook.general_information &&
          this.userBook.general_information.status == "retard"
        ) {
          this.retardGeneralInformations = true;
        }
      } else if (this.userBook.status != null) {
        this.msg = "تم التسليم";
      }

      function isReady(stuff) {
        return stuff.status != "rejected" && stuff.status != null;
      }
      // isThesesReady
      if (this.userBook.thesises.find(isReady)) {
        this.isThesesReady = true;
        // this.timelineItems[0].child.text = "عرض";
      }

      //isQuestionsReady
      if (this.userBook.questions.find(isReady)) {
        this.isQuestionsReady = true;
        // this.timelineItems[2].child.text = "عرض";
      }

      //isGeneralReady
      if (
        this.userBook.general_information &&
        this.userBook.general_information.status != "retard" &&
        this.userBook.general_information.status != null
      ) {
        // this.timelineItems[1].child.text = "عرض";
        this.isGeneralReady = true;
      } else {
        this.isGeneralReady = false;
      }

      if (
        this.isThesesReady &&
        this.isGeneralReady &&
        this.isQuestionsReady &&
        (this.userBook.status == null || this.userBook.status == "retard") &&
        this.userStatus == 1
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },

    cancel() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-primary btn-lg",
          cancelButton: "btn btn-outline-primary btn-lg ms-2",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "هل أنت متأكد؟",
          text: "موافقتك تعني حذف التوثيق بأكمله بما في ذلك اطروحاته والتلخيص العام والأسئلة المعرفية وجميع التقييمات التي حصلت عليها",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "نعم قم بالحذف",
          cancelButtonText: "تراجع  ",
          showClass: {
            popup: "animate__animated animate__zoomIn",
          },
          hideClass: {
            popup: "animate__animated animate__zoomOut",
          },
        })
        .then((willDelete) => {
          if (willDelete.isConfirmed) {
            userBookServices
              .cancel(this.userBook.id)
              .then((response) => {
                swalWithBootstrapButtons.fire({
                  title: "تم الالغاء",
                  text: "تم الغاء طلب التوثيق",
                  icon: "success",
                  showClass: {
                    popup: "animate__animated animate__zoomIn",
                  },
                  hideClass: {
                    popup: "animate__animated animate__zoomOut",
                  },
                });
                this.$router.push({ name: "social.book" });
              })
              .catch((error) => {
                console.log(error.response.data);
              });
          }
        });
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  }
};
</script>