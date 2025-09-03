<template>
    <section class="bc" :dir="rtl ? 'rtl' : 'ltr'">
        <div v-if="showActivePreview && activeItem" class="bc-preview">
            <img class="p-cover" :src="activeItem.cover" :alt="activeItem.title" />
            <div class="p-meta">
                <div class="p-title" :title="activeItem.title">{{ activeItem.title }}</div>
                <div class="p-end-date" :title="activeItem.end_date">{{ activeItem.end_date }}</div>
            </div>
        </div>

        <div class="bc-header">
            <component :is="titleTag" class="bc-title">{{ title }}</component>
            <div class="bc-cta">
                <button v-if="showViewAll" class="view-all" type="button" @click="$emit('view-all')">
                    {{ viewAllText }}
                </button>
                <button v-if="showArrows" class="nav-btn prev" type="button" :disabled="disablePrev" @click="goPrev"
                    aria-label="Prev">‹</button>
                <button v-if="showArrows" class="nav-btn next" type="button" :disabled="disableNext" @click="goNext"
                    aria-label="Next">›</button>
            </div>
        </div>

        <div ref="scroller" class="bc-track" @wheel.passive="onWheel" @scroll.passive="onScroll"
            :style="{ '--gap': gap + 'px', '--cw': cardWidth + 'px' }">

            <article v-for="(b, i) in items" :key="i" class="bc-card" :data-index="i" @click="setActive(i, true)">
                <div class="cover">
                    <img :src="b.cover" :alt="b.title" loading="lazy" />
                    <span class="ribbon"></span>
                </div>
                <h4 class="book-title" :title="b.title">{{ b.title }}</h4>
                <p class="end-date" :title="b.end_date">{{ b.end_date }}</p>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
    items: { type: Array, default: () => [] },
    title: { type: String, default: 'Popular' },
    titleTag: { type: String, default: 'h3' },
    viewAllText: { type: String, default: 'View All' },
    showViewAll: { type: Boolean, default: true },
    showArrows: { type: Boolean, default: true },
    showActivePreview: { type: Boolean, default: true },
    rtl: { type: Boolean, default: false },

    cardWidth: { type: Number, default: 150 },
    gap: { type: Number, default: 18 },

    initialIndex: { type: Number, default: 0 }
})

const scroller = ref(null)
const activeIndex = ref(0)
const activeItem = computed(() => props.items[activeIndex.value] || null)
const step = computed(() => props.cardWidth + props.gap)

const disablePrev = ref(true)
const disableNext = ref(false)
const allowAutoDetect = ref(false)

function updateDisabled() {
    disablePrev.value = activeIndex.value <= 0
    disableNext.value = activeIndex.value >= props.items.length - 1
}

function goPrev() { setActive(Math.max(0, activeIndex.value - 1), true) }
function goNext() { setActive(Math.min(props.items.length - 1, activeIndex.value + 1), true) }

function scrollBy(px) {
    scroller.value?.scrollBy({ left: px * (props.rtl ? -1 : 1), behavior: 'smooth' })
}
function onWheel(e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scroller.value?.scrollBy({ left: e.deltaY * (props.rtl ? -1 : 1) })
    }
}

function setActive(i, scrollIntoView = false) {
    activeIndex.value = i
    updateDisabled()

    if (scrollIntoView && scroller.value) {
        const card = scroller.value.querySelector(`.bc-card[data-index="${i}"]`)
        if (card) {
            allowAutoDetect.value = false
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
            setTimeout(() => { allowAutoDetect.value = true }, 220)
        }
    }
}

function onScroll() {
    if (!allowAutoDetect.value || !scroller.value) return
    const wrapRect = scroller.value.getBoundingClientRect()
    const targetX = wrapRect.left + wrapRect.width / 2
    let minDist = Infinity, closest = activeIndex.value

    scroller.value.querySelectorAll('.bc-card').forEach((el, idx) => {
        const r = el.getBoundingClientRect()
        const center = r.left + r.width / 2
        const d = Math.abs(center - targetX)
        if (d < minDist) { minDist = d; closest = idx }
    })

    if (closest !== activeIndex.value) {
        activeIndex.value = closest
        updateDisabled()
    }
}

onMounted(async () => {
    await nextTick()
    activeIndex.value = Math.min(Math.max(0, props.initialIndex), Math.max(0, props.items.length - 1))
    updateDisabled()

    const card = scroller.value?.querySelector(`.bc-card[data-index="${activeIndex.value}"]`)
    card?.scrollIntoView({ behavior: 'auto', inline: props.rtl ? 'end' : 'start', block: 'nearest' })

    setTimeout(() => { allowAutoDetect.value = true }, 150)
    window.addEventListener('resize', onScroll, { passive: true })
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
.bc {
    width: 100%;
}

/* Preview */
.bc-preview {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    margin-bottom: 10%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, .06);
}

.p-cover {
    width: 48px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
}

.p-meta {
    min-width: 0;
}

.p-title {
    font-weight: 700;
    color: #3b3b3b;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p-end-date {
    margin-top: 2px;
    font-size: 12px;
    color: #d26a6a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Header */
.bc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
}

.bc-title {
    font-size: 18px;
    font-weight: 800;
    color: #3b3b3b;
    margin: 0;
}

.bc-cta {
    display: flex;
    align-items: center;
    gap: 8px;
}

.view-all {
    border: 0;
    background: #D1DCCD;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 999px;
    cursor: pointer;
}

.nav-btn {
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 6px 14px rgba(0, 0, 0, .1);
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 18px;
    transition: transform .15s ease;
}

.nav-btn:active {
    transform: scale(.96);
}

.nav-btn:disabled {
    opacity: .4;
    cursor: not-allowed;
    pointer-events: none;
}

.bc-track {
    display: flex;
    gap: var(--gap);
    overflow-x: auto;
    padding: 4px 2px 6px;
    scroll-snap-type: x proximity;
    -webkit-overflow-scrolling: touch;
}

.bc-track::-webkit-scrollbar {
    height: 0;
}

.bc-track {
    scrollbar-width: none;
}

.bc-card {
    width: var(--cw);
    min-width: var(--cw);
    scroll-snap-align: start;
    user-select: none;
    cursor: pointer;
}

.cover {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    height: calc(var(--cw) * 1.45);
    box-shadow: 0 8px 18px rgba(0, 0, 0, .12);
    background: #eee;
}

.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.ribbon {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 10px;
    height: 10px;
    background: #1D1A55;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .15) inset;
}

.book-title {
    margin: .55rem 0 .15rem;
    font-size: 14px;
    color: #3c3a3a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.end-date {
    margin: 0;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>