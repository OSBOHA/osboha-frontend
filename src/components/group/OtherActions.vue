<template>
    <div class="card-body">
        <!-- Floating Action Button -->
        <div class="container">
            <button class="btn btn-primary  w-75 shadow" @click="toggleFab">
                إجراءات القائد

            </button>
            <transition name="fade">
                <div v-if="showFabOptions" class="mt-2">
                    <button class="btn btn-freez border m-1" @click="openFreezeForm" title="تجميد استثنائي">
                        <span class="material-symbols-outlined align-middle">
                            ac_unit
                        </span>
                    </button>
                    <button class="btn btn-success shadow m-1" v-if="!isnew" @click="openNewMemberForm"
                        title="تعيين عضو جديد">
                        <span class="material-symbols-outlined align-middle">
                            emoji_people
                        </span>
                    </button>
                    <button class="btn btn-danger  m-1" @click="openWithdrawalRequestForm" title="طلب انسحاب">
                        <span class="material-symbols-outlined align-middle">
                            waving_hand
                        </span>
                    </button>
                </div>
            </transition>
        </div>

        <!-- Forms -->
        <FreezeRequestForm :user="user" v-if="showExceptionForm" />
        <NewMemberForm v-if="showIsNewForm" :user="user" />
        <WithdrawalRequestForm v-if="showWithdrawalRequestForm" :user_to_withdraw_id="user.id" />

    </div>
</template>
<script>
import FreezeRequestForm from "@/components/group/LeaderActions/FreezeRequestForm";
import NewMemberForm from "@/components/group/LeaderActions/NewMemberForm";
import WithdrawalRequestForm from "@/components/group/LeaderActions/WithdrawalRequestForm";
export default {
    name: "List Reading",
    components: {
        FreezeRequestForm,
        NewMemberForm,
        WithdrawalRequestForm,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            showFabOptions: false,
            showExceptionForm: false,
            showIsNewForm: false,
            showWithdrawalRequestForm: false,
        };
    },
    methods: {
        toggleFab() {
            this.showFabOptions = !this.showFabOptions;
        },
        openFreezeForm() {
            this.showExceptionForm = true;
            this.showIsNewForm = false;
            this.showWithdrawalRequestForm = false
        },
        openNewMemberForm() {
            this.showIsNewForm = true;
            this.showExceptionForm = false;
            this.showWithdrawalRequestForm = false

        },
        openWithdrawalRequestForm() {
            this.showWithdrawalRequestForm = true
            this.showIsNewForm = false;
            this.showExceptionForm = false;
        },
    },
    computed: {
        isnew() {
            if (this.user) {
                const givenDate = new Date(this.user.created_at);
                // Get today's date
                const today = new Date();
                // Calculate the start date of the 2-week period
                const threeWeeksAgo = new Date();
                threeWeeksAgo.setDate(today.getDate() - 21); // Subtract 21 days from today's date [3 weeks]
                // Reset time for both dates to 00:00:00 for a day-level comparison
                threeWeeksAgo.setHours(0, 0, 0, 0);
                givenDate.setHours(0, 0, 0, 0);

                // Check if givenDate is between threeWeeksAgo and today
                return givenDate >= threeWeeksAgo && givenDate <= today;
            }
            else {
                return false;
            }
        },
    },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.btn-freez {
    background-color: #223e7f;
    color: white;
}
</style>