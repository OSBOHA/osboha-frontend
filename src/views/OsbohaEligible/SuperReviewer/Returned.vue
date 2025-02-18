<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card position-relative inner-page-bg bg-primary" style="height: 150px;">
                <div class="inner-page-title">
                    <h3 class="text-white">التوثيقات المعادة</h3>
                    <p class="text-white">العدد الكلي {{ retardsBooks.length }}</p>
                </div>
            </div>
        </div>

        <iq-card v-if="retardsBooks.length > 0">
            <template v-slot:body>
                <div class="table-responsive">
                    <table id="datatable" class="table table-striped table-bordered">
                        <thead class="col-12">
                            <tr>
                                <th>رقم التوثيق</th>
                                <th>تاريخ الاعادة</th>
                                <th>نوع المُعاد</th>
                                <th>عرض</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="book in retardsBooks" :key="book.id" class="align-middle m-auto">
                                <td class=" btn-primary text-white bg-primary">
                                    {{ book.id }}
                                </td>
                                <td>
                                    {{ getFormatedDate(book.updated_at) }}
                                </td>
                                <td>
                                    {{ book.retard_types }}
                                </td>
                                <td>
                                    <p v-for="(type, index) in (book.retard_types ? book.retard_types.split('،').map(t => t.trim()) : [])"
                                        :key="index">
                                        <router-link v-if="type === 'أطروحات'"
                                            :to="{ name: 'thesis-review.thesis', params: { user_book_id: book.id } }">
                                            📑 عرض الأطروحات
                                        </router-link>

                                        <router-link v-if="type === 'أسئلة'"
                                            :to="{ name: 'questions.questions', params: { user_book_id: book.id } }">
                                            ❓ عرض الأسئلة
                                        </router-link>

                                        <router-link v-if="type === 'ملخص عام'"
                                            :to="{ name: 'general.general_informations', params: { user_book_id: book.id } }">
                                            📝 عرض التلخيص
                                        </router-link>
                                    </p>
                                </td>
                                <td>
                                    <div v-for="(type, index) in (book.retard_types ? book.retard_types.split('،').map(t => t.trim()) : [])"
                                        :key="index">
                                        <button v-if="type === 'أطروحات'" class="btn btn-danger d-block mt-3 w-100"
                                            @click="undoRetard(book.id, 'thesis')">
                                            تراجع الأطروحات
                                        </button>
                                        <button v-if="type === 'أسئلة'" class="btn btn-danger d-block mt-3 w-100"
                                            @click="undoRetard(book.id, 'questions')">
                                            تراجع أسئلة
                                        </button>
                                        <button v-if="type === 'ملخص عام'" class="btn btn-danger d-block mt-3 w-100"
                                            @click="undoRetard(book.id, 'general_informations')">
                                            تراجع الملخص
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </template>
        </iq-card>
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
import { getFormatedDate } from "@/utilities/commonFunctions";
import helper from "@/utilities/helper";

export default {
    name: 'Returned',

    async created() {
        this.retardsBooks = await this.getBooksWithRetardStatus();
    },
    data() {
        return {
            retardsBooks: [],
        }
    },
    methods: {
        getFormatedDate,
        helper,
        async getBooksWithRetardStatus() {
            return await userBookServices.getBooksWithRetardStatus();
        },
        async undoRetard(book_id, retard_type) {
            const response = await userBookServices.undoRetard(book_id, retard_type);
            helper.toggleToast(response, "success");
            this.retardsBooks = await this.getBooksWithRetardStatus();


        }
    }
}
</script>