<template>
    <div class="d-grid gap-3 d-grid-template-1fr-19">
        <div class="card mb-0">
            <div class="top-bg-image">
                <img :src="resolve_img_url(bookInfo.level.arabic_level, 'png')" alt="profile-img"
                    class="img-fluid w-100" />
            </div>
            <div class="card-body text-center">
                <div class="group-icon">
                    <img :src="resolve_img_url(bookInfo.level.level, 'jpg')" alt="profile-img"
                        class="rounded-circle img-fluid " />
                </div>
                <div class="group-info pt-3 pb-3">
                    <h2 class="text-center">
                        {{ bookInfo.name }}
                    </h2>
                </div>
                <div class="group-details d-inline-block pb-3">
                    <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                        <li class="pe-3 ps-3">
                            <p class="mb-0">قسم الكتاب</p>
                            <h6>{{ bookInfo.section.section }}</h6>

                        </li>
                        <li class="pe-3 ps-3">
                            <p class="mb-0">مستوى الكتاب</p>
                            <h6>{{ bookInfo.level.arabic_level }}</h6>

                        </li>
                    </ul>
                </div>

                <div v-if="current">
                    <button v-for="(eligible_book, index) in bookInfo.eligible_user_book" :key="index"
                        @click="listCurrentAchievement(eligible_book.id)" type="submit"
                        class="btn btn-success d-block w-100" :class="btnClass"> {{ index > 0 ? index +1:'' }} متابعة التوثيق</button>

                </div>
                <button @click="checkAchievement()" type="submit" class="btn d-block w-100" :class="btnClass" v-else>
                    بدء التوثيق
                </button>

            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'BookCard',
    created() {
        if (this.bookInfo.level.arabic_level == 'متقدم' || this.bookInfo.level.arabic_level == 'عميق') {
            this.btnClass = 'btn-danger'
        }
        else if (this.bookInfo.level.arabic_level == 'متوسط') {
            this.btnClass = 'btn-intermediate'
        }
    },
    props: {
        bookInfo: { type: Object },
        current: {
            required: true,
        },
    },
    data() {
        return {
            btnClass: 'btn-primary'
        }
    },
    methods: {
        checkAchievement() {
            this.$router.push({ name: 'achievement.checkAchievement', params: { id: this.bookInfo.id } })
        },
        listCurrentAchievement(id) {
            this.$router.push({ name: `achievement.steps`, params: { id: id } })
        },
        resolve_img_url(path, extention) {
            return require("@/assets/images/main/" + path + "." + extention);
        },

    }


}
</script>
<style scoped>
.btn-intermediate {
    background-color: #EC765C;
    color: white;
}
</style>