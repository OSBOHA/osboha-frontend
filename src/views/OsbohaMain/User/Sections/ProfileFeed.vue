<template>
  <tab-content-item
    :active="true"
    id="profile-feed"
    aria-labelled-by="pills-feed-tab"
  >
    <div class="iq-card-body p-0">
      <div class="row">
        <div class="col-lg-4">
          <!-- ########## START FRIENDS ########## -->
          <iq-card>
            <template v-slot:headerTitle>
              <h4 class="card-title">الأصدقاء</h4>
            </template>
            <template v-slot:headerAction v-if="friends.length > 0">
              <router-link
                :to="{ name: 'user.friendsList', params: { user_id: user_id } }"
              >
                <p class="m-0">مشاهدة الكل</p>
              </router-link>
            </template>
            <template v-slot:body v-if="friends.length > 0">
              <button
                type="button"
                @click="show_friends = !show_friends"
                class="mb-3 btn bg-white text-dark border-dark w-100 d-flex justify-content-between"
              >
                {{ show_friends ? "اخفاء" : "عرض" }}
                <span class="material-symbols-outlined">
                  {{ show_friends ? "visibility_off" : "visibility" }}
                </span>
              </button>
              <div v-show="show_friends">
                <ul class="profile-img-gallary p-0 m-0 list-unstyled">
                  <li
                    v-for="friend in friends.slice(0,6)"
                    :key="friend.id"
                    class="text-center"
                  >
                    <router-link
                      :to="{
                        name: 'user.profile',
                        params: { user_id: friend.id },
                      }"
                    >
                      <BaseAvatar
                        :profileImg="friend?.profile.profile_picture"
                        :profile_id="friend?.profile.id"
                        :title="friend?.name"
                        :gender="friend?.gender"
                        avatarClass="avatar-50 rounded-circle"
                      />
                    </router-link>
                    <h6 class="mt-2 text-center">{{ friend.name }}</h6>
                  </li>
                </ul>
              </div>
            </template>
            <template v-slot:body v-else>
              <p class="m-0">لا يوجد</p>
            </template>
          </iq-card>
          <!-- ########## END FRIENDS ########## -->

          <!-- ########## START EXCEPTIONS ########## -->
          <iq-card v-if="isAuth">
            <template v-slot:headerTitle>
              <h4
                class="card-title"
                data-bs-toggle="collapse"
                data-bs-target="#demo"
              >
                الاجازات
              </h4>
            </template>
            <template v-slot:headerAction>
              <router-link
                      :to="{
                        name: 'user.listException',
                        params: { user_id: user_id },
                      }"
                    >
              <p class="m-0">
                مشاهدة الكل
              </p>
              </router-link>
            </template>
            <template v-slot:body>
              <button
                type="button"
                @click="show_exceptions = !show_exceptions"
                class="btn bg-white text-dark border-dark w-100 d-flex justify-content-between"
                v-if="!show_exceptions"
              >
                عرض
                <span class="material-symbols-outlined"> visibility </span>
              </button>
              <button
                type="button"
                @click="show_exceptions = !show_exceptions"
                class="mb-3 btn bg-white text-dark border-dark w-100 d-flex justify-content-between"
                v-if="show_exceptions"
              >
                اخفاء
                <span class="material-symbols-outlined"> visibility_off </span>
              </button>
              <div v-show="show_exceptions">
                <ul id="exceptionList" class="p-auto m-auto" v-if="exceptions">
                  <li
                    v-for="(exception, index) in exceptions.slice(0, 4)"
                    :key="index"
                    role="button"
                    title="عرض"
                  >
                    <router-link
                      :to="{
                        name: 'exceptions.listException',
                        params: { exception_id: exception.id },
                      }"
                    >
                      <h6
                        class="mt-2"
                        style="direction: rtl !important"
                        v-if="exception.status == 'accepted'"
                      >
                        {{ exception.type.type }} || ينتهي بــ :
                        {{ exception.end_at }}
                      </h6>
                      <h6 class="mt-2" style="direction: rtl !important" v-else>
                        {{ exception.type.type }} ||
                        {{ STATUS[exception.status] }}
                      </h6>
                    </router-link>
                  </li>
                </ul>
                <h4 class="text-center" v-else>لا يوجد</h4>
                <button
                  v-if="isAuth && eligibleForException"
                  @click="requestException()"
                  class="mb-3 mt-3 btn btn-primary w-100 d-flex justify-content-between"
                >
                  طلب اجازة
                </button>
              </div>
            </template>
          </iq-card>
          <!-- ########## END EXCEPTIONS ########## -->
        </div>
        <div class="col-lg-8">
          <div id="post-modal-data" class="iq-card">
            <!-- ##### <AddPost /> ##### -->
            <AddPost
              @addPost="addPost"
              type="normal"
              :timeline_id="timeline_id"
            ></AddPost>
            <!-- ##### <AddPost /> ##### -->

            <!-- ##### LIST POSTS ##### -->
            <LazyLoadedPosts
              :timeline_id="timeline_id"
              ref="lazyLoadedPostsRef"
            />
            <!-- ##### END LIST POSTS ##### -->
          </div>
        </div>
      </div>
    </div>
  </tab-content-item>
</template>

<script>
import LazyLoadedPosts from "@/components/post/LazyLoadedPosts.vue";
import AddPost from "@/components/post/add/AddPost";

export default {
  name: "ProfileFeed",
  components: {
    AddPost,
    LazyLoadedPosts,
  },
  props: {
    //LATER
    // certificates: {
    //   type: [Object],
    //   required: true,
    // },
    profile_media: {
      type: [Object],
      required: true,
    },
    friends: {
      type: [Object],
      required: true,
    },
    exceptions: {
      type: [Object],
      required: true,
    },
    timeline_id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      show_friends: true,
      show_exceptions: true,
      show_media: true,
      show_certificates: true,
      user_id: this.$route.params.user_id,
      STATUS: {
        pending: "قيد المراجعة",
        accepted: "مقبول",
        rejected: "مرفوض",
        cancelled: "ملغي",
        finished: "منتهي",
      },
    };
  },
  computed: {
    eligibleForException() {
      if (this.exceptions.length > 0) {
        if (this.exceptions[0].type == "freez") {
          let lastException = new Date(this.exceptions[0].end_at);
          const nextFreez = new Date(lastException);
          nextFreez.setDate(lastException.getDate() + 40);
          const now = new Date();
          if (now.toLocaleDateString() >= nextFreez.toLocaleDateString()) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    isAuth() {
      return this.$store.getters.getUser.id == this.user_id;
    },
  },
  methods: {
    addPost(post) {
      this.$refs.lazyLoadedPostsRef.addNewPost(post);
    },
    requestException() {
      this.$router.push({
        name: "user.requestexception",
        params: { user_id: this.user_id },
      });
    },
  },
};
</script>
