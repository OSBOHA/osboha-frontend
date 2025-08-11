<template>
    <form @submit.prevent="submitException" class="post-text ml-3 w-100 row">
        <div class="form-group mt-3 mb-1">
            <h4>السبب</h4>
            <div class="form-group row ">
                <textarea rows="5" placeholder="سبب التجميد الاستثنائي" class="rounded form-control mt-2 col-12"
                    id="exceptionReason" v-model="v$.exceptionForm.reason.$model" name="reason">
                        </textarea>
                <p class="mb-0">
                    <span :class="{ 'text-danger': v$.exceptionForm.reason.$error }">
                        {{ v$.exceptionForm.reason.$model.length }}
                    </span>
                    /250
                </p>
            </div>
            <small class="d-block text-start mt-1" style="color: red" v-if="v$.exceptionForm.reason.$error">
                * قم بادخال سبب لا ينقص عن 10 حروف ولا يزيد عن 250 حرف
            </small>
        </div>
        <div class="form-group">
            <button type="submit" :disabled="message" class="btn d-block btn-freez float-end mx-auto">
                تجميد
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
    name: "Freeze Request Form",
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
            showExceptionForm: false,
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
        async submitException() {
            this.v$.$touch();
            if (!this.v$.exceptionForm.$invalid) {
                this.message = "";
                this.loader = true;
                try {
                    const response = await exceptionService.setExceptionalFreez(this.exceptionForm);

                    this.message = response;
                    this.showExceptionForm = false
                    this.v$.exceptionForm.$reset();
                } catch (error) {
                    console.log("[Exception request error]", error);
                } finally {
                    this.loader = false;
                }
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