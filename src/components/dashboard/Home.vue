<template>
    <div>
        <StatsCard :yearRank="120" :weekRank="84" :teamRank="70" />
        <Divider />

        <div class="card">
            <div class="card-header">
                <SectionHeader :tag="'h4'" title="تفاصيل انجازك الأسبوعي" icon="social_leaderboard" />
            </div>
            <div class="card-body">
                <SectionHeader title="ورد القراءة (30 صفحة)" icon="book_ribbon" :customClass="'text-right'" />
                <ProgressTracker :start="0" :end="30" :value="20" :icon="bookGif" />

                <Divider />

                <SectionHeader title="وردالكتابة" icon="book_ribbon" :customClass="'text-right'" />
                <ProgressTracker :start="0" :end="40" :value="8" :icon="thesis" />
                <Divider />

                <SectionHeader title="اعرف مشروعك" icon="heart_plus" :customClass="'text-right'" />
                <ProgressTracker :start="0" :end="10" :value="10" :icon="congrates" />

            </div>

        </div>

    </div>
</template>

<script>
import StatsCard from "@/components/dashboard/StatsCard";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import Divider from "@/components/common/Divider";
import SectionHeader from "@/components/common/IconTitle";
import helper from "@/utilities/helper";
import bookGif from '@/assets/images/gif/book.gif'
import thesis from '@/assets/images/gif/thesis.gif'
import congrates from '@/assets/images/gif/congrates.gif'


export default {
    name: 'Dashboard Home',
    components: {
        StatsCard,
        ProgressTracker,
        Divider,
        SectionHeader,
    },
    data() {
        return {
            bookGif,
            thesis,
            congrates,
        }
    },
    methods: {
        ...helper,
    }
}
</script>
<style scoped>
.card {
    width: 320px;
    border-radius: 22px;
    padding: 14px 14px 10px;
    box-shadow: 0 10px 26px rgba(0, 0, 0, .12);
    user-select: none;
}
</style>