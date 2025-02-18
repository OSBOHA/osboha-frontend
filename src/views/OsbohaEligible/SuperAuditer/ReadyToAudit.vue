<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card position-relative inner-page-bg bg-primary" style="height: 150px;">
                <div class="inner-page-title">
                    <h3 class="text-white">توثيقات جاهزة للتقييم</h3>
                    <p class="text-white">العدد الكلي {{ booksToAudit.length }}</p>
                </div>
            </div>
        </div>
        <div class="col-12" v-if="booksToAudit.length > 0">
            <iq-card>
                <template v-slot:headerTitle>
                    <h4 class="card-title">توثيقات جاهزة للتقييم</h4>
                    <p class="text-white">العدد الكلي {{ booksToAudit.length }}</p>
                </template>
                <template v-slot:body>
                    <div class="table-responsive">
                        <table id="datatable" class="table table-striped table-bordered">
                            <thead class="col-12">
                                <tr>
                                    <th>رقم التوثيق</th>
                                    <th>الأطروحات</th>
                                    <th>الأسئلة</th>
                                    <th>التلخيص العام</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="book in booksToAudit" :key="book.id">
                                    <td class=" btn-primary text-white bg-primary">
                                        <p>{{ book.id }}</p>

                                    </td>

                                    <td>
                                        <router-link
                                            :to="{ name: `thesis-review.thesis`, params: { user_book_id: book.id } }">
                                            📑 عرض الأطروحات
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link
                                            :to="{ name: `questions.questions`, params: { user_book_id: book.id } }">
                                            ❓ عرض الأسئلة
                                        </router-link>
                                    </td>
                                    <td>
                                        <router-link
                                            :to="{ name: `general.general_informations`, params: { user_book_id: book.id } }">
                                            📝 عرض التلخيص
                                        </router-link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </template>
            </iq-card>
        </div>

        <div class="col-sm-12" v-else>
            <iq-card class="iq-card">
                <div class="iq-card-body p-0">
                    <div class="image-block text-center">
                        <img src="@/assets/images/main/export-congrats.png" class="img-fluid rounded w-50"
                            alt="blog-img">
                    </div>
                    <h4 class="text-center mt-3 mb-3">لا يوجد توثيقات</h4>
                </div>
            </iq-card>
        </div>
    </div>
</template>

<script>

import userBookServices from '@/API/EligibleServices/userBookServices'

export default {
    name: 'Ready To Audit',

    async created() {
        this.booksToAudit = await this.getEligibleUserBooksWithAuditStatus();
    },
    data() {
        return {
            booksToAudit: [],
        }
    },
    methods: {
        async getEligibleUserBooksWithAuditStatus() {
            return await userBookServices.getEligibleUserBooksWithAuditStatus();
        },
    }

}
</script>