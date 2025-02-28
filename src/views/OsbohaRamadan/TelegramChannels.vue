<template>
    <div class="ramadan-view">
        <ramadanHeader />
        <div class="col-12">
            <div class="row d-flex justify-content-center">
                <div class="col-6 col-md-6 col-lg-6 text-center mt-2 mb-3" v-for="(channel, index) in channels"
                    :key="index">
                    <img src="@/assets/images/ramadan/channel.png" alt="ramadan-footer" class="img-fluid w-50" />
                    <h5 class="text-center mt-1" style="direction: rtl;"> {{ channel.title }}</h5>
                    <p class="text-center">{{ channel.sub_title }}</p>
                    <a :href="channel.link" class="btn ramadan-btn" target="_blank"> عرض</a>
                </div>
            </div>
            <div class="d-inline-block w-100 text-center col-12">
                <router-link :to="{ name: 'ramadan.index' }" class="d-block mt-3 mb-3 w-75 mx-auto">
                    <span class="back-btn display-6">عودة</span>
                    <span class="align-middle material-symbols-outlined diplay-6">
                        keyboard_return
                    </span>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import ramadanHeader from "@/components/ramadan/ramadan-header";
// import ramadanFooter from "@/components/ramadan/ramadan-footer";

export default {
    name: 'Ramadan Index',
    components: {
        ramadanHeader,
        // ramadanFooter,
    },
    async created() {
    },
    data() {
        return {
            channels: [

                {
                    title: 'فعاليات رمضان 2025 || أصبوحة 180 📚🌙',
                    sub_title: '~ المجموعة الأولى ~',
                    link: 'https://chat.whatsapp.com/FTcQty4FyY9DJ7HykXw99B'
                },
                {
                    title: 'فعاليات رمضان 2025 || أصبوحة 180 📚🌙',
                    sub_title: '~ المجموعة الثانية ~',
                    link: 'https://chat.whatsapp.com/FPHEsLX6doBFnwgiG2pq4d',
                },
            ]
        };
    },
    methods: {
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
    },
};

</script>

<style scoped>
@font-face {
    font-family: HacenSamra;
    src: url('@/assets/fonts/HacenSamra.ttf');
}

.ramadan-view h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-family: HacenSamra, Arial, sans-serif;
    color: #203C42;
}

.ramada-p {
    font-family: HacenSamra, Arial, sans-serif;
    color: #203C42;
}


.ramadan-btn {
    background: #b1d8c3;
    color: #203C42;

}


.back-btn {
    font-family: HacenSamra, Arial, sans-serif;
    color: #203C42;
}
</style>