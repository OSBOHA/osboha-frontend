<template>
  <!-- ########## START MONTH STATISTICS ########## -->
  <div class="col-12">
    <div class="card card-block card-stretch card-height">
      <div class="card-header">
        <div class="d-flex justify-content-between flex-wrap">
          <h4 class="card-title">احصائيات حسب الشهر</h4>
          <div class="dropdown w-100">
            <select
              class="form-select"
              @change="userMonthAchievement()"
              v-model="monthFilter"
            >
              <option class="dropdown-item" value="current" selected>
                هذا الشهر
              </option>
              <option class="dropdown-item" value="previous">
                الشهر السابق
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-body">
        <LineChartGenerator
          :data="line_data"
          :options="line_option"
          v-if="month_achievement"
        />
        <div class="d-flex justify-content-center align-items-center" v-else>
          <h4 class="text-muted">لا يوجد احصائيات لهذا الشهر</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- ########## END MONTH STATISTICS ########## -->
</template>

<script>
import helper from "@/utilities/helper";
import { Line as LineChartGenerator } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import GroupService from "@/API/services/group.service";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement
);

export default {
  name: "GroupMonthStatistics",
  created() {
    // month Achievement
    this.month_achievement = this.monthAchievement;
    this.month_title = this.monthTitle;
  },
  props: {
    monthAchievement: {
      type: [Object],
      default: null,
    },
    monthTitle: {
      type: [String],
      required: true,
    },
  },
  components: {
    LineChartGenerator,
  },
  data() {
    return {
      month_achievement: [],
      month_title: "شهر",
      monthFilter: "current",
      line_option: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    /**
     * get user month Achievement.
     * @return month Achievement
     */
    async userMonthAchievement() {
      try {
        const response = await GroupService.monthAchievement(
          this.$route.params.group_id,
          this.monthFilter
        );
        this.month_title = response.month_achievement_title;
        this.month_achievement = response.month_achievement;
      } catch (e) {
        console.log(e);
        if (e.response.data.statusCode == 404) {
          helper.toggleToast("لا يوجد احصائيات لهذا الشهر", "error");
          this.monthFilter = "current";
        }
      }
    },
  },
  computed: {
    formated_month_title() {
      let splited_title = this.month_title.split(" ");
      return splited_title[splited_title.length - 1];
    },
    line_data() {
      let data = {
        labels: [" ", "الأول", "الثاني", "الثالث", "الرابع", "الخامس"],
        datasets: [
          {
            label: "يناير",
            data: [],
            fill: false,
            borderColor: "#1D1A55",
            tension: 0.1,
          },
        ],
      };

      // //Line Chart for month Achievement
      data.labels = Object.keys(this.month_achievement);
      data.datasets[0].data = Object.values(this.month_achievement);
      data.datasets[0].label = this.formated_month_title;
      data.labels.unshift("");
      data.datasets[0].data.unshift(50);
      return data;
    },
  },
};
</script>
