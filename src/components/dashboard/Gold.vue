<template>
    <div class="bg-container">
        <div class="content row d-flex justify-content-center">
            <div class="col-6 col-md-6 col-lg-6 text-center mt-2 mb-3" v-for="(rank, index) in ranking" :key="index">
                <GoldRanking :title="rank.title" :rank="rank.rank" />
            </div>
        </div>
    </div>
    <Divider />

    <div class="alert alert-warning">
        <div class="conditions-box">
            <h6 style="direction: rtl;">شروط اليوم الذهبي:</h6>
            <ul>
                <li>إنجاز قراءة يومية كاملة.</li>
                <li>توثيق القراءة في نفس اليوم.</li>
                <li>الالتزام بعدد الصفحات المطلوب.</li>
            </ul>

            <h6 style="direction: rtl;">شروط الأسبوع المئوي:</h6>
            <ul>
                <li>إكمال 100 صفحة خلال الأسبوع.</li>
                <li>توزيع القراءة على أكثر من يوم.</li>
                <li>إدخال التوثيق أولاً بأول.</li>
            </ul>

            <h6 style="direction: rtl;">شروط الأسبوع الذهبي:</h6>
            <ul>
                <li>الالتزام بالقراءة كل يوم في الأسبوع.</li>
                <li>توثيق جميع الأيام بدون انقطاع.</li>
                <li>تحقيق الهدف الأسبوعي المحدد.</li>
            </ul>
        </div>
    </div>

</template>
<script setup>
import GoldRanking from '@/components/dashboard/GoldRanking';
import Divider from "@/components/common/Divider";

const ranking = [
    { title: 'الأسبوع الذهبي', rank: 7 },
    { title: 'الأسبوع المئوي', rank: 2 },
    { title: 'اليوم الذهبي', rank: 30 }
]

</script>
<style scoped>
.bg-container {
    position: relative;
    width: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('@/assets/images/dashboard/confetti_2.gif');
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

.content {
    position: relative;
    z-index: 1;
    color: white;
}
</style>