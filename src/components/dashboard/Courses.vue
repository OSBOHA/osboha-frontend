<template>
    <section class="bc" :dir="rtl ? 'rtl' : 'ltr'">
        <div class="row d-flex justify-content-center">
            <div class="col-6 col-md-6 col-lg-6 text-center mt-2 mb-3" v-for="(course, index) in courses" :key="index">
                <img :src="course.logo" alt="ramadan-footer" class="img-fluid w-50"
                    :class="{ 'inactive-img': course.status === 'inactive' }" />
                <h5 class="text-center mt-1" style="direction: rtl">
                    {{ course.title }}
                </h5>
            </div>
        </div>

        <img src="@/assets/images/dashboard/courses.png" alt="courses-footer" class="img-fluid w-50" />
    </section>
</template>

<script setup>
const props = defineProps({
    courses: { type: Array, default: () => [] }
})
</script>

<style scoped>
.inactive-img {
    opacity: 0.5;
    /* أو القيمة اللي بتحبيها */
}
</style>