<template>
  <div class="row" v-if="profile">
    <div class="col-sm-12">
      <!-- START MAIN INFORMATION -->
      <MainInfo :authFriendship="authFriendship" :user="profile.user" :roles="profile.roles" :readingInfo="readingInfo"
        :profile="profile.info" @editAuthFriendship="editAuthFriendship" />
      <!-- END MAIN INFORMATION -->

      <!-- START PROFILE NAVIGATION -->
      <iq-card class="iq-card">
        <div class="iq-card-body p-0">
          <div class="user-tabing">
            <tab-nav :pills="true" id="pills-tab"
              class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
              <tab-nav-items class="col-sm-3 p-0" :active="true" id="pills-feed-tab" href="#profile-feed"
                ariaControls="pills-home" role="tab" :ariaSelected="true" title="الرئيسية" />
              <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-bout-tab" href="#profile-about"
                ariaControls="pills-profile" role="tab" :ariaSelected="false" title="معلومات المستخدم" />
              <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-books-tab" href="#profile-books"
                ariaControls="pills-contact" role="tab" :ariaSelected="false" title="الكتب" />
              <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-statistics-tab" href="#profile-statistics"
                ariaControls="pills-contact" role="tab" :ariaSelected="false" title="احصائيات" />
            </tab-nav>
          </div>
        </div>
      </iq-card>
      <!-- END PROFILE NAVIGATION -->
    </div>

    <div class="col-sm-12">
      <div class="tab-content">
        <!-- ########## START PROFILE FEED ########## -->
        <ProfileFeed :friends="profile.friends" :exceptions="profile.exceptions" :profile_media="profile_media"
          :timeline_id="profile.user.user_profile.timeline_id" />
        <!-- ########## END PROFILE FEED ########## -->

        <!-- ########## START ABOUT ########## -->
        <tab-content-item :active="false" id="profile-about" aria-labelled-by="pills-about-tab">
          <iq-card>
            <template v-slot:body>
              <About :user_about="profile.info" :user="profile.user" :social_media="profile.social_media"
                :groupAdministrators="profile.groupAdministrators"
                :friends="profile.friends" />
            </template>
          </iq-card>
        </tab-content-item>
        <!-- ########## End ABOUT ########## -->

        <!-- ########## START Books ########## -->
        <tab-content-item :active="false" id="profile-books" aria-labelled-by="pills-book-tab">
          <Books  />
        </tab-content-item>
        <!-- ########## END Books ########## -->

        <!-- ########## START STATISTICS ########## -->
        <tab-content-item :active="false" id="profile-statistics" aria-labelled-by="pills-statistics-tab">
          <Statistics />
        </tab-content-item>
        <!-- ########## END STATISTICS ########## -->
      </div>
    </div>
  </div>
</template>
<script>
import About from "./Sections/About";
import Books from "./Sections/Books";
import MainInfo from "./Sections/MainInfo";
import ProfileFeed from "./Sections/ProfileFeed";
import Statistics from "./Sections/Statistics";

import UserProfile from "@/API/services/user-profile.service";
import { watchEffect } from "vue";

export default {
  name: "Profile",
  components: {
    MainInfo,
    ProfileFeed,
    About,
    Books,
    Statistics,
  },
  data() {
    return {
      profile: null,
      authFriendship: null,
      readingInfo: [
        {
          title: "الكتب المقروءة",
          value: 0,
        },
        {
          title: "الاطروحات",
          value: 0,
        },
      ],
      profile_media: [
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
        require("@/assets/images/main/reading_list.png"),
      ],
    };
  },
  created() {
    this.getProfile();
  },
  watch: {
    $route(to, from) {
      if (to.name === "user.profile") {
        this.getProfile();
      }
    },
  },
  methods: {
    editAuthFriendship(edittedKey) {
      this.authFriendship = {
        ...this.authFriendship,
        ...edittedKey,
      };
    },

    async getProfile() {
      this.profile = null;
      this.profile = await UserProfile.getUserProfileById(
        this.$route.params.user_id
      );
      this.readingInfo[0].value = this.profile.reading_Info.books;
      this.readingInfo[1].value = this.profile.reading_Info.thesis;
      this.authFriendship = {
        friendWithAuth: this.profile.friendWithAuth,
        friendRequestByAuth: this.profile.friendRequestByAuth,
        friendRequestByFriend: this.profile.friendRequestByFriend,
        friendship_id: this.profile.friendship_id,
      };
    },
  },
  beforeRouteLeave(to, from, next) {
    this.profile = null;
    next();
  },
};
</script>