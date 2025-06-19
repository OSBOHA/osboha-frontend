<template>
  <table class="table inline-grid w-100">
    <thead>
      <tr class="d-flex justify-content-around">
        <th scope="col">المجموعة</th>
        <th scope="col">دوره</th>
        <th scope="col">حالته</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="filter-controls">
            <h4 style="direction: rtl;">
              <span class="material-symbols-outlined align-middle">
                data_loss_prevention
              </span>
              فلترة حسب :
            </h4>
            <select class="m-2" v-model="selectedFilter" id="filter-select">
              <option value="all">جميع الأدوار</option>
              <option value="ambassador">سفير</option>
              <option value="leader">قائد</option>
              <option value="supervisor">مراقب</option>
              <option value="advisor">موجه</option>
              <option value="consultant">مستشار</option>
              <option value="admin">إدارة</option>
              <option value="marathon">ماراثون</option>
              <option value="special_care">رعاية خاصة</option>
            </select>

            <select class="m-2" v-model="selectedStatus">
              <option value="all">كل الحالات</option>
              <option value="active">فعال</option>
              <option value="inactive">غير فعال</option>
            </select>

          </div>
        </td>
      </tr>
      <tr v-if="filteredGroups.length === 0">
        <td colspan="3" class="text-center py-4 text-muted">
          لا يوجد بيانات .
        </td>
      </tr>

      <tr class="d-flex justify-content-around" v-for="group in filteredGroups" :key="group.id">
        <td scope="col" class="align-middle text-center w-25">
          <router-link class="text-center" :to="{
            name: 'group.group-detail',
            params: { group_id: group.group.id },
          }">
            <span> {{ group.group.name }} </span></router-link>
        </td>

        <td scope="col" class="align-middle text-center w-25">
          <span> {{ ARABIC_ROLES[group.user_type] }} </span>
        </td>
        <td scope="col" class="align-middle text-center w-50">
          <span v-if="group.termination_reason" style="color: darkred">
            {{ TERMINATION_REASONS[group.termination_reason] }}
          </span>
          <span v-else class="rounded-pill badge bg-primary px-2"> فعال </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { TERMINATION_REASONS, ARABIC_ROLES } from "@/utilities/constants";
export default {
  name: "UserGroups",
  props: {
    groups: { type: Array },
  },
  data() {
    return {
      TERMINATION_REASONS,
      ARABIC_ROLES,
      selectedFilter: 'all',
      selectedStatus: 'all'
    };
  },
  computed: {
    filteredGroups() {
      let filtered = [];
      switch (this.selectedFilter) {
        case 'ambassador':
          filtered = this.groups.filter(group => group.user_type === 'ambassador');
          break;

        case 'leader':
          filtered = this.groups.filter(group =>
            group.user_type.includes('leader')
          );
          break;

        case 'marathon':
          filtered = this.groups.filter(group =>
            group.user_type.includes('marathon')
          );
          break;

        case 'supervisor':
          filtered = this.groups.filter(group =>
            group.user_type.includes('supervisor')
          );
          break;

        case 'advisor':
          filtered = this.groups.filter(group =>
            group.user_type.includes('advisor')
          );
          break;

        case 'consultant':
          filtered = this.groups.filter(group =>
            group.user_type.includes('consultant')
          );
          break;

        case 'admin':
          filtered = this.groups.filter(group =>
            group.user_type.includes('admin')
          );
          break;

        case 'special_care':
          filtered = this.groups.filter(group =>
            group.user_type.includes('special_care')
          );
          break;

        case 'all':
        default:
          filtered = this.groups;
      }

      switch (this.selectedStatus) {
        case 'active':
          filtered = filtered.filter(group => group.termination_reason === null);
          break;

        case 'inactive':
          filtered = filtered.filter(group => group.termination_reason !== null);
          break;

        case 'all':
        default:
          break;
      }

      return filtered;
    }
  }
};
</script>