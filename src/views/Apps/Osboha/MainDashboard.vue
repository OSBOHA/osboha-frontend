<template>
    <MobileFrame>
        <div style="padding:24px; text-align:center">
            <HeroIntro greeting="مرحبا، سارة" />

            <HorizontalChips :items="stats" :circle="66" :gap="14" />

            <!-- START DASHBOARD NAVIGATION -->
            <iq-card class="iq-card">
                <div class="iq-card-body p-0">
                    <div class="user-tabing">
                        <tab-nav :pills="true" id="pills-tab"
                            class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                            <tab-nav-items class="col-sm-3 p-0" :active="true" id="pills-home-tab" href="#pills-home"
                                ariaControls="pills-home" role="tab" :ariaSelected="true" title="الرئيسية" />
                            <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-bout-tab" href="#pills-gold"
                                ariaControls="pills-gold" role="tab" :ariaSelected="false" title="الأسبوع الذهبي" />
                            <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-books-tab" href="#pills-books"
                                ariaControls="pills-books" role="tab" :ariaSelected="false" title="كتب أنهيتها" />
                            <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-announcements-tab"
                                href="#pills-announcements" ariaControls="pills-announcements" role="tab"
                                :ariaSelected="false" title="دورات" />
                        </tab-nav>
                    </div>
                </div>
            </iq-card>
            <!-- END DASHBOARD NAVIGATION -->
            <div class="col-12">
                <div class="tab-content">
                    <tab-content-item :active="true" id="pills-home" aria-labelled-by="pills-home-tab">
                        <Home />
                    </tab-content-item>
                    <tab-content-item :active="false" id="pills-gold" aria-labelled-by="pills-gold-tab">
                        <Gold />
                    </tab-content-item>
                    <tab-content-item :active="false" id="pills-books" aria-labelled-by="pills-books-tab">
                        <Books />
                    </tab-content-item>
                    <tab-content-item :active="false" id="pills-announcements"
                        aria-labelled-by="pills-announcements-tab">
                        <Announcements />
                    </tab-content-item>
                </div>
            </div>

        </div>
        <Divider />
        <SupervisorInfo avatar="https://i.pinimg.com/736x/46/b8/fe/46b8fe2fb3a46bf142b45f485ad93307.jpg"
            name="سارة إسماعيل" description="القراءة ضرورة وليست هواية" facebook="https://facebook.com/..."
            instagram="https://instagram.com/..." twitter="https://twitter.com/..." />

    </MobileFrame>
</template>

<script>
import MobileFrame from "@/components/common/MobileFrame";
import HeroIntro from "@/components/common/HeroIntro";
import HorizontalChips from "@/components/common/HorizontalChips";
import Home from "@/components/dashboard/Home";
import Books from "@/components/dashboard/Books";
import Gold from "@/components/dashboard/Gold";
import Announcements from "@/components/dashboard/Announcements";
import SupervisorInfo from "@/components/dashboard/SupervisorInfo";
import helper from "@/utilities/helper";
import Divider from "@/components/common/Divider";

export default {
    name: 'Dashboard',
    components: {
        MobileFrame,
        HeroIntro,
        HorizontalChips,
        Home,
        Books,
        Gold,
        Announcements,
        SupervisorInfo,
        Divider,
    },
    data() {
        return {
            user: {
                id: 1,
                background: require('@/assets/images/main/alertMsg.jpeg'),
                profile: require('@/assets/images/main/alertMsg.jpeg'),
                name: 'Nik Jone',
                role: ' - Web designer',
                about: 'Lorem ipsum dolor sit amet, contur adipiscing elit.',
                email: 'nikjone@demoo.com',
                phone: '001 2351 256 12',
                location: 'USA',
                careated_date: '07 Jan 2020'
            },
            stats: [
                { label: "وسام ماراثون القراءة", icon: "workspace_premium" },
                { label: "تاريخ في نظام الانضباط", icon: "history" },
                { label: "قائد في الفرق المتقدمة", icon: "supervisor_account" },
                { label: "عدد الكتب الموافقة", sub: "7", icon: "task_alt" },
                { label: "حقق 15 أسبوع ذهبي", sub: "15", icon: "calendar_month" },
                { label: "عدد الكتب المقروءة", sub: "112", icon: "menu_book" }
            ],
        }
    },
    methods: {
        ...helper,
    }
}
</script>