<template>
  <!-- حاوية تغطي الشاشة وتوسّط المحتوى -->
  <div class="stage container-fluid px-0">
    <div class="scale-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="mobile-canvas">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const W = 375, H = 812
const scale = ref(1)

const vw = () => window.visualViewport?.width  ?? window.innerWidth
const vh = () => window.visualViewport?.height ?? window.innerHeight

function calcScale() {
  scale.value = Math.min(vw() / W, vh() / H)
}

onMounted(() => {
  calcScale()
  window.addEventListener('resize', calcScale)
  if (window.visualViewport) {
    visualViewport.addEventListener('resize', calcScale)
    visualViewport.addEventListener('scroll', calcScale)
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', calcScale)
  if (window.visualViewport) {
    visualViewport.removeEventListener('resize', calcScale)
    visualViewport.removeEventListener('scroll', calcScale)
  }
})
</script>

<style scoped>
/* بدّلنا 100vw بـ 100% حتى ما يصير overflow بسبب padding الحاويات */
.stage{
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scale-wrap{
  transform-origin: center center;
}

.mobile-canvas{
  width: 375px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(0,0,0,.12);
  border: 1px solid #e6e8eb;
  box-sizing: border-box;
}
</style>
