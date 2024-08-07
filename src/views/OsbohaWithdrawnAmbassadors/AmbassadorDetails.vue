<template>
    <div class="container" style="background-color: #f1f9f5">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="card" style="border-radius: 15px" v-if="user">
                <div class="card-body text-center">
                    <div class="mt-3 mb-3">
                        <BaseAvatar :profileImg="user.user_profile.profile_picture" :profile_id="user.user_profile.id"
                            :title="user.gender" :gender="user.gender" avatarClass="avatar-130 img-fluid rounded-circle"
                            containerClass="profile-img" :imageStyle="{ border: '4px solid #1d1a55' }"
                            dimensions="150x150" />
                    </div>
                    <router-link :to="{
                        name: 'user.profile',
                        params: { user_id: user.id },
                    }">
                        <h2 class="mb-2 text-center">{{ user.name + " " + user.last_name }}</h2>
                    </router-link>
                    <div class="social-links mt-1 mb-3">
                        <ul class="social-data-block align-items-center justify-content-center list-inline p-0 m-0"
                            style="display: flex !important">
                            <li v-for="(role, index) in roles" :key="index" class="text-center pe-2">
                                <span class="rounded-pill badge bg-primary px-2">{{
                                    ARABIC_ROLES[role]
                                }}</span>
                            </li>

                            <li v-if="user.is_excluded" class="text-center pe-2">
                                <span class="rounded-pill badge bg-danger px-2">
                                    مستبعد
                                </span>
                            </li>
                            <li v-if="user.is_hold" class="text-center pe-2">
                                <span class="rounded-pill badge bg-secondary px-2">
                                    منسحب
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="row">
                        <h5 class="mb-2 text-start" style="direction: rtl">
                            <span class="material-symbols-outlined align-middle">
                                heart_plus
                            </span>
                            تاريخ الانضمام:
                            <span>
                                {{ format_date(user.created_at) }}
                            </span>
                        </h5>
                        <h5 class="mb-2 text-start" style="direction: rtl">
                            <span class="material-symbols-outlined align-middle">
                                heart_broken
                            </span>
                            تاريخ الانسحاب:
                            <span>
                                {{ group ? format_date(group.updated_at) : " غير محدد " }}
                            </span>
                        </h5>

                        <h5 class="mb-2 text-start" style="direction: rtl">
                            <span class="material-symbols-outlined align-middle">
                                diversity_1
                            </span>
                            فريق المتابعة:
                            <span>
                                {{ group ? group.group.name : " غير محدد " }}
                            </span>
                        </h5>
                        <h5 class="mb-2 text-start" style="direction: rtl">
                            <span class="material-symbols-outlined align-middle">
                                warning
                            </span>
                            سبب الانسحاب:
                            <span>
                                {{ exception ? exception.reason : " غير محدد " }}
                            </span>
                        </h5>

                        <hr>
                        <h3>
                            معلومات التواصل
                        </h3>
                        <list-social-media :social_media="user.social_media" v-if="user.social_media" />
                        <span v-else> لا يوجد</span>
                    </div>
                    <div class="row">

                        <hr class="mt-3">
                        <h3>
                            ارسال بريد الكتروني
                        </h3>
                        <div class="row mt-2 mb-2">
                            <button class="col ms-1 me-1" v-for="(back_reader_message, index) in BACK_READER_MESSAGES"
                                :key="index" @click="() => { this.email_body = back_reader_message }">
                                رسالة ({{ index }})
                            </button>
                        </div>
                        <send-email :user_id="user.id" :body="email_body" />
                    </div>
                    <div class="row">
                        <hr class="mt-3">
                        <h3 class="mb-2">
                            الحالة بعد التواصل
                        </h3>
                        <form @submit.prevent="updateContactStatus" class="post-text ml-3 w-100 row"
                            v-if="!contact_has_been_made || editable">
                            <div class="form-group row mt-2">
                                <select v-model="v$.contactForm.contact.$model" class="form-select" data-trigger
                                    name="contact" id="contact">
                                    <option value="" selected>هل تم التواصل؟</option>
                                    <option value="1">تم التواصل</option>
                                    <option value="0">لا امكانية للتواصل</option>
                                </select>
                                <small p class="mt-2" style="color: red" v-if="v$.contactForm.contact.$error">
                                    اختر حالة التواصل
                                </small>

                            </div>

                            <div class="form-group row">
                                <select v-model="v$.contactForm.return.$model" class="form-select" data-trigger
                                    name="return" id="return">
                                    <option value="" selected>وافق على العودة؟</option>
                                    <option value="1">وافق على العودة</option>
                                    <option value="0">رفض العودة</option>
                                    <option value="-1">لم يستجب</option>
                                </select>
                                <small p class="mt-2" style="color: red" v-if="v$.contactForm.return.$error">
                                    اختر حالة السفير
                                </small>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn d-block btn-primary mt-3 mb-3 w-75 mx-auto">
                                    اعتماد
                                </button>
                            </div>

                            <div class="col-sm-12 text-center" v-if="loader">
                                <img src="@/assets/images/gif/page-load-loader.gif" alt="loader"
                                    style="height: 100px" />
                            </div>
                            <h4 class="text-center mt-3 mb-3" v-if="message">{{ message }}</h4>
                        </form>
                        <div class="row" v-else>
                            <h5 class="mb-2 text-start" style="direction: rtl">
                                <span class="material-symbols-outlined align-middle">
                                    loyalty
                                </span>
                                هل تم التواصل؟ :
                                <span>
                                    {{ contact_has_been_made.contact ? 'تم التواصل' : 'لا امكانية للتواصل' }}
                                </span>
                            </h5>
                            <h5 class="mb-2 text-start" style="direction: rtl">
                                <span class="material-symbols-outlined align-middle">
                                    loyalty
                                </span>
                                وافق على العودة؟ :
                                <span v-if="contact_has_been_made.return == 1">
                                    وافق على العودة
                                </span>
                                <span v-else-if="contact_has_been_made.return == 0">
                                    رفض العودة
                                </span>
                                <span v-else>
                                    لم يستجب
                                </span>

                            </h5>
                            <h5 class="mb-2 text-start" style="direction: rtl">
                                <span class="material-symbols-outlined align-middle">
                                    loyalty
                                </span>
                                مراجع الحالة :
                                <span>
                                    {{ contact_has_been_made.reviewer.name + " " +
                                        contact_has_been_made.reviewer.last_name }}
                                </span>
                            </h5>
                            <span> تم التعديل بتاريخ: {{ format_date(contact_has_been_made.updated_at) }}</span>

                            <div>
                                <span role="button" class="material-symbols-outlined display-6" @click="allowEdit()">
                                    edit
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-inline-block w-100 text-center col-12">
                    <router-link :to="{ name: 'withdrawns-team.list-ambassadors' }"
                        class="d-block mt-3 mb-3 w-75 mx-auto">
                        <span class="back-btn ">عودة</span>
                        <span class="align-middle material-symbols-outlined diplay-6">
                            keyboard_return
                        </span>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import moment from "moment";
import UserService from "@/API/services/user.service";
import ContactsWithWithdrawn from "@/API/services/contacts-with-withdrawn.service";
import ListSocialMedia from '@/components/user/ListSocialMedia';
import SendEmail from '@/components/user/SendEmail';
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { BACK_READER_MESSAGES } from "@/utilities/constants";


export default {
    components: { ListSocialMedia, SendEmail },
    name: "Ambassador Details",
    setup() {
        return { v$: useVuelidate() };
    },
    async created() {
        const response = await UserService.withdrawnAmbassadorDetails(this.$route.params.ambassador_id)
        this.user = response.user
        this.group = response.group
        this.exception = response.exception

        this.contact_has_been_made = await ContactsWithWithdrawn.showByUserID(this.$route.params.ambassador_id)
    },
    data() {
        return {
            BACK_READER_MESSAGES,
            user: null,
            group: null,
            exception: null,
            editable: false,
            contact_has_been_made: null,
            contactForm: {
                ambassador_id: this.$route.params.ambassador_id,
                contact: "",
                return: "",
            },
            email_body: '',

        };
    },
    validations() {
        return {
            contactForm: {
                contact: {
                    required,
                },
                return: {
                    required,
                },
            },
        };
    },
    methods: {
        format_date(value) {
            if (value) {
                return moment(String(value)).format("MM/DD/YYYY");
            }
        },
        async updateContactStatus() {
            this.v$.$touch();
            if (!this.v$.contactForm.$invalid) {
                this.message = "";
                this.loader = true;
                try {
                    this.contact_has_been_made = await ContactsWithWithdrawn.updateContactStatus(this.contactForm);
                    this.loader = false;
                    this.message = 'تم التعديل بنجاح';
                    this.editable = false;
                    this.v$.contactForm.$reset();
                } catch (error) {
                    console.log(error);
                }
            }

        },
        allowEdit() {
            this.editable = true;
            this.contactForm.contact = this.contact_has_been_made.contact;
            this.contactForm.return = this.contact_has_been_made.return;
        }

    },

};
</script>