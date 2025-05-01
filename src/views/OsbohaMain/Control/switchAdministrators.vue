<template>
    <div class="col-sm-12 mt-3">
        <iq-card class="iq-card">
            <div class="iq-card-body p-4">
                <div class="image-block text-center">
                    <img src="@/assets/images/main/change-advising-team.png" class="img-fluid rounded w-75"
                        alt="تبديل مسؤول" />
                </div>
            </div>

            <div class="col-12 bg-white pt-2">

                <div class="sign-in-from">
                    <form class="mt-2" @submit.prevent="onSubmit()">
                        <div class="form-group">
                            <label for="role">اختر نوع الاجراء</label>
                            <select v-model="v$.form.role.$model" class="form-select" data-trigger name="role"
                                id="role">
                                <option value="" selected>اختر نوع الاجراء ...</option>
                                <option value="consultant">تبديل مستشار</option>
                                <option value="advisor">تبديل موجه</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <!-- ########## currentLeader ########## -->

                            <label for="currentLeader">المسؤول الجديد</label>
                            <input v-model="v$.form.new_administrator_email.$model" type="email"
                                class="form-control mb-0" id="new_administrator_email"
                                placeholder="ادخل بريد المسؤول الجديد" />
                            <template v-if="v$.form.new_administrator_email.$error">
                                <small style="color: red"
                                    v-if="v$.form.new_administrator_email.required.$invalid">البريد
                                    الالكتروني
                                    للمسؤول
                                    مطلوب</small>
                                <small style="color: red" v-if="v$.form.new_administrator_email.email.$invalid">البريد
                                    الالكتروني
                                    للمسؤول الحالي غير
                                    صحيح</small>
                            </template>
                        </div>

                        <div class="form-group text-center" v-if="message">
                            <small style="color: red">
                                {{ message }}
                            </small>
                        </div>
                        <div class="col-sm-12 text-center" v-if="loader">
                            <p class="text-center">جاري التبديل</p>
                            <img src="@/assets/images/gif/page-load-loader.gif" alt="loader" style="height: 100px" />
                        </div>
                        <div class="d-inline-block w-100" v-else>
                            <button type="submit" class="btn btn-primary float-end" :disabled="loader">
                                تبديل
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex justify-content-end me-2">
                <back-button routeName="group.group-detail" :routeParams="{ group_id: this.$route.params.group_id }" />
            </div>

        </iq-card>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import RolesService from "@/API/services/roles.service";
import BackButton from '@/components/common/BackButton.vue';

export default {
    name: "Switch Administrator",
    components: {
        BackButton,
    },
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            loader: false,
            form: {
                new_administrator_email: "",
                role: '',
                group_id: this.$route.params.group_id,
            },
            message: "",
        };
    },
    validations() {
        return {
            form: {
                new_administrator_email: { required, email },
                role: { required },

            },
        };
    },
    methods: {
        async onSubmit() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.loader = true;
                try {
                    this.message = "";
                    let response = null;
                    response = await RolesService.switchAdministrators(this.form);
                    this.message = response;

                    this.resetForm();

                    setTimeout(() => {
                        this.message = "";
                    }, 1800);
                } catch (error) {
                    this.message = "حدث خطأ, يرجى المحاولة لاحقاً";
                } finally {
                    this.loader = false;
                }
            }
        },

        resetForm() {
            this.v$.form.$reset();
            this.form = {
                role: "",
                new_administrator_email: "",
                group_id: this.$route.params.group_id,
            };

        },
    },
};
</script>