<template lang="">
  <div
    class="mt-3 d-flex align-content-start flex-wrap"
    style="position: relative"
  >
    <span
      role="button"
      @click="showUserInfo = !showUserInfo"
      class="align-middle material-symbols-outlined text-danger"
      v-click-outside="onClickOutside"
    >
      info
    </span>

    <div
      :class="`dropdown-menu dropdown-menu-right ${showUserInfo ? 'show' : ''}`"
      aria-labelledby="user-info-menu"
      style="top: 30px"
    >
      <div
        class="d-flex gap-1 align-items-center p-2"
        v-for="parent in question.user_parents"
        :key="parent.role"
      >
        <span>
          <strong> {{ parent.role }} </strong>
        </span>

        <span>
          {{ parent.name }}
        </span>
      </div>
    </div>

    <button
      v-if="
        (question.user.id === auth.id || advisorAndAbove) &&
        question.status === 'open'
      "
      class="bg-primary rounded badge text-white border-0 ms-1 me-1"
      @click="solveQuestion"
      :disabled="loadingSolve"
    >
      <img
        v-if="loadingSolve"
        :src="require('@/assets/images/gif/page-load-loader.gif')"
        alt="loader"
        style="height: 20px"
      />
      <span v-else> انتهاء </span>
    </button>
    <button
      v-if="
        question.assignee.id === auth.id &&
        !isAssigneeAdmin &&
        question.status === 'open'
      "
      class="bg-dark rounded badge text-white border-0 ms-1 me-1"
      @click="assignToParent"
    >
      <img
        v-if="loadingAssign"
        :src="require('@/assets/images/gif/page-load-loader.gif')"
        alt="loader"
        style="height: 20px"
      />
      <span v-else> رفع إلى المسؤول </span>
    </button>

    <button
      v-if="consultantAndAbove && question.status === 'open'"
      class="bg-info rounded badge text-white border-0 ms-1 me-1"
      @click="moveToDiscussion"
    >
      <img
        v-if="loadingDiscussion"
        :src="require('@/assets/images/gif/page-load-loader.gif')"
        alt="loader"
        style="height: 20px"
      />
      <span v-else> نقاش </span>
    </button>

    <button
      v-if="consultantAndAbove && question.status === 'discussion'"
      class="bg-info rounded badge text-white border-0 ms-1 me-1"
      @click="moveToQuestions"
    >
      <img
        v-if="loadingDiscussion"
        :src="require('@/assets/images/gif/page-load-loader.gif')"
        alt="loader"
        style="height: 20px"
      />
      <span v-else> إعادة </span>
    </button>
  </div>
</template>
<script>
import GeneralConversationService from "@/API/services/general-conversation.service";
import vClickOutside from "click-outside-vue3";
import userInfoService from "@/Services/userInfoService";
import helper from "@/utilities/helper";
import { getErrorMessage } from "@/utilities/errors";

export default {
  name: "QuestionActions",
  data() {
    return {
      loadingSolve: false,
      loadingClose: false,
      loadingAssign: false,
      loadingDiscussion: false,
      showUserInfo: false,
    };
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },

  inject: ["question"],
  computed: {
    auth() {
      return this.$store.getters.getUser;
    },
    isAuthAdmin() {
      return userInfoService.hasRole(this.auth, "admin");
    },
    consultantAndAbove() {
      return userInfoService.hasRoles(this.auth, ["admin", "consultant"]);
    },
    advisorAndAbove() {
      return userInfoService.hasRoles(this.auth, [
        "admin",
        "consultant",
        "advisor",
      ]);
    },
    isAssigneeAdmin() {
      return userInfoService.hasRole(this.question.assignee, "admin");
    },
  },
  methods: {
    ...helper,
    onClickOutside() {
      this.showUserInfo = false;
    },

    async solveQuestion() {
      if (this.loadingSolve) {
        return;
      }
      this.loadingSolve = true;
      try {
        await GeneralConversationService.solveQuestion(this.question.id);
        this.toggleToast("تم إغلاق التحويل", "success");

        //reload the window
        setTimeout(() => {
          location.reload();
        }, 1000);
      } catch (error) {
        this.toggleToast(getErrorMessage(error), "error");
      } finally {
        this.loadingSolve = false;
      }
    },

    async assignToParent() {
      if (this.loadingAssign) {
        return;
      }
      this.loadingAssign = true;
      try {
        const response = await GeneralConversationService.assignToParent(
          this.question.id,
        );

        this.toggleToast("تم تعيين التحويل للمشرف", "success");

        setTimeout(() => {
          location.reload();
        }, 1000);
      } catch (error) {
        this.toggleToast(getErrorMessage(error), "error");
      } finally {
        this.loadingAssign = false;
      }
    },

    async moveToDiscussion() {
      if (this.loadingDiscussion) {
        return;
      }
      this.loadingDiscussion = true;
      try {
        await GeneralConversationService.moveToDiscussion(this.question.id);
        this.toggleToast("تم نقل التحويل للنقاش", "success");

        setTimeout(() => {
          this.$router.push({ query: { keyword: "discussion-questions" } });
          location.reload();
        }, 1000);
      } catch (error) {
        this.toggleToast(getErrorMessage(error), "error");
      } finally {
        this.loadingDiscussion = false;
      }
    },

    async moveToQuestions() {
      if (this.loadingDiscussion) {
        return;
      }
      this.loadingDiscussion = true;
      try {
        await GeneralConversationService.moveToQuestions(this.question.id);
        this.toggleToast("تم نقل التحويل للأسئلة", "success");

        setTimeout(() => {
          this.$router.replace({ query: { keyword: "my-questions" } });
          location.reload();
        }, 1000);
      } catch (error) {
        this.toggleToast(getErrorMessage(error), "error");
      } finally {
        this.loadingDiscussion = false;
      }
    },
  },
};
</script>
<style lang=""></style>