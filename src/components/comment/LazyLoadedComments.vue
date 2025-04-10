<template>
  <div class="row" ref="commentsListRef">
    <!--if no comments found-->
    <div class="cols" v-if="emptyMessage && !comments.length">
      <div class="text-center text-primary m-auto">
        <font-awesome-icon
          :icon="[
            'fas',
            `${post.allow_comments ? 'pen' : 'circle-exclamation'}`,
          ]"
          size="sm"
        />
        <span class="ms-1">{{ emptyMessage }}</span>
      </div>
    </div>
    <!--If error occured during fetching the comments-->
    <div class="cols" v-if="errorMessage">
      <div class="text-center m-auto" style="color: red">
        <font-awesome-icon :icon="['fas', 'circle-exclamation']" size="sm" />
        <span class="ms-1">{{ errorMessage }}</span>
      </div>
    </div>
    <div class="cols" v-for="comment in comments" :key="comment.id">
      <div class="card card-block card-stretch card-height blog">
        <div class="card-body">
          <Comment
            :allowComment="post.allow_comments"
            :comment="comment"
            @addComment="addComment"
            @editComment="editComment"
            @reactToComment="reactToComment"
          />
        </div>
      </div>
    </div>
    <div class="cols text-center" v-if="loading">
      <img
        :src="require('@/assets/images/gif/page-load-loader.gif')"
        alt="loader"
        style="height: 100px"
      />
    </div>
    <button
      v-if="hasMoreComments && !loading && !emptyMessage && !errorMessage"
      class="w-100 p-2 bold-600 text-primary border-0 bg-transparent my-2"
      @click.prevent="loadComments"
    >
      تحميل المزيد من التعليقات
    </button>
  </div>
</template>

<script>
import commentService from "@/API/services/comment.service";
import Comment from "@/components/comment/Comment.vue";
import helper from "@/utilities/helper";
import { commentMixin } from "@/mixins/comment.mixin";

export default {
  name: "LazyLoadedComments",
  components: {
    Comment,
  },
  mixins: [commentMixin],
  provide() {
    return {
      deleteComment: this.deleteComment,
    };
  },
  inject: {
    incrementCommentsCount: {
      default: () => {},
    },
    decrementCommentsCount: {
      default: () => {},
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    userId: {
      type: Number,
      default: null,
    },
    loadOnCreate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      comments: [],
      page: 1,
      totalPages: 1,
      loading: false,
      emptyMessage: "",
      errorMessage: "",
    };
  },
  computed: {
    /**
     * @description checks if the post has more comments to load
     * @returns {boolean}
     */
    hasMoreComments() {
      return this.page <= this.totalPages;
    },
  },
  created() {
    this.page = 1;
    this.totalPages = 1;
    this.comments = [];
    this.emptyMessage = "";
    this.errorMessage = "";

    if (this.loadOnCreate) this.loadComments();
  },
  methods: {
    /**
     * @description: Load the comments of the post
     * 1- check if the comments are already loading
     * 2- set the loading to true
     * 3- try to get the comments
     * 4- if the comments are found
     * 4.1- add the comments to the comments array
     * 4.2- set the totalPages to the last_page
     * 4.3- increment the page
     * 5- if the comments are not found
     * 5.1- set the emptyMessage to "قم بكتابة تعليقك الأول"
     * 6- if there is an error
     * 6.1- set the errorMessage to "حدث خطأ ما، حاول مرة أخرى"
     * 7- set the loading to false
     * @returns {void}
     */
    async loadComments() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        const response = await commentService.getPostComments(
          this.post.id,
          this.page,
          this.userId ?? "",
        );

        if (response.statusCode !== 200) {
          helper.toggleToast(response.message, "error");
          return;
        }

        if (response.data.comments) {
          this.comments = this.comments.concat(response.data.comments);
          this.totalPages = response.data.last_page;
          this.page++;
        } else {
          this.emptyMessage = this.post.allow_comments
            ? "قم بكتابة تعليقك الأول"
            : "لا يوجد تعليقات";
        }
      } catch (error) {
        helper.toggleToast(
          "حدث خطأ أثناء تحميل التعليقات، حاول مرة أخرى",
          "error",
        );
      } finally {
        this.loading = false;
      }
    },
    /**
     * @description add the comment to the comments array
     * if the comment_id is not provided, add the comment to the comments array
     * otherwise, add the comment to the replies array of the comment
     * emit the incrementCommentsCount event to increment the comments count of the post
     * scroll to the bottom of the modal body
     * @param comment: the comment object
     * @param comment_id: the id of the comment
     */
    addComment(comment, comment_id) {
      if (!comment_id) {
        this.comments.push(comment);
        this.$nextTick(() => {
          //scroll to the bottom of the div
          const commentsDivl = this.$refs.commentsListRef;
          commentsDivl.scrollTop = commentsDivl.scrollHeight;
        });
      } else {
        let commentToUpdate = this.findComment(this.comments, comment_id);
        commentToUpdate.replies.push(comment);
      }
      this.incrementCommentsCount(this.post.id);
    },

    deleteComment(comment_id) {
      const options = {
        itemsKey: "comments",
        type: "post",
      };

      this.$options.mixins[0].methods.deleteComment.call(
        this,
        comment_id,
        options,
      );
    },

    editComment(comment) {
      const options = {
        itemsKey: "comments",
      };

      this.$options.mixins[0].methods.editComment.call(this, comment, options);
    },

    reactToComment(comment_id, status) {
      const options = {
        itemsKey: "comments",
      };

      this.$options.mixins[0].methods.reactToComment.call(
        this,
        comment_id,
        status,
        options,
      );
    },

    resetData() {
      this.page = 1;
      this.totalPages = 1;
      this.comments = [];
      this.emptyMessage = "";
      this.errorMessage = "";
      this.loadComments();
    },
  },
};
</script>

<style lang="scss" scoped></style>
