<template>
  <div class="col-12">
    <div class="card card-block card-stretch card-height blog">
      <div class="card-header">
        <h2>ساعات العمل</h2>
      </div>
      <div class="card-body">
        <div class="blog-description">
          <table class="table w-100">
            <thead>
              <tr>
                <th>التاريخ</th>
                <th>المدة (دقائق)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="2" class="text-center">
                  <img
                    src="@/assets/images/gif/page-load-loader.gif"
                    alt="loader"
                    style="height: 100px"
                  />
                </td>
              </tr>

              <tr v-for="item in workingHours" :key="item.key">
                <td>{{ formatFullDate(item.date, false) }}</td>
                <td>{{ item.minutes + " دقيقة" }}</td>
              </tr>

              <tr v-if="workingHours?.length > 0">
                <td>
                  <strong>المجموع</strong>
                </td>
                <td>
                  <strong>
                    {{ totalMinutes + " دقيقة" }}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helper from "@/utilities/helper";
export default {
  name: "WorkingHoursList",

  props: {
    workingHours: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    totalMinutes() {
      let total = 0;
      this.workingHours.forEach((item) => {
        total += item.minutes;
      });
      return total;
    },
  },
  methods: {
    ...helper,
  },
};
</script>

<style lang="scss" scoped></style>
