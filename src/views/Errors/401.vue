<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-sm-12 text-center">
        <div class="iq-error position-relative mt-5">
          <img
            src="@/assets/images/main/401.png"
            class="img-fluid iq-error-img"
            alt="403"
          />
          <div>
            <h2 class="mb-2 text-center">
              عذرًا ليس لديك صلاحيات للوصول إلى هذه الصفحة
            </h2>
            <!-- <p class="text-center">لم يتم العثور على الصفحة التي طلبتها، قد يكون الرابط خاطئ أو تم حذف الصفحة</p> -->

            <router-link
              class="btn btn-primary w-75"
              :to="{
                name: 'osboha.list',
              }"
              >عودة للصفحة الرئيسية
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Error404",
  data() {
    return {};
  },
};
</script>
