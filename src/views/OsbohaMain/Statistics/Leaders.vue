<template>
    <div class="col-12">
        <div class="card card-block card-stretch card-height blog">
            <div class="text-center m-auto" v-if="loding">
                <img class="img-fluid rounded w-75" src="@/assets/images/gif/chart_2.gif" alt="add-group" />
                <h4 class="text-center">
                    يتم تجهيز الجرد
                </h4>
            </div>

            <div class="card-header d-flex justify-content-between ms-2 me-2" v-if="supervisorGroup">
                <h2 class="mt-auto mb-auto">
                    احصائية القادة
                    ||
                    <router-link :to="{
                        name: 'group.group-detail',
                        params: { group_id: supervisorGroup.id },
                    }">
                        {{ supervisorGroup.name }}
                    </router-link>
                    <span class="material-symbols-outlined align-middle me-1">
                        diversity_1
                    </span>
                </h2>
                <!-- <back-button routeName="group.group-detail" :routeParams="{ group_id: supervisorGroup.id }" /> -->

            </div>

            <div class="card-body" v-if="statistics">
                <div class="form-group mt-3">
                    <select class="form-select" v-model="week_id">
                        <option value="-1">اختر الأسبوع</option>
                        <option v-for="week in weeks" :key="week.id" :value="week.id">{{ week.title }}
                        </option>
                    </select>
                </div>

                <FollowupTeamsStatistics :teamData=statistics :supervisor_followup_team=supervisor_followup_team
                    :generalAvg="generalAvg" />

            </div>
            <div class="card-body" v-if="leadersReading">
                <MembersReading :ReadingData="leadersReading" :headTitle="'القادة'" :usetType="'القائد'" />
            </div>
            <h4 @click="$router.go(-1)" class="text-center mb-3" v-if="supervisorGroup" role="button">
                <span class="align-middle material-symbols-outlined">
                    keyboard_return
                </span>
                عودة
            </h4>


        </div>
    </div>
</template>
<script>
import StatisticsService from "@/API/services/statistics.service";
import WeeksService from "@/API/services/week.service";
import FollowupTeamsStatistics from "@/components/statistics/FollowupTeams";
import MembersReading from "@/components/statistics/MembersReading";
// import BackButton from '@/components/common/BackButton.vue';
import { watchEffect } from "vue";

export default {
    name: 'Supervisor Statistics',
    async created() {
        this.loding = true;
        this.weeks = await WeeksService.getWeeks(10);
        if (this.$route.params.week_id) {
            this.week_id = this.$route.params.week_id
        }
        else {
            const week = await WeeksService.getPreviousWeek();
            this.week_id = week.id

        }
        watchEffect(async () => {
            if (this.week_id && this.$route.params.supervisor_id) {
                this.loding = true;
                this.statistics = null;
                this.leadersReading = null;
                this.supervisorGroup = null;
                this.supervisor_followup_team = null
                const response = await StatisticsService.leadersStatistics(this.$route.params.supervisor_id, this.week_id);
                this.statistics = response.leaders_followup_team;
                this.leadersReading = response.leaders_reading;
                this.supervisorGroup = response.supervisor_group;
                this.supervisor_followup_team = response.supervisor_own_followup_team
                this.generalAvg = response.week_general_avg;
                this.loding = false;
            }
        });

    },
    components: {
        FollowupTeamsStatistics,
        MembersReading,
        //BackButton,
    },
    data() {
        return {
            weeks: null,
            week_id: null,
            statistics: null,
            supervisor_followup_team: null,
            leadersReading: null,
            supervisorGroup: null,
            loding: false,
            generalAvg: 0,

        }
    },
    computed: {
        totalWithdraw() {
            return this.statistics.reduce((accumulator, item) => accumulator + parseFloat(item.ambassadors_withdraw_in_group), 0);
        },
        totalFreezed() {
            return this.statistics.reduce((accumulator, item) => accumulator + parseFloat(item.is_freezed), 0);
        },
        totalExcluded() {
            return this.statistics.reduce((accumulator, item) => accumulator + parseFloat(item.ambassadors_excluded_in_group), 0);
        },
        totalOfZeroVarible() {
            return this.statistics.reduce((accumulator, item) => accumulator + parseFloat(item.number_zero_varible), 0);
        },
        totalNewambassadors() {
            return this.statistics.reduce((accumulator, item) => accumulator + parseFloat(item.new_ambassadors), 0);
        },
        totalPages() {
            return this.leadersReading.reduce((accumulator, item) => accumulator + parseFloat(item.total_pages), 0);
        }
    }

}
</script>
<style scoped>
.inline-grid {
    display: inline-table;
}
</style>