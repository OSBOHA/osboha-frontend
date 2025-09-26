<template>
    <div>

        <div class="card">
            <div class="card-header">
                <SectionHeader :tag="'h4'" title="تحديثات خاصة بالمشروع" icon="brand_awareness" />
            </div>
            <div class="card-body">
                <AnnouncementsCarousel :items="announcements" title="" title-tag="h4" view-all-text="عرض الكل"
                    :rtl="true" :card-width="150" :gap="18" @view-all="goToAllBooks" />

            </div>

        </div>

        <Divider />
        <div class="card">
            <div class="card-header">
                <SectionHeader :tag="'h4'" title="الدورات المتاحة" icon="emoji_objects" />
            </div>
            <div class="card-body">
                <Courses :courses="courses" :rtl="true" />

            </div>

        </div>



    </div>
</template>

<script>
import Divider from "@/components/common/Divider";
import SectionHeader from "@/components/common/IconTitle";
import helper from "@/utilities/helper";
import bookGif from '@/assets/images/gif/book.gif'
import thesis from '@/assets/images/gif/thesis.gif'
import congrates from '@/assets/images/gif/congrates.gif'
import AnnouncementsCarousel from '@/components/dashboard/AnnouncementsCarousel'
import Courses from '@/components/dashboard/Courses'

export default {
    name: 'Dashboard Home',
    components: {
        Divider,
        SectionHeader,
        AnnouncementsCarousel,
        Courses,
    },
    data() {
        return {
            bookGif,
            thesis,
            congrates,
            announcements: [
                { cover: new URL('https://i.pinimg.com/1200x/2e/29/71/2e29712eca9b7f8ad80e4eb6c5a2b721.jpg', import.meta.url).href, title: 'عنوان رئيسي', end_date: 'عنوان فرعي ' },
                { cover: new URL('https://i.pinimg.com/736x/9c/08/e9/9c08e92eaa4180879d62027595b1c445.jpg', import.meta.url).href, title: 'عنوان رئيسي', end_date: 'عنوان فرعي ' },
                { cover: new URL('https://i.pinimg.com/1200x/2e/29/71/2e29712eca9b7f8ad80e4eb6c5a2b721.jpg', import.meta.url).href, title: 'عنوان رئيسي', end_date: 'عنوان فرعي ' },
                { cover: new URL('https://i.pinimg.com/736x/9c/08/e9/9c08e92eaa4180879d62027595b1c445.jpg', import.meta.url).href, title: 'عنوان رئيسي', end_date: 'عنوان فرعي ' },
                { cover: new URL('https://i.pinimg.com/1200x/2e/29/71/2e29712eca9b7f8ad80e4eb6c5a2b721.jpg', import.meta.url).href, title: 'عنوان رئيسي', end_date: 'عنوان فرعي ' },
                { cover: new URL('https://i.pinimg.com/736x/9c/08/e9/9c08e92eaa4180879d62027595b1c445.jpg', import.meta.url).href, title: 'عنوان رئيسي', end_date: 'عنوان فرعي ' },
            ],
            courses: [
                {
                    logo: new URL('@/assets/images/main/eligible_logo.png', import.meta.url).href,
                    title: 'دورة توثيق الكتب',
                    sub_title: 'وصف الدورة',
                    link: 'https://chat.whatsapp.com/FTcQty4FyY9DJ7HykXw99B',
                    status: "active"
                },
                {
                    logo: new URL('@/assets/images/main/eligible_logo.png', import.meta.url).href,
                    title: 'دورة توثيق الكتب',
                    sub_title: 'وصف الدورة',
                    link: 'https://chat.whatsapp.com/FTcQty4FyY9DJ7HykXw99B',
                    status: "inactive"
                }
            ]


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