<template>
    <div class="mt-3">

        <SectionHeader :tag="'h3'" title="كتب أنهيت قرائتها" icon="book_ribbon" :customClass="'text-right'" />

        <BookCarousel :items="books" title="" title-tag="h4" view-all-text="عرض الكل" :rtl="true" :card-width="150"
            :gap="18" @view-all="goToAllBooks" />

        <Divider />

        <SectionHeader title="كتب أنهيت توثيقها" :tag="'h3'" icon="book_ribbon" :customClass="'fw-bold mt-3 mb-3'" />

        <EligibleBooks :illustration="stackImg" title="عنوان الكتاب" subtitle="تقييم توثيقك للكتاب"
            btn-label="عرض الشهادة" btn-icon="visibility" :items="rightItems" :rtl="false" @view-all="goToAll"
            @item-click="openCategory" />
    </div>
</template>

<script setup>
import BookCarousel from '@/components/dashboard/BookCarousel'
import EligibleBooks from '@/components/dashboard/EligibleBooks'
import Divider from "@/components/common/Divider";
import SectionHeader from "@/components/common/IconTitle";
import stackImg from '@/assets/images/books/1.jpg'


const books = [
    { cover: new URL('@/assets/images/books/1.jpg', import.meta.url).href, title: 'Fairy Tale', end_date: 'Feb 16, 2023 ' },
    { cover: new URL('@/assets/images/books/2.jpg', import.meta.url).href, title: 'Never', end_date: 'Feb 16, 2023 ' },
    { cover: new URL('@/assets/images/books/3.jpg', import.meta.url).href, title: 'Klara and the Sun', end_date: 'Feb 16, 2023' },
    { cover: new URL('@/assets/images/books/4.jpg', import.meta.url).href, title: 'A Court of Mist and Fury', end_date: 'Feb 16, 2023 ' },
    { cover: new URL('@/assets/images/books/5.jpg', import.meta.url).href, title: 'Hamnet', end_date: 'Feb 16, 2023 ' },
];
const rightItems = [
    { icon: 'draw', title: 'الأطروحات', desc: 'التقييم 100% ' },
    { icon: 'indeterminate_question_box', title: 'الأسئلة العامة', desc: 'التقييم 100%' },
    { icon: 'article', title: 'الملخص العام', desc: 'التقييم 100%' }
]

</script>