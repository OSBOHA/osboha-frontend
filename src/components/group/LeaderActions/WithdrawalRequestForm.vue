<template>
    <div class="col-sm-12 mt-3 text-center">
        <h3 class="text-center mt-3 mb-3">طلب انسحاب مؤقت</h3>

        <div class="d-flex align-items-center mt-3">
            <form @submit.prevent="submitException" class="post-text ml-3 w-100 row">
                <div class="form-group">
                    <h4>السبب</h4>
                    <div class="form-group row">
                        <textarea :disabled="message" rows="5" placeholder="سبب طلب الاجازة"
                            class="rounded form-control mt-2 col-12" id="exceptionReason"
                            v-model="v$.exceptionForm.reason.$model" name="reason"></textarea>
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
                <hr />
                <div class="form-group">
                    <button type="submit" :disabled="message" class="btn d-block btn-danger mt-3 mb-3 w-75 mx-auto">
                        رفع الطلب
                    </button>
                </div>

                <div class="col-sm-12 text-center" v-if="loader">
                    <img src="@/assets/images/gif/page-load-loader.gif" alt="loader" style="height: 100px" />
                </div>
                <h4 class="text-center mt-3 mb-3" v-if="message">{{ message }}</h4>
            </form>
        </div>
    </div>
</template>
<script>
import exceptionService from "@/API/services/user-exception.service";
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength, requiredIf } from "@vuelidate/validators";

export default {
    name: "New Exception",
    async created() {
        this.exceptionForm.user_id = this.user_to_withdraw_id;
    },
    components: {},
    setup() {
        return { v$: useVuelidate() };
    },
    props: {
        user_to_withdraw_id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            loader: false,
            exceptionForm: {
                reason: "",
                type_id: 6,
                user_id: null,
                requested_by: true,
            },
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
                type_id: {
                    required,
                },
                user_id: {
                    required,
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
                    const response = await exceptionService.create(this.exceptionForm);

                    this.message = response;
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