<template>
   <div class="row">
      <div class="col-sm-12">
         <div class="card position-relative inner-page-bg bg-primary" style="height: 150px;">
            <div class="inner-page-title">
               <h3 class="text-white">عرض الأسئلة للمراجعة و التدقيق</h3>
               <p class="text-white">عدد الأسئلة {{ questions.length }}</p>
            </div>
         </div>
      </div>
      <div class="col-sm-12" v-if="questions && questions.length > 0">
         <iq-card>
            <template v-slot:headerTitle>
               <h4 class="card-title">الأسئلة</h4>
               <span class="px-2" v-if="isReviewer"> اسم السفير :
                  {{ (questions[0].user_book.user.user_profile.first_name_ar) }}
                  {{ (questions[0].user_book.user.user_profile.middle_name_ar ?
                     questions[0].user_book.user.user_profile.middle_name_ar : '' )}}
                  {{ (questions[0].user_book.user.user_profile.last_name_ar ?
                     questions[0].user_book.user.user_profile.last_name_ar : '') }}

               </span>
               <span class="px-2" v-else> اسم السفير : ***************</span>
               <span class="px-2"> || </span>
               <span class="px-2"> اسم الكتاب : {{ questions[0].user_book.book.name }}</span>
            </template>
            <template v-slot:body>
               <form id="form-wizard1" class="text-center mt-3">
                  <ul id="top-tab-list" class="p-0 row list-inline">
                     <li v-for="(question, index) in questions" :key="index" :class="checkActive(index, index + 1)"
                        class="col-lg-3 col-6 mb-2 text-start" @click="changeTab(index + 1)" id="account">
                        <a href="javascript:void(0);">
                           <span class="material-symbols-outlined align-middle" v-if="question.status == 'review'">
                              manage_search
                           </span>
                           <span class="material-symbols-outlined align-middle" v-if="question.status == 'audit'">
                              star
                           </span>
                           <span>السؤال {{ index + 1 }}</span>
                        </a>
                     </li>
                  </ul>
                  <!-- fieldsets -->
                  <fieldset v-for="(question, index) in questions" :key="index"
                     :class="current == index + 1 ? 'd-block' : 'd-none'">
                     <question  @status-updated="handleStatusUpdated" :question="question" :userBook='userBook' :index='index' @onNext="changeTab"
                        :reviewStage="true" />
                  </fieldset>
               </form>
            </template>
         </iq-card>
         <iq-card v-if="isSuper || isReviewer">
            <template v-slot:headerTitle>
               <h4 class="card-title">قبول - رفض</h4>
            </template>
            <template v-slot:body>

               <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group align-middle">
                     <h3 class="text-center"> !! الزر الحاسم
                     </h3>
                     <br />
                     <h5 class="text-center">
                        نعم تمامًا فأمكانية الضغط على هذا الزر ستتاح لك حينما نقوم بإنهاء مهمتك المكلف بها في طلب السفير
                        لتوثيق قراءته. اعتمادك الطلب وإرساله للمرحلة القادمة أو رفضه مسؤولية حقيقية لأنها تؤثر على حماية
                        التعلم وجودة التعليم. كن حريصًا على إتمام مهمتك بكل دقة قبل الضغط على هذا الزر أدناه. يتاح
                        القبول بعد اكتمال الشروط، ويكون الرفض في حال وجود مشكلة حقيقية في الطلب كأن يكون مخالف لشروط
                        الحصرية أو مشاكل أخرى مخالفة للقانون
                     </h5>

                     <!-- ACCEPT -->
                     <input type="button" value="توثيق صالح للتقييم" class="btn btn-primary d-block w-100 mt-3 "
                        @click="accept()" :disabled='!isAccepted' v-if="isReviewer" />
                     <!-- END ACCEPT -->
                     <!-- REJECT -->
                     <div v-if="isSuper">

                        <input type="button" value="توثيق مرفوض" class="btn btn-danger d-block mt-3 w-100"
                           @click="setReject()" v-if="!reject" />
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
                           <input type="button" value="توثيق مرفوض" class="btn btn-danger d-block mt-3 w-100"
                              @click="rejectUserBook()" />
                        </div>
                     </div>
                     <!-- END REJECT -->

                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                     <div class="image-block text-center">
                        <img src="@/assets/images/main/accept-reject.png" class="img-fluid rounded w-75"
                           alt="blog-img" />
                     </div>
                  </div>
               </div>

            </template>
         </iq-card>

      </div>
      <div class="col-sm-12" v-else>
         <iq-card class="iq-card">
            <div class="iq-card-body p-0">
               <div class="image-block text-center">
                  <img src="@/assets/images/main/export-congrats.png" class="img-fluid rounded w-50" alt="blog-img">
               </div>

               <h4 class="text-center mt-3">لا يوجد أسئلة</h4>
               <p class="text-center">
                  تمت مراجعة جميع الأسئلة
               </p>
            </div>
         </iq-card>

      </div>
   </div>
</template>
<script>
import question from './question'
import questionServices from '@/API/EligibleServices/questionServices'
import userBookServices from '@/API/EligibleServices/userBookServices'
import UserInfoService from '@/Services/userInfoService'
import useVuelidate from "@vuelidate/core";
import { required, requiredIf } from "@vuelidate/validators";


export default {
   name: 'Simple',
   components: {
      question,
   },
   setup() {
      return { v$: useVuelidate() };
   },
   async created() {
      await this.getQuestions();
   },
   data() {
      return {
         current: 1,
         questions: [],
         reject: false,
         rejectNote: '',
         userBook: null,
         acceptedQuestions: 0,
         loader: false,
      }
   },

   validations() {
      return {
         rejectNote: {
            required: requiredIf(function (nestedModel) {
               return this.reject == true;
            }),
         },
         reviweNote: {
            required
         },
      };
   },

   methods: {
      handleStatusUpdated() {
         this.getQuestions()
      },

      async getQuestions() {
         const response = await questionServices.getByUserBook(this.$route.params.user_book_id);
         this.questions = response.questions;
         this.userBook = response.userBook;
         this.acceptedQuestions = response.acceptedQuestions

      },

      changeTab(tab) {
         this.current = tab
         window.scrollTo({ behavior: 'smooth' })
      },
      checkActive(item, active) {
         let className = ''
         if (this.current > item) {
            className = 'active'
         }
         if (this.current > active) {
            className = className + ' done'
         }
         return className
      },
      setReject() {
         this.reject = true;
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
                     userBookServices.rejectRetardUserBook(this.$route.params.user_book_id, this.rejectNote, 'rejected')
                        .then(response => {
                           swalWithBootstrapButtons.fire({
                              title: 'تم الرفض',
                              text: 'تم رفض التوثيق',
                              icon: 'success',
                              showClass: {
                                 popup: 'animate__animated animate__zoomIn'
                              },
                              hideClass: {
                                 popup: 'animate__animated animate__zoomOut'
                              }
                           })
                           this.$router.push({ name: `questions.list` })
                        })
                        .catch(error => {
                           console.log(error)
                        })

                  }
               })
         }
      },
      accept(id) {
         const swalWithBootstrapButtons = this.$swal.mixin({
            customClass: {
               confirmButton: 'btn btn-primary btn-lg',
               cancelButton: 'btn btn-outline-primary btn-lg ms-2'
            },
            buttonsStyling: false
         })
         swalWithBootstrapButtons.fire({
            title: 'هل أنت متأكد؟',
            text: "موافقتك تعني قبول توثيق هذا السفير",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'نعم قم بالقبول',
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
                  questionServices.acceptQuestion(this.userBook.id, 'audit')
                     .then(response => {
                        swalWithBootstrapButtons.fire({
                           title: 'تم القبول',
                           text: 'تم قبول التوثيق',
                           icon: 'success',
                           showClass: {
                              popup: 'animate__animated animate__zoomIn'
                           },
                           hideClass: {
                              popup: 'animate__animated animate__zoomOut'
                           }
                        })
                        location.reload()
                     })
                     .catch(error => {
                        console.log(error)
                     })
               }
            })
      },
   },
   computed: {
      isAccepted() {
         return this.acceptedQuestions >= 5 ? true : false;
      },
      user() {
         return this.$store.getters.getUser;
      },
      isSuper() {
         return UserInfoService.hasRoles(this.user, [
            "admin",
            "eligible_admin",
            "super_auditer",
            "super_reviewer",
         ]);
      },
      isAuditer() {
         return UserInfoService.hasRoles(this.user, [
            "admin",
            "eligible_admin",
            "super_auditer",
            "auditor",
         ]);
      },
      isReviewer() {
         return UserInfoService.hasRoles(this.user, [
            "admin",
            "eligible_admin",
            "super_reviewer",
            "reviewer",
         ]);
      },
   }

}
</script>
<style scoped>
#top-tab-list {
   margin-bottom: 0;
   ;
}
</style>