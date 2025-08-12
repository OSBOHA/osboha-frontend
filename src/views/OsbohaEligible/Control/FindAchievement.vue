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
    <div class="col-sm-12" v-if="show == 1 && user_book_id">
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
        </template>
      </iq-card>

      <iq-card>
        <template v-slot:body v-if="show">
          <div class="table-responsive">
            <table id="datatable" class="table table-striped table-bordered">
              <thead class="col-12">
                <tr>
                  <th>الأطروحات</th>
                  <th>الأسئلة</th>
                  <th>التلخيص العام</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>
                    <router-link target="_blank"
                      :to="{ name: `thesis-review.thesis`, params: { user_book_id: user_book_id } }">
                      📑 عرض الأطروحات
                    </router-link>
                  </td>
                  <td>
                    <router-link target="_blank"
                      :to="{ name: `questions.questions`, params: { user_book_id: user_book_id } }">
                      ❓ عرض الأسئلة
                    </router-link>
                  </td>
                  <td>
                    <router-link target="_blank"
                      :to="{ name: `general.general_informations`, params: { user_book_id: user_book_id } }">
                      📝 عرض التلخيص
                    </router-link>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </template>
        <template v-slot:body v-else>
          <h4 class="card-title">لا يوجد</h4>
        </template>

      </iq-card>

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

export default {
  name: "Find Achievements",
  data() {
    return {
      achievement: {},
      user_book_id: null,
      bookName: "",
      userName: "",
      search: null,
      show: null,
      userBook: null,
      reject: false,
      rejectNote: '',

    };
  },

  methods: {
    async getInfo() {
      this.achievement = {};
      this.show = 0
      this.achievement = await userBookService.searchUserBook(this.search);
      if (this.achievement && this.achievement != 'UserBook does not exist') {
        this.userBook = this.achievement.userBook
        if (this.userBook) {
          this.bookName = this.userBook.book.name;
          this.userName = this.userBook.user.name + " " + this.userBook.user.last_name;
          this.user_book_id = this.userBook.id;
          this.show = 1

        }
      }
      else {
        this.show = 0

      }

    },
  },
};
</script>