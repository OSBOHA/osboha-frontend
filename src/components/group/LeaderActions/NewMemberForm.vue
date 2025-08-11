<template>

    <form @submit.prevent="submitIsNew" class="mt-3 post-text ml-3 w-100 row">
        <div class="form-check mt-2 w-100 text-start">
            <input type="checkbox" :checked="allowSubmitIsNew" class="form-check-input" id="allow_submit_is_new"
                ref="allow_submit_is_new" @click="allowSubmitIsNew = !allowSubmitIsNew">
            <h4 class="form-check-label" for="allow_submit_is_new">
                هذا العضو جديد وفي اسبوعه الأول أو الثاني أو الثالث
            </h4>
        </div>
        <div class="form-group">
            <button type="submit" :disabled="!allowSubmitIsNew" class="btn d-block btn-primary float-end mx-auto">
                اعتماد عضو جديد
            </button>
        </div>
    </form>

    <div class="col-sm-12 text-center" v-if="loader">
        <img src="@/assets/images/gif/page-load-loader.gif" alt="loader" style="height: 100px" />
    </div>
    <h4 class="text-center mt-3 mb-3" v-if="message">{{ message }}</h4>
</template>
<script>
import exceptionService from "@/API/services/user-exception.service";
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
    name: "New Member Form",
    setup() {
        return { v$: useVuelidate() };
    },
    created() {
        this.exceptionForm.user_id = this.user.id;
        this.exceptionForm.week_id = this.$route.params.week_id;

    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            exceptionForm: {
                reason: "",
                user_id: 0,
                week_id: 0,
            },
            allowSubmitIsNew: false,
            loader: false,
            message: null,
        };
    },
    validations() {
        return {
            exceptionForm: {
                reason: {
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(250),
                },
            },
        };
    },

    methods: {
        async submitIsNew() {
            this.message = "";
            this.loader = true;
            try {
                this.exceptionForm.reason = 'عضو جديد';
                const response = await exceptionService.setNewUser(this.exceptionForm);

                this.message = response;
                this.showIsNewForm = false
                this.v$.exceptionForm.$reset();
            } catch (error) {
                console.log("[submit new user error]", error);
            } finally {
                this.loader = false;
            }
        },
    },
};
</script>
<style scoped>
.btn-freez {
    background-color: #223e7f;
    color: white;
}
</style>