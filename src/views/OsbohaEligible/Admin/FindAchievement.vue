<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card position-relative inner-page-bg bg-primary" style="height: 150px">
        <div class="inner-page-title">
          <h3 class="text-white">البحث عن توثيق</h3>
        </div>
      </div>
    </div>
    <form @submit.prevent="getInfo">
      <input style="margin-bottom: 10px" type="number"
        class="border border-primary w-100 text search-input form-control" v-model="search"
        placeholder="ابحث عن توثيق" />
      <button type="submit" class="col-6 btn btn-primary d-block w-75 mx-auto mb-3">
        بحث
      </button>
    </form>
    <div class="col-sm-12" v-if="show == 1">
      <iq-card>
        <template v-slot:headerTitle>
          <h4 class="card-title text-center">
            معلومات التوثيق
            <span class="material-symbols-outlined align-middle">
              menu_book
            </span>
          </h4>
        </template>
        <template v-slot:body>
          <span class="px-2">
            •
            اسم السفير : {{ userName }}</span>
          <br>
          <span class="px-2"> • اسم الكتاب : {{ bookName }}</span>
          <br>
          <span class="px-2" v-if="theses"> • عدد الأطروحات : {{ theses.length }}</span>
          <span class="px-2" v-else> • عدد الأطروحات : 0</span>
          <br>
          <span class="px-2" v-if="questions"> • عدد الأسئلة : {{ questions.length }}</span>
          <span class="px-2" v-else> • عدد الأسئلة : 0</span>
          <br>
          <span class="px-2" v-if="generalInformations"> • عدد التلخيصات : 1</span>
          <span class="px-2" v-else> • عدد التلخيصات : 0</span>
          <hr />
          <div class="row d-flex justify-content-end align-items-center w-75 m-auto mb-3">
            <router-link class="btn btn-info display-5 " target="_blank"
              :to="{ name: 'chat.index', query: { user_id: userBook.user.id } }">

              <span class="material-symbols-outlined align-middle">
                forum
              </span>
              إرسال رسالة
            </router-link>
          </div>

        </template>
      </iq-card>

      <iq-card>
        <template v-slot:headerTitle>
          <h4 class="card-title">الشهادات</h4>
        </template>
        <template v-slot:body v-if="certificates && certificates.length > 0">
          <h5> تم اصدار شهادات عدد {{ certificates.length }}</h5>
          <ul>
            <li v-for="(certificate, index) in certificates" :key="index">
              <p class="mt-3" role="button" @click="listCertificate(certificate.eligible_user_books_id)">
                عرض شهادة رقم {{ index + 1 }}
              </p>
            </li>
          </ul>

        </template>
        <template v-slot:body v-else>
          <h4 class="card-title">لا يوجد</h4>
        </template>

      </iq-card>

      <!-- thesis -->
      <iq-card>
        <template v-slot:headerTitle>
          <h4 class="card-title">الأطروحات</h4>
        </template>
        <template v-slot:body v-if="theses && theses.length > 0">
          <form id="form-wizard1" class="text-center mt-3">
            <ul id="top-tab-list" class="p-0 row list-inline">
              <li v-for="(thesis, index) in theses" :key="index" :class="checkActiveThesis(index, index + 1)"
                class="col-lg-3 col-6  mb-2 text-start" @click="changeThesisTab(index + 1)" id="account">
                <a href="javascript:void(0);">
                  <span class="material-symbols-outlined align-middle" v-if="thesis.status == 'review'">
                    manage_search
                  </span>
                  <span class="material-symbols-outlined align-middle" v-if="thesis.status == 'audit'">
                    star
                  </span>
                  <span>أطروحة {{ index + 1 }}</span>
                </a>

              </li>
            </ul>
            <!-- fieldsets -->
            <fieldset v-for="(thesis, index) in theses" :key="index"
              :class="currentThesis == index + 1 ? 'd-block' : 'd-none'">
              <Thesis :reviewStage="false" :thesis="thesis" :userBook='userBook' :index='index'
                @onNext="changeThesisTab" />
            </fieldset>
          </form>
        </template>
        <template v-slot:body v-else>
          <h4 class="card-title">لا يوجد</h4>
        </template>

      </iq-card>

      <!-- Questions  -->
      <iq-card>
        <template v-slot:headerTitle>
          <h4 class="card-title">الاسئلة</h4>
        </template>
        <template v-slot:body v-if="questions && questions.length > 0">
          <form id="form-wizard1" class="text-center mt-3">
            <ul id="top-tab-list" class="p-0 row list-inline">
              <li v-for="(question, index) in questions" :key="index" :class="checkActiveQuestions(index, index + 1)"
                class="col-lg-3 col-6 mb-2 text-start" @click="changeQuestionsTab(index + 1)" id="account">
                <a href="javascript:void(0);">
                  <!-- <i class="material-symbols-outlined">Rule</i> -->
                  <span>السؤال {{ index + 1 }}</span>
                </a>
              </li>
            </ul>
            <!-- fieldsets -->
            <fieldset v-for="(question, index) in questions" :key="index"
              :class="currentQuestion == index + 1 ? 'd-block' : 'd-none'">
              <Question :reviewStage="false" :question="question" :userBook='userBook' :index='index'
                @onNext="changeQuestionsTab" />
            </fieldset>
          </form>

        </template>
        <template v-slot:body v-else>
          <h4 class="card-title">لا يوجد</h4>
        </template>

      </iq-card>


      <!-- Start General Informations -->
      <iq-card>
        <template v-slot:headerTitle>
          <h4 class="card-title">الملخص العام</h4>
        </template>
        <template v-slot:body v-if="generalInformations">
          <div class="form-card text-start">
            <form>
              <div class="row">
                <h3 class="mb-4">الانجاز</h3>
                <div class="col-md-12 form-group">
                  <h4 class="form-label"> التلخيص العام</h4>
                  <p class="form-control-plaintext">{{ generalInformations.summary }}</p>
                </div>
                <div class="col-md-12 form-group">
                  <h4 class="form-label"> السؤال العام العام</h4>
                  <p class="form-control-plaintext">{{ generalInformations.general_question }}</p>
                </div>
              </div>
            </form>
          </div>

          <div class="col-lg-12" v-if="generalInformations.status == 'review'">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">بحاجة لمراجعة</h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="[
                  {
                    color: 'primary',
                    title: `لا يوجد مراجع `,
                    description: '',
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },

                ]" />
              </template>
            </iq-card>
          </div>

          <div class="col-lg-12" v-if="generalInformations.status == 'retard'">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">تم الاعادة </h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="[
                  {
                    color: 'primary',
                    title: `بحاجة لتعديل ~ ${generalInformations.reviewer.name}`,
                    description: generalInformations.reviews,
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },

                ]" />
              </template>
            </iq-card>
          </div>
          <div class="col-lg-12" v-if="generalInformations.status == 'accept'">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">تم القبول </h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="[
                  {
                    color: 'primary',
                    title: 'مقبول',
                    description: generalInformations.reviewer.name,
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },

                ]" />
              </template>
            </iq-card>
          </div>
          <div class="col-lg-12" v-if="generalInformations.status == 'audite'">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">تم الاعتماد </h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="[
                  {
                    color: 'primary',
                    title: 'معتمد - قابل للتقييم',
                    description: generalInformations.reviewer.name,
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },

                ]" />
              </template>
            </iq-card>
          </div>
          <div class="col-lg-12" v-if="generalInformations.status == 'audited'">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">تم التقييم</h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="[
                  {
                    color: 'primary',
                    title: `تم التقييم ~ ${generalInformations.auditor ? generalInformations.auditor.name : ''}`,
                    description: generalInformations.reviews,
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },
                  {
                    color: 'primary',
                    title: `تم المراجعة ~ ${generalInformations.reviewer.name}`,
                    description: '',
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },

                ]" />
              </template>
            </iq-card>
          </div>
          <div class="col-lg-12" v-if="generalInformations.status == 'rejected'">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">تم الرفض </h4>
              </template>
              <template v-slot:body>
                <TimeLine :items="[
                  {
                    color: 'primary',
                    title: `مرفوض ~ ${generalInformations.reviewer ? generalInformations.reviewer.name : ''} ${generalInformations.auditor ? generalInformations.auditor.name : ''}`,
                    description: generalInformations.reviews,
                    child: {
                      type: 'img',
                      items: [
                      ]
                    }
                  },

                ]" />
              </template>
            </iq-card>
          </div>
        </template>
        <template v-slot:body v-else>
          <h4 class="card-title">لا يوجد</h4>
        </template>

      </iq-card>
      <!-- End General Informations -->

      <div class="row" v-if="userBook.status != 'rejected'">
        <input type="button" value="رفض التوثيق" class="btn btn-danger m-auto d-block mt-3 w-75" @click="setReject()"
          v-if="!reject" />
        <div class="col-md-12 mb-3 form-group mt-2" v-if="reject">
          <label for="rejectNote" class="form-label">سبب الرفض *</label>
          <textarea name="rejectNote" class="form-control" id="rejectNote" rows="5" required="required"
            v-model=rejectNote></textarea>
          <small style="color: red" v-if="v$.rejectNote.$error">
            {{ 'سبب الرفض مطلوب' }}
          </small>
          <div class="d-inline-block w-100 text-center">
            <div class="col-sm-12 text-center" v-if="loader">
              <img src="@/assets/images/gif/loader-3.gif" alt="loader" style="height: 100px;">
            </div>
          </div>

          <input type="button" value="رفض التوثيق" class="btn btn-danger m-auto d-block mt-3 w-75"
            @click="rejectUserBook()" />
        </div>
        <!-- END REJECT -->

      </div>
    </div>
    <div class="col-sm-12" v-else-if="show == 0">
      <iq-card class="iq-card">
        <div class="iq-card-body p-0">
          <div class="image-block text-center">
            <img src="@/assets/images/main/no-E.png" class="img-fluid rounded w-50" alt="blog-img">
          </div>

          <h4 class="text-center mt-3 mb-3">لا يوجد توثيق بهذا الرقم</h4>
        </div>
      </iq-card>
    </div>
  </div>
</template>
<script>
import userBookService from "@/API/EligibleServices/userBookServices";
import Thesis from "../Control/Thesis/thesis";
import Question from '../Control/Questions/question'
import { required, requiredIf } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";


export default {
  name: "Find Achievements",

  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Thesis,
    Question
  },
  data() {
    return {
      achievement: {},
      generalInformations: null,
      bookName: "",
      userName: "",
      cuurentQuotation: [],
      theses: null,
      certificates: null,
      currentThesis: 1,
      currentThesisCount: 1,
      questions: null,
      currentQuestion: 1,
      search: null,
      show: null,
      userBook: null,
      reject: false,
      rejectNote: '',

    };
  },
  validations() {
    return {
      rejectNote: {
        required: requiredIf(function (nestedModel) {
          return this.reject == true;
        }),
      },
    };
  },

  methods: {
    setReject() {
      this.reject = true;
    },
    listCertificate(id) {
      window.open(`https://platform.osboha180.com/backend/public/api/v1/eligible-certificates/generate-pdf/${id}`, '_blank');
    },
    async getInfo() {
      this.achievement = await userBookService.searchUserBook(this.search);
      console.log("🚀 ~ getInfo ~ achievement:", this.achievement)
      if (this.achievement == 'UserBook does not exist') {
        this.show = 0
      } else {
        this.userBook = this.achievement.userBook
        this.bookName = this.userBook.book.name;
        this.userName = this.userBook.user.name;
        this.certificates = this.userBook.certificates;
        this.generalInformations = this.userBook.general_information;
        this.theses = this.userBook.thesises;
        this.questions = this.userBook.questions;
        this.show = 1
      }

    },
    checkActiveQuestions(item, active) {
      let className = ''
      if (this.currentQuestion > item) {
        className = 'active'
      }
      if (this.currentQuestion > active) {
        className = className + ' done'
      }
      return className
    },
    checkActiveThesis(item, active) {
      let className = ''
      if (this.currentThesis > item) {
        className = 'active'
      }
      if (this.currentThesis > active) {
        className = className + ' done'
      }
      return className
    },

    changeThesisTab(tab) {
      this.currentThesis = tab
      window.scrollTo({ behavior: 'smooth' })
    },
    changeQuestionsTab(tab) {
      this.currentQuestion = tab
      window.scrollTo({ behavior: 'smooth' })
    },

    rejectUserBook() {
      this.v$.$touch();
      if (!this.v$.rejectNote.$invalid) {
        const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            confirmButton: 'btn btn-primary btn-lg',
            cancelButton: 'btn btn-outline-primary btn-lg ms-2'
          },
          buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
          title: 'هل أنت متأكد؟',
          text: "موافقتك تعني رفض توثيق هذا السفير",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'نعم قم بالرفض',
          cancelButtonText: 'تراجع  ',
          showClass: {
            popup: 'animate__animated animate__zoomIn'
          },
          hideClass: {
            popup: 'animate__animated animate__zoomOut'
          }
        })
          .then((willDelete) => {
            if (willDelete.isConfirmed) {
              this.loader = true
              userBookService.rejectRetardUserBook(this.userBook.id, this.rejectNote, 'rejected')
                .then(response => {
                  swalWithBootstrapButtons.fire({
                    title: 'تم الرفض',
                    text: 'تم رفض الانجاز',
                    icon: 'success',
                    showClass: {
                      popup: 'animate__animated animate__zoomIn'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__zoomOut'
                    }
                  })
                })
                .catch(error => {
                  console.log(error)
                })
                this.show = null
              }
          })
      }
    },
  },
};
</script>
<style scoped>
#top-tab-list {
  margin-bottom: 0;
}
</style>