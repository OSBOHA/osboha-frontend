<template>
  <div class="row">
    <div class="col-sm-12">
      <iq-card>
        <div class="iq-card-body profile-page p-0">
          <div class="profile-header">
            <div class="cover-container">
              <img src="@/assets/images/main/book-banner.png" alt="profile-bg" class="rounded img-fluid" />
            </div>
          </div>
        </div>
      </iq-card>
    </div>
    <div class="col-12">
      <!-- START AchievementS -->
      <div class="row">
        <div class="col-lg-12">
          <iq-card>
            <template v-slot:headerTitle>
              <h4 class="card-title">الكتب الموثقة </h4>
            </template>
            <template v-slot:body v-if="finished_achievements.length > 0">
              <div class="row d-flex justify-content-center">
                <div class="col-6 col-md-6 col-lg-6 text-center mt-2 mb-3"
                  v-for="(achievement, index) in finished_achievements" :key="index">
                  <div class="image-block text-center">
                    <img src="@/assets/images/main/finished.png" class="img-fluid rounded w-50" alt="blog-img">
                  </div>

                  <h3 class="mb-2 text-center">{{ achievement.book.name }} </h3>
                  <div class="row d-flex justify-content-center mt-2 mb-3 w-100">

                    <button @click="listCertificate(achievement.id)"
                      class=" col-5 col-md-5 col-lg-5  btn btn-primary d-block">
                      الشهادة
                    </button>
                    <router-link class=" col-5 col-md-5 col-lg-5  btn btn-primary d-block ms-1" :to="{
                      name: 'achievement.steps',
                      params: {
                        id: achievement.id,
                      },
                    }">
                      التوثيق
                    </router-link>
                  </div>
                </div>
              </div>
            </template>
            <template v-slot:body v-else>
              <div class="iq-card-body p-0">
                <div class="image-block text-center">
                  <img src="@/assets/images/main/stage2.png" class="img-fluid rounded w-50" alt="blog-img" />
                  <h4 class="text-center mt-2 mb-3">
                    لا يوجد كتب موثقة
                  </h4>
                </div>
              </div>

            </template>

          </iq-card>
        </div>
      </div>
      <!-- END AchievementS -->
    </div>
  </div>
</template>
<script>
import certificateService from '@/API/EligibleServices/certificateServices';
import userBookServices from '@/API/EligibleServices/userBookServices';

export default {
  components: {
    //BackButton
  },
  name: "Profile",
  async created() {

    // //await this.getStatistics();
    // await this.getUserCertificates();
    // await this.lastAchievement();
    await this.finishedAchievement();

  },
  data() {
    return {
      statistics: {
        general_informations: 0,
        questions: 0,
        thesises: 0,
        total: 0
      },
      certificates: [],
      last_achievement: null,
      finished_achievements: []
    }
  },
  methods: {
    listCertificate(id) {
      window.open(`https://platform.osboha180.com/backend/public/api/v1/eligible-certificates/generate-pdf/${id}`, '_blank');
    },
    async lastAchievement() {
      const response = await userBookServices.lastAchievement();
      this.last_achievement = response.last_achievement;
      this.statistics = response.statistics;
      this.statistics.thesises_degree = Math.floor(parseInt(this.statistics.thesises_degree) * 100) / 100
      this.statistics.general_informations_degree = Math.floor(parseInt(this.statistics.general_informations_degree) * 100) / 100
      this.statistics.questions_degree = Math.floor(parseInt(this.statistics.questions_degree) * 100) / 100
      this.statistics.total = Math.floor((parseInt(this.statistics.thesises_degree) + parseInt(this.statistics.general_informations_degree) + parseInt(this.statistics.questions_degree)) / 3);

    },
    async finishedAchievement() {
      this.finished_achievements = await userBookServices.finishedAchievement();
      //console.log(this.finished_achievements)
    },

    async getUserCertificates() {
      const certificates = await certificateService.getUserCertificates();
      this.certificates = certificates;
    },

  }
};
</script>