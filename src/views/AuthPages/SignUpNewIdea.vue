<template>
    <div id="wrapper">
        <div id="main">
            <div class="inner">
                <section id="home-section">
                    <!-- Header Container -->
                    <div id="container01" class="style8 container default">
                        <div class="wrapper">
                            <div class="inner text-center">
                                <img src="@/assets/images/main/osboha_logo_500.png" class="img-fluid" alt="logo" />
                                <hr id="divider01" class="style3" />
                                <p id="text14" class="style4">
                                    بانضمامك إلينا؛ فأنتَ محاط بصحبة وعَت معنى أهمية ورسالة «إقرأ».
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Start Button -->
                    <ul id="buttons02" class="style1 buttons text-center">
                        <li class=" display-5">
                            <a href="#container02" class="button n01">ابدأ</a>
                        </li>
                    </ul>

                    <hr id="divider03" class="style1" />

                    <!-- About Education Section -->
                    <div id="container02" data-scroll-id="start" data-scroll-behavior="center" data-scroll-offset="0"
                        data-scroll-speed="3" class="style7 container default full screen">
                        <div class="wrapper">
                            <div class="inner">
                                <h2 id="text01" class="style1 text-center">
                                    لأن التعليم المدرسي/الجامعي ليس كافيًا لصناعة إنسان مختلف، نقدم لك أفضل تعليم مجانًا
                                    عن طريق القراءة المنهجية التي تعطيك أفضل نسخة من ذاتك خلال أشهر.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <hr id="divider04" class="style1" />

                    <!-- Who We Are Section -->
                    <div class="wrapper style1 container columns">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <span class="frame deferred">
                                    <img src="@/assets/images/signup/about_us.png" class="w-100" alt="about us" />
                                </span>
                            </div>
                            <div class="col-md-6 col-sm-12 mt-5 mb-5 d-flex justify-content-center align-items-center text-center"
                                style="min-height: 100%;">
                                <div>
                                    <h2 class="text-center">من نحن</h2>
                                    <p id="text08" class="style6">
                                        المشروع الأكبر عربيا لصناعة القراء عن طريق استثمار القراءة المنهجية ونواتجها
                                        لصناعة
                                        مجتمع واع قادر على الوصول للنهضة وتحقيق التنمية مستعينين بالتكنولوجيا الحديثة
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr id="divider02" class="style1" />

                    <!-- Project Idea Section -->
                    <div class="wrapper style1 container columns">
                        <div class="row inner pe-0 ps-0">
                            <div class="col-md-6 col-sm-12 mt-5 mb-5">
                                <h2 class="text-center">فكرة مشروعنا</h2>
                                <p id="text08" class="style6">
                                    مشروعنا يقوم على التعليم المستمر من خلال القراءة المنهجية لتطوير الفكر والمهارات.
                                    تبدأ مهمة السفير الأسبوعية يوم الأحد وتنتهي يوم السبت بعلامة كاملة تصل إلى 100%.
                                    نركز على الاستمرارية في التعلم بدلاً من عدد الصفحات، مع دعم من قائد مُدرّب لمتابعتك
                                    وتشجيعك. نوفر أنشطة وتكريمات لتحفيزك.
                                </p>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <span class="frame deferred">
                                    <img src="@/assets/images/signup/character_6.png" class="w-100"
                                        alt="project idea" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr id="divider05" class="style1" />

                    <!-- Reading Score Section -->
                    <div id="container05" class="style2 container default">
                        <div class="wrapper">
                            <div class="inner">
                                <h2 id="text09" class="text-center">كيف تنال علامة القراءة الكاملة؟</h2>
                                <p id="text10" class="style6 text-center">
                                    بكل بساطة تقرأ <strong style="color:#278036">30</strong> صفحة أسبوعياً بإمكانك
                                    قراءتها كاملة خلال يوم واحد أو تقوم بتقسيمها على أيام الأسبوع
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr id="divider06" class="style2" />

                    <!-- Gallery Section -->
                    <div id="gallery01" class="style1 gallery">
                        <iframe width="100%" height="500"
                            src="https://www.youtube.com/embed/BiU4Tdery6M?si=Kdk9J7_ZIZquQLcq"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <hr id="divider07" class="style1" />

                    <!-- Registration Form Section -->
                    <div id="container06" class="style3 container default">
                        <div class="wrapper">
                            <div class="inner">
                                <h3 id="text11" class="text-center">لُطفًا نحتاج منك تسجيل معلوماتك</h3>
                                <p id="text12" class="style6">حيث سيخصص لك قائدًا لقراءتك يتابع تقدمك، وبجداول مريحة،
                                    أضف إلى ذلك دورات وورشات عمل تطور منك.</p>

                                <form id="form01" class="style1" @submit.prevent="onSubmit()">
                                    <div class="inner">
                                        <!-- Name Fields -->
                                        <div class="field">
                                            <label for="form01-name">الاسم الأول</label>
                                            <input type="text" id="form01-name" v-model="v$.form.name.$model" />
                                            <p v-if="v$.form.name.$error" class="mt-2 text-danger">الاسم مطلوب</p>
                                        </div>
                                        <div class="field">
                                            <label for="form01-last_name">الاسم الاخير</label>
                                            <input type="text" id="form01-last_name"
                                                v-model="v$.form.last_name.$model" />
                                            <p v-if="v$.form.last_name.$error" class="mt-2 text-danger">الاسم الاخير
                                                مطلوب</p>
                                        </div>

                                        <!-- Email and Password -->
                                        <div class="field">
                                            <label for="form01-email">البريد الالكتروني</label>
                                            <input type="email" id="form01-email" v-model="v$.form.email.$model" />
                                            <p v-if="v$.form.email.$error" class="mt-2 text-danger">البريد الالكتروني
                                                غير صحيح</p>
                                        </div>
                                        <div class="field">
                                            <label for="form01-password">كلمة المرور</label>
                                            <input type="password" id="form01-password"
                                                v-model="v$.form.password.$model" />
                                            <p v-if="v$.form.password.$error" class="mt-2 text-danger">يجب ادخال كلمة
                                                مرور صالحة لا تقل عن 8 أحرف</p>
                                        </div>

                                        <!-- Gender Selection -->
                                        <div class="field">
                                            <label for="gender">اختر جنسك</label>
                                            <select v-model="v$.form.gender.$model" id="gender" class="form-select">
                                                <option value="">اختر جنسك</option>
                                                <option value="male">ذكر</option>
                                                <option value="female">انثى</option>
                                            </select>
                                            <small v-if="v$.form.gender.$error" class="mt-2 text-danger">اختر
                                                جنسك</small>
                                        </div>

                                        <!-- Loader or Submit -->
                                        <div v-if="loader" class="text-center">
                                            <img :src="require('@/assets/images/gif/page-load-loader.gif')" alt="loader"
                                                style="height: 80px" />
                                            <p>يتم الآن تجهيز حسابك</p>
                                        </div>
                                        <div v-else class="actions">
                                            <button type="submit" class="btn btn-primary"
                                                :disabled="loader">تسجيل</button>
                                        </div>
                                    </div>
                                </form>

                                <!-- Sign-in link -->
                                <div class="sign-info">
                                    <span class="dark-color">تملك حساب؟
                                        <router-link :to="{ name: 'auth.sign-in' }">تسجيل الدخول</router-link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr id="divider08" class="style2" />

                    <!-- Social Links -->
                    <div id="container07" class="style6 container default">
                        <div class="wrapper">
                            <div class="inner text-center">
                                <h4 class="text-center">حساباتنا في مواقع التواصل الاجتماعي</h4>
                                <ul id="icons02" class="style1 icons">
                                    <!-- Facebook -->
                                    <a href="https://www.facebook.com/osboha180" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0"
                                            y="0" viewBox="0 0 112.196 112.196" style="enable-background:new 0 0 25 25"
                                            xml:space="preserve" class="align-middle mt-2">
                                            <g>
                                                <circle cx="56.098" cy="56.098" r="56.098" style="" fill="#3b5998"
                                                    data-original="#3b5998" class="">
                                                </circle>
                                                <path
                                                    d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z"
                                                    style="" fill="#ffffff" data-original="#ffffff" class=""></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <!-- Instagram -->
                                    <a href="https://www.instagram.com/osboha180/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0"
                                            y="0" viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 25 25"
                                            xml:space="preserve" class="align-middle mt-2">
                                            <g>
                                                <linearGradient id="a" x1="275.517" x2="275.517" y1="4.57" y2="549.72"
                                                    gradientTransform="matrix(1 0 0 -1 0 554)"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" style="stop-color:#E09B3D" stop-color="#e09b3d">
                                                    </stop>
                                                    <stop offset=".3" style="stop-color:#C74C4D" stop-color="#c74c4d">
                                                    </stop>
                                                    <stop offset=".6" style="stop-color:#C21975" stop-color="#c21975">
                                                    </stop>
                                                    <stop offset="1" style="stop-color:#7024C4" stop-color="#7024c4">
                                                    </stop>
                                                </linearGradient>
                                                <path
                                                    d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z"
                                                    style="fill:url(#a);" fill=""></path>
                                                <linearGradient id="b" x1="275.517" x2="275.517" y1="4.57" y2="549.72"
                                                    gradientTransform="matrix(1 0 0 -1 0 554)"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" style="stop-color:#E09B3D" stop-color="#e09b3d">
                                                    </stop>
                                                    <stop offset=".3" style="stop-color:#C74C4D" stop-color="#c74c4d">
                                                    </stop>
                                                    <stop offset=".6" style="stop-color:#C21975" stop-color="#c21975">
                                                    </stop>
                                                    <stop offset="1" style="stop-color:#7024C4" stop-color="#7024c4">
                                                    </stop>
                                                </linearGradient>
                                                <path
                                                    d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z"
                                                    style="fill:url(#b);" fill=""></path>
                                                <linearGradient id="c" x1="418.31" x2="418.31" y1="4.57" y2="549.72"
                                                    gradientTransform="matrix(1 0 0 -1 0 554)"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" style="stop-color:#E09B3D" stop-color="#e09b3d">
                                                    </stop>
                                                    <stop offset=".3" style="stop-color:#C74C4D" stop-color="#c74c4d">
                                                    </stop>
                                                    <stop offset=".6" style="stop-color:#C21975" stop-color="#c21975">
                                                    </stop>
                                                    <stop offset="1" style="stop-color:#7024C4" stop-color="#7024c4">
                                                    </stop>
                                                </linearGradient>
                                                <circle cx="418.31" cy="134.07" r="34.15" style="fill:url(#c);" fill="">
                                                </circle>
                                            </g>
                                        </svg>
                                    </a>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div id="container08" class="style4 container default">
                        <div class="wrapper">
                            <div class="inner text-center">
                                <p id="text13" class="style7">
                                    &copy; {{ currentDate }} OSBOHA180 -
                                    <router-link :to="{ name: 'terms-and-conditions' }">
                                        <span>تُطبق الشروط والاحكام</span>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
    name: 'ComplexComponent',
    setup() {
        return { v$: useVuelidate() };
    },

    data() {
        return {
            loader: false,
            form: {
                name: "",
                last_name: "",
                password: "",
                email: "",
                gender: "",
            },
            regError: "",
        };
    },
    methods: {
        async onSubmit() {
            this.v$.$touch();

            if (!this.v$.form.$invalid) {
                try {
                    this.loader = true;
                    this.regError = "";
                    await this.$store.dispatch("new_register", {
                        email: this.form.email,
                        password: this.form.password,
                        name: this.form.name,
                        last_name: this.form.last_name,
                        gender: this.form.gender,
                    });

                    this.loader = false;
                    this.$router.push({ name: "auth.confirmmail" });
                } catch (error) {
                    this.loader = false;
                    if (
                        error.response.data.data.email &&
                        error.response.data.data.email ==
                        "The email has already been taken."
                    ) {
                        this.regError = " البريد الالكتروني موجود مسبقاً، قم بتسجيل الدخول";
                    } else {
                        console.log(error);
                    }
                }
            }
        },
    },
    validations() {
        return {
            form: {
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                    min: minLength(8),
                },
                name: {
                    required,
                },
                last_name: {
                    required
                },
                gender: {
                    required,
                },
            },
        };
    },
};
</script>
<style scoped>
@import "@/assets/css/sign_up_style.css";
</style>