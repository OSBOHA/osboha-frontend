<template>
  <aside :class="`sidebar sidebar-default ${sidebarMenuStyle} ${sidebarType.join(
    ' '
  )}`" id="first-tour" data-toggle="main-sidebar" data-sidebar="responsive">
    <div class="sidebar-body pt-0 data-scrollbar"  v-click-outside="handleClickOutside">
      <div class="sidebar-list">
        <vertical-nav />
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>
<script>
import VerticalNav from "./VerticalNav.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Scrollbar from "smooth-scrollbar";
import vClickOutside from "click-outside-vue3";

export default {
  name: "DefaultSidebar",
  components: { VerticalNav },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  created() {
    this.toggleSidebar();
  },
  setup() {
    const store = useStore();
    const sidebarType = computed(() => store.getters["setting/sidebar_type"]);
    const isSidebarOpen = computed(() => !sidebarType.value.includes("sidebar-mini"));
    const sidebarMenuStyle = computed(
      () => store.getters["setting/sidebar_menu_style"]
    );
    const toggleSidebar = () => {
      // Code Here
      if (sidebarType.value.includes("sidebar-mini")) {
        store.dispatch(
          "setting/sidebar_type",
          sidebarType.value.filter((item) => item !== "sidebar-mini")
        );
      } else {
        store.dispatch("setting/sidebar_type", [
          ...sidebarType.value,
          "sidebar-mini",
        ]);
      }
    };
    const handleClickOutside = (event) => {
      if (event.target.id === 'toggelBtn') {
        return;
      }

      if (isSidebarOpen.value) {
        store.dispatch("setting/sidebar_type", [...sidebarType.value, "sidebar-mini"]);
      }
    };

    onMounted(() => {
      Scrollbar.init(document.querySelector(".data-scrollbar"), {
        continuousScrolling: false,
      });
      const resizePlugins = () => {
        // For sidebar-mini & responsive
        const sidebarResponsive = document.querySelector(
          '[data-sidebar="responsive"]'
        );
        if (window.innerWidth < 1025) {
          if (sidebarResponsive !== null) {
            if (!sidebarResponsive.classList.contains("sidebar-mini")) {
              sidebarResponsive.classList.add("sidebar-mini", "on-resize");
            }
          }
        } else {
          if (sidebarResponsive !== null) {
            if (
              sidebarResponsive.classList.contains("sidebar-mini") &&
              sidebarResponsive.classList.contains("on-resize")
            ) {
              sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
            }
          }
        }
      };

      /* ------------DOMContentLoaded-------------- */
      document.addEventListener("DOMContentLoaded", (event) => {
        resizePlugins();
      });
      /* ------------Window Resize------------------ */
      window.addEventListener("resize", function (event) {
        resizePlugins();
      });
    });
    return { sidebarType, sidebarMenuStyle, toggleSidebar, handleClickOutside,isSidebarOpen };
  },
};
</script>