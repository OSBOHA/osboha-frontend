<template>
  <listOne :exception="exception" :last_freez="last_freez" :last_exam="last_exam" :weeks="weeks"
    :last_exceptional_freez="last_exceptional_freez" :authInGroup="authInGroup" :ambassadorMarks="ambassadorMarks"
    @update_exception="updateException" />
</template>
<script>
import listOne from "@/components/exceptions/listOne";
import exceptionService from "@/API/services/user-exception.service";

export default {
  name: "List Exceptions",
  created() {
    this.getException();
  },
  components: {
    listOne,
  },
  data() {
    return {
      exception: null,
      last_freez: null,
      last_exam: null,
      last_exceptional_freez: null,
      authInGroup: null,
      exception_id: this.$route.params.exception_id,
      weeks: null,
      ambassadorMarks: null,
    };
  },
  methods: {
    updateException() {
      this.getException();
    },
    async getException() {
      const response = await exceptionService.getExceptionById(this.exception_id);
      this.exception = response.user_exception;
      this.weeks = response.weeks
      this.last_freez = response.last_freez;
      this.last_exam = response.last_exam;
      this.last_exceptional_freez = response.last_exceptional_freez;
      this.authInGroup = response.authInGroup;
      this.ambassadorMarks = response.ambassadorMarks
    },
  },

};
</script>