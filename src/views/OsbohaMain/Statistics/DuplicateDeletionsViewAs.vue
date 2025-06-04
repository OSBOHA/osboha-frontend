<template>
    <div class="col-12">
        <h3 class="mb-4 text-center" style="direction: rtl;">
            السجلات التي تم حذفها بواسطة
            {{ viewerName }}
        </h3>
        <hr />
        <div class="text-end mb-3">
            <ExportDeletionsButton :deletions="deletions" :deleted_by="viewerName" />
        </div>

        <div v-for="section in filteredSections" :key="section.key"
            class="card card-block card-stretch card-height blog mb-4">
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
import DeletionsTable from "@/components/group/DeletionsTable";
import ExportDeletionsButton from "@/components/group/ExportDeletionsExcel.vue";

export default {
    name: 'DuplicateDeletionsViewAs',
    components: { DeletionsTable, ExportDeletionsButton },
    data() {
        return {
            deletions: {},
            viewerRole: '',
            viewerName: '',
            allSections: [
                { key: 'by_me', title: 'حذف بواسطته', roles: ['admin', 'consultant', 'advisor'] },
                { key: 'by_children', title: 'حذف بواسطة مستشاريه', roles: ['admin'] },
                { key: 'by_children', title: 'حذف بواسطة موجهيه', roles: ['admin', 'consultant'] },
            ]
        };
    },
    computed: {
        filteredSections() {
            return this.allSections.filter(section => section.roles.includes(this.viewerRole));
        }
    },
    async created() {
        const viewer_id = this.$route.params.viewer_id;
        try {
            const response = await DuplicateUserDeletion.getDuplicateDeletions(viewer_id);
            this.deletions = response;
            this.viewerRole = response.viewer_role;
            this.viewerName = response.viewer_name
        } catch (error) {
            console.error('فشل تحميل البيانات:', error);
        }
    },
    methods: {
        handleViewAs(userId) {
            this.$router.push({ name: 'statistics.duplicate-deletions-view-as', params: { viewer_id: userId } });
        }
    }
}
</script>