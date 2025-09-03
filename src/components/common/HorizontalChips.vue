<template>
    <div class="chips-wrapper">
        <button v-if="showArrows" class="nav-btn left" type="button" @click="scrollBy(-scrollStep)"
            aria-label="Scroll left">›</button>

        <!-- نمرّر قيمة الفراغ للـ CSS كمتغيّر -->
        <div ref="scroller" class="chips-scroller" :style="{ '--edge': edgePadding + 'px' }" @wheel.passive="onWheel">
            <div v-for="(it, i) in items" :key="i" class="chip"
                :style="{ width: chipSize + 'px', minWidth: chipSize + 'px' }">
                <div class="chip-circle" :style="{ width: circle + 'px', height: circle + 'px' }">
                    <span v-if="it.icon" class="material-symbols-outlined" style="font-size:28px" :title="it.label">
                        {{ it.icon }}
                    </span>
                    <img v-else-if="it.img" :src="it.img" alt="" />
                </div>
            </div>
        </div>

        <button v-if="showArrows" class="nav-btn right" type="button" @click="scrollBy(scrollStep)"
            aria-label="Scroll right">‹</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    items: { type: Array, default: () => [] },
    circle: { type: Number, default: 64 },
    gap: { type: Number, default: 12 },
    showArrows: { type: Boolean, default: true },
    // الفراغ الثابت يمين/شمال من أول فريم
    edgePadding: { type: Number, default: 56 }
})

const scroller = ref(null)
const chipSize = computed(() => props.circle + 40)
const scrollStep = computed(() => props.circle + props.gap + 40)

function scrollBy(px) {
    scroller.value?.scrollBy({ left: px, behavior: 'smooth' })
}

function onWheel(e) {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        scroller.value?.scrollBy({ left: e.deltaY, behavior: 'auto' })
    }
}
</script>

<style scoped>
.chips-wrapper {
    position: relative;
    width: 100%;
}

/* المهم هنا: padding من اليمين واليسار بقيمة edge، ومعه scroll-padding لنقاط الـ snap */
.chips-scroller {
    display: flex;
    gap: v-bind(gap + 'px');
    overflow-x: auto;
    padding-block: 8px;
    padding-inline: var(--edge);
    /* الفراغ الظاهر من أول فريم */
    scroll-padding-inline: var(--edge);
    /* حتى السّناب يوقف قبل الأزرار */
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
}

.chips-scroller::-webkit-scrollbar {
    height: 0;
}

.chips-scroller {
    scrollbar-width: none;
}

.chip {
    scroll-snap-align: start;
    text-align: center;
    user-select: none;
}

.chip-circle {
    margin: 0 auto 6px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, .08), inset 0 0 0 1px rgba(0, 0, 0, .08);
    display: grid;
    place-items: center;
    overflow: hidden;
}

.chip-circle img {
    width: 70%;
    height: 70%;
    object-fit: contain;
}

/* أزرار التنقّل */
.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 56px;
    border: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, .85);
    box-shadow: 0 6px 16px rgba(0, 0, 0, .12);
    cursor: pointer;
    font-size: 22px;
    display: grid;
    place-items: center;
    z-index: 2;
}

.nav-btn.left {
    left: 6px;
}

.nav-btn.right {
    right: 6px;
}

.nav-btn:hover {
    background: #fff;
}
</style>