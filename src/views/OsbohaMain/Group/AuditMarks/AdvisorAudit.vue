<template>
    <div class="d-grid gap-3 d-grid-template-1fr-19 mb-2">
        <AdvisorAuditCard v-for="supervisor in supervisors" :supervisor="supervisor" :key="supervisor.id" />
    </div>
</template>
<script>
import AdvisorAuditCard from '@/components/group/audit/AdvisorAuditCard.vue'
import AuditMarkService from '@/API/services/audit-marks.service';

export default {
    components: { AdvisorAuditCard },
    name: 'Advisor Audit',
    async created() {
        try {
            const response = await AuditMarkService.supervisorsAudit(this.$route.params.advisor_id);
            this.supervisors = response;
        }
        catch (error) {
            console.log(error);
        }
    },
    data() {
        return {
            supervisors:[],
        }
    },

}
</script>
