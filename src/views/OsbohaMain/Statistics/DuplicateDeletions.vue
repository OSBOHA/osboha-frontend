<template>
    <div class="col-12">

        <div class="text-end mb-3">
            <ExportDeletionsButton :deletions="deletions" :deleted_by="deletions.viewer_name" />
        </div>

        <div v-for="section in sections" :key="section.key" class="card card-block card-stretch card-height blog mb-4">
            <div class="card-header">
                <h2>{{ section.title }}</h2>
            </div>
            <div class="card-body">
                <DeletionsTable v-if="deletions[section.key] && deletions[section.key].length"
                    :records="deletions[section.key]" @viewAs="handleViewAs" />
                <div v-else class="text-center text-muted">
                    لا توجد بيانات حاليًا.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DuplicateUserDeletion from '@/API/services/duplicate-user-deletion.service';
import DeletionsTable from "@/components/group/DeletionsTable.vue";
import ExportDeletionsButton from "@/components/group/ExportDeletionsExcel.vue";

export default {
    name: 'DuplicateDeletions',
    components: {
        DeletionsTable,
        ExportDeletionsButton,
    },
    data() {
        return {
            deletions: {
                by_me: [],
                by_children: [],
                by_grandchildren: []
            },
            sections: [
                { key: 'by_me', title: 'حذف بواسطتي' },
                { key: 'by_children', title: 'حذف بواسطة المستشارين' },
                { key: 'by_grandchildren', title: 'حذف بواسطة الموجهين' },
            ],
        };
    },
    async created() {
        try {
            const response = await DuplicateUserDeletion.getDuplicateDeletions();
            this.deletions = response;
        } catch (error) {
            console.error('حدث خطأ في تحميل البيانات:', error);
        }
    },
    methods: {
        handleViewAs(userId) {
            this.$router.push({ name: 'statistics.duplicate-deletions-view-as', params: { viewer_id: userId } });
        },

    }

};
</script>

<style scoped>
.inline-grid {
    display: inline-table;
}
</style>