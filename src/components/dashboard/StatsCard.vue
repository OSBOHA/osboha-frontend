<template>
    <div class="vitals-card">
        <!-- Header -->
        <div class="vc-header">
            <div class="d-inline-flex align-center gap-1">
                <span class="material-symbols-outlined">
                    social_leaderboard
                </span> <span class="vc-month">أين أنت بين الجموع؟</span>
            </div>
        </div>

        <!-- Concentric rings -->
        <svg :viewBox="viewBox" class="vc-rings" aria-hidden="true">
            <!-- segmented track (same for all radii) -->
            <g v-for="(r, i) in radii" :key="'track-' + i" :transform="`translate(${C},${C})`">
                <!-- background segments -->
                <g v-for="seg in segments" :key="seg" :transform="`rotate(${(360 / segments) * (seg - 1)})`">
                    <circle :r="r" :cx="0" :cy="0" :stroke="trackColor" :stroke-width="stroke" stroke-linecap="round"
                        fill="none" :stroke-dasharray="`${dash} ${gap}`" :transform="`rotate(${segmentGap / 2})`" />
                </g>
            </g>

            <!-- value arcs -->
            <g :transform="`translate(${C},${C})`">
                <template v-for="(ring, i) in rings" :key="'val-'+i">
                    <circle :r="ring.r" cx="0" cy="0" :stroke="ring.color" :stroke-width="stroke" stroke-linecap="round"
                        fill="none" :stroke-dasharray="circumference(ring.r)"
                        :stroke-dashoffset="dashOffset(ring.r, ring.value, ring.max)"
                        :transform="`rotate(${startAngle})`" />
                    <!-- end dot -->
                    <circle :cx="endPoint(ring.r, ring.value, ring.max).x"
                        :cy="endPoint(ring.r, ring.value, ring.max).y" :r="stroke / 2.2" :fill="ring.color" />
                </template>
            </g>

            <!-- center values -->
            <g :transform="`translate(${C},${C})`" class="vc-center">
                <text class="vc-num small" :y="-8">{{ yearRank }}</text>
                <text class="vc-num main" :y="18">{{ weekRank }}</text>
                <text class="vc-num tiny" :y="40">{{ teamRank }}</text>
            </g>
        </svg>

        <!-- legend -->
        <div class="vc-legend">
            <div class="leg-item" v-for="l in legends" :key="l.key">
                <span class="dot" :style="{ background: l.color }"></span>
                <div>
                    <div class="leg-title">{{ l.title }}</div>
                    <div class="leg-sub">{{ l.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    yearRank: { type: Number, default: 120 },
    weekRank: { type: Number, default: 84 },
    teamRank: { type: Number, default: 72 },

    maxSys: { type: Number, default: 180 },
    maxDia: { type: Number, default: 120 },
    maxteamRank: { type: Number, default: 160 },

    colorSys: { type: String, default: '#1D1A55' },
    colorDia: { type: String, default: '#278036' },
    colorteamRank: { type: String, default: '#ED5A4F' },

    size: { type: Number, default: 280 },
    stroke: { type: Number, default: 16 },
    startAngle: { type: Number, default: -90 },
    segments: { type: Number, default: 10 },
    segmentGap: { type: Number, default: 22 },
    trackColor: { type: String, default: '#D7EBD1' }
})

const C = computed(() => props.size / 2)
const viewBox = computed(() => `0 0 ${props.size} ${props.size}`)

const radii = computed(() => [
    C.value - props.stroke * 1.2,
    C.value - props.stroke * 2.6,
    C.value - props.stroke * 4.0
])

const rings = computed(() => [
    { r: radii.value[0], value: props.yearRank, max: props.maxSys, color: props.colorSys },
    { r: radii.value[1], value: props.weekRank, max: props.maxDia, color: props.colorDia },
    { r: radii.value[2], value: props.teamRank, max: props.maxteamRank, color: props.colorteamRank }
])

const dash = computed(() => ((360 - (props.segments * props.segmentGap)) / props.segments) / 360)
const gap = computed(() => props.segmentGap / 360)
function circumference(r) { return 2 * Math.PI * r }
function dashOffset(r, val, max) {
    const frac = 1 - Math.max(0, Math.min(1, val / max))
    return circumference(r) * frac
}
function toRad(deg) { return (deg + props.startAngle) * (Math.PI / 180) }
function endPoint(r, val, max) {
    const angle = (val / max) * 360
    const rad = toRad(angle)
    return { x: C.value + r * Math.cos(rad), y: C.value + r * Math.sin(rad) }
}

const legends = computed(() => [
    { key: 'sys', title: 'ترتيبك خلال العام', color: props.colorSys, value: props.yearRank },
    { key: 'dia', title: 'ترتيبك خلال الأسبوع', color: props.colorDia, value: props.weekRank },
    { key: 'teamRank', title: 'ترتيبك على فريقك', color: props.colorteamRank, value: props.teamRank }
])
</script>

<style scoped>
.vitals-card {
    width: 320px;
    border-radius: 22px;
    padding: 14px 14px 10px;
    box-shadow: 0 10px 26px rgba(0, 0, 0, .12);
    user-select: none;
}

.vc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.vc-day {
    font-weight: 700;
    color: #8a7f6a;
}

.vc-month {
    font-weight: 700;
    color: #6A6251;
    margin-inline-start: 8px;
}

.vc-info {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;
    color: #6A6251;
    border: 1px solid #bdb7a8;
    font-weight: 700;
    font-size: 12px;
}

.vc-rings {
    width: 100%;
    height: auto;
    display: block;
}

/* أرقام الوسط */
.vc-center .vc-num {
    text-anchor: middle;
    fill: #5b5242;
}

.vc-center .small {
    font-size: 18px;
    opacity: .65
}

.vc-center .main {
    font-size: 34px;
    font-weight: 800;
}

.vc-center .tiny {
    font-size: 14px;
    opacity: .55
}

/* الليجند */
.vc-legend {
    margin-top: 8px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.leg-item {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 14px;
    padding: 6px 8px;
}

.leg-item .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px #fff;
}

.leg-title {
    font-size: 11px;
    font-weight: 700;
    color: #4f4739;
}

.leg-sub {
    font-size: 12px;
    color: #4f4739;
    opacity: .8;
}
</style>