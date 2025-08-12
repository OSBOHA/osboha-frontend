<template>

    <div class="sign-in-from">
        <form class="mt-2" @submit.prevent="onSubmit()">
            <div class="form-group" v-if="selectedAmbassadors.length > 0">
                <label for="leader_email">القائد الجديد</label>
                <input v-model="v$.form.leader_email.$model" type="email" class="form-control mb-0" id="leader_email"
                    placeholder="ادخل بريد القائد الجديد" @change="checkLeaderGroups" />
                <template v-if="v$.form.leader_email.$error">
                    <small style="color: red" v-if="v$.form.leader_email.required.$invalid">البريد الالكتروني
                        للقائد الجديد
                        مطلوب</small>
                    <small style="color: red" v-if="v$.form.leader_email.email.$invalid">البريد الالكتروني
                        للقائد الجديد غير
                        صحيح</small>
                </template>
            </div>
            <div class="form-group" v-if="leader_groups.length > 0" mt-2>
                <span>هذا القائد مرتبط بأكثر من فريق، إلى أي فريق تريد نقل السفراء؟</span>
                <select class="form-select" v-model="v$.form.target_group_id.$model">
                    <option :value="null" selected>اختر الفريق </option>
                    <option v-for="group in leader_groups" :key="group.id" :value="group.id">{{ group.name }}
                    </option>
                </select>
                <template v-if="v$.form.target_group_id.$error">
                    <small style="color: red">يجب اختيار الفريق</small>
                </template>
            </div>
            <hr />

            <div class="form-group" v-for="(ambassador, index) in form.ambassadors" :key="index">
                <label for="ambassador">
                    البريد الالكتروني للسفير
                    {{ index + 1 }}
                </label>
                <div class="d-flex">
                    <input v-model="ambassador.ambassador_email" type="email" class="align-middle form-control mb-0"
                        id="ambassador" placeholder="ادخل البريد الالكتروني للسفير" />
                    <small class=" material-symbols-outlined" role="button" @click="removeField(index)">
                        close
                    </small>
                </div>
                <template v-if="v$.form.ambassadors.$error">
                    <small v-for="(amb, index) in v$.form.ambassadors.$each" :key="index">
                        <span v-if="amb.ambassador_email.required.$invalid" style="color:red">
                            البريد الإلكتروني للسفير مطلوب
                        </span>
                        <span v-else-if="amb.ambassador_email.email.$invalid" style="color:red">
                            البريد الإلكتروني للسفير غير صحيح
                        </span>
                    </small>
                </template>
            </div>
            <div class="ms-2 mb-2" v-if="selectedAmbassadors.length >= 0">
                <button type="button" class="btn btn-info" @click="addField">
                    <span class="align-middle material-symbols-outlined">
                        person_add
                    </span>

                </button>
            </div>

            <div class="form-group text-center" v-if="message">
                <small style="color: red">
                    {{ message }}
                </small>
            </div>

            <div class="form-group text-center" v-if="not_exists && not_exists.length > 0">
                <h4> سفراء غير موجودون </h4>
                <h5 style="color: red" v-for="ambassador in not_exists" :key="ambassador">
                    - {{ ambassador }}
                    <br />
                </h5>
            </div>

            <div class="col-sm-12 text-center" v-if="loader">
                <p class="text-center">جاري النقل</p>
                <img src="@/assets/images/gif/page-load-loader.gif" alt="loader" style="height: 100px" />
            </div>
            <div class="d-inline-block w-100" v-else>
                <button type="submit" class="btn btn-primary float-end" :disabled="loader">
                    نقل
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, requiredIf } from "@vuelidate/validators";
import RolesService from "@/API/services/roles.service";
import UserGroup from "@/API/services/user-group.service";

export default {
    name: "Transfer Ambassadors",
    setup() {
        return { v$: useVuelidate() };
    },
    created() {
        this.form.ambassadors = this.selectedAmbassadors;
    },
    props: {
        selectedAmbassadors: {
            type: [Array]
        },
    },
    data() {
        return {
            loader: false,
            leader_groups: [],
            form: {
                ambassadors: [
                    { ambassador_email: '' }
                ],
                target_group_id: null,
                leader_email: '',
            },
            message: "",
            not_exists: [],

        };
    },
    validations() {
        return {
            form: {
                ambassadors: {
                    required,
                    minLength: minLength(1),
                    $each: {
                        ambassador_email: {
                            required,
                            email
                        }
                    }
                },
                target_group_id: {
                    required: requiredIf(function () {
                        return this.leader_groups.length > 0;
                    }),

                },
                leader_email: { required, email },
            },
        };
    },
    methods: {
        addField() {
            this.form.ambassadors.push({ ambassador_email: '' });
        },
        removeField(index) {
            this.form.ambassadors.splice(index, 1);
        },


        async onSubmit() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.loader = true;
                try {
                    this.message = "";
                    const response = await RolesService.transferAmbassador(this.form);
                    this.not_exists = response.not_exists;
                    this.message = response.message;
                    console.log("🚀 ~ onSubmit ~ this.message:", this.response)

                    this.resetForm();

                    setTimeout(() => {
                        this.message = "";
                    }, 3000);

                    this.$emit('ambassadors_transferred')

                } catch (error) {
                    this.message = "حدث خطأ, يرجى المحاولة لاحقاً";
                } finally {
                    this.loader = false;
                }
            }
        },
        async checkLeaderGroups() {
            if (this.form.leader_email) {
                this.leader_groups = await UserGroup.getLeaderGroupsByEmail(this.form.leader_email);
            }
        },
        resetForm() {
            this.v$.form.$reset();
            this.form = {
                ambassadors: [
                    { ambassador_email: '' }
                ],
                target_group_id: null,
                leader_email: ''
            };

        },
    },
};
</script>