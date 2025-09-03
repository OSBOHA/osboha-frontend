<template>
    <div class="pt-wrapper">
        <div class="pt-labels">
            <!-- <span>{{ start }} </span> -->
            <span> </span>
            <span>{{ end }} </span>
        </div>

        <div class="pt-line">
            <div class="pt-track" :style="{ height: thickness + 'px' }"></div>

            <div class="pt-fill" :style="{
                width: progressPercent + '%',
                height: thickness + 'px',
                background: fillColor
            }"></div>

            <img v-if="icon" class="pt-icon" :src="icon" alt="" :style="iconStyle" />
        </div>

        <div class="pt-value"> {{ value }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    value: { type: Number, required: true },
    icon: { type: String, default: null },

    rtl: { type: Boolean, default: true },
    thickness: { type: Number, default: 14 },
    fillColor: { type: String, default: '#278036' },
    trackColor: { type: String, default: '#eaecef' },
    radius: { type: Number, default: 10 },
    iconSize: { type: Number, default: 36 },
    iconLift: { type: Number, default: 6 }
})

const progressPercent = computed(() => {
    const range = props.end - props.start
    if (range <= 0) return 0
    const p = ((props.value - props.start) / range) * 100
    return Math.min(100, Math.max(0, p))
})

const iconStyle = computed(() => {
    const top = -(props.iconSize / 2 + props.thickness / 2 + props.iconLift) + 'px'
    const side = progressPercent.value + '%'
    return {
        width: props.iconSize + 'px',
        height: props.iconSize + 'px',
        top,
        [props.rtl ? 'right' : 'left']: side,
        transform: 'translateX(50%)', // لأننا نستخدم right في RTL
        zIndex: 2,
    }
})
</script>

<style scoped>
.pt-wrapper {
    width: 100%;
    text-align: center;
}

.pt-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 12px;
    color: #5b6175;
}

.pt-line {
    position: relative;
    height: 0;
    /* الارتفاع يتحكم فيه العناصر الداخلية */
    overflow: visible;
    /* مهم: لا تقص الأيقونة */
}

/* المسار الخلفي */
.pt-track {
    position: absolute;
    inset-inline: 0;
    top: 0;
    background: var(--track, #eaecef);
    border-radius: 999px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .03);
}

/* التعبئة */
.pt-fill {
    position: absolute;
    top: 0;
    border-radius: 999px;
}

/* اتجاه من اليمين لليسار */
.pt-wrapper .pt-line {
    direction: rtl;
}

.pt-wrapper .pt-track {
    background: v-bind(trackColor);
}

.pt-wrapper .pt-fill {
    left: auto;
    right: 0;
}

/* الأيقونة */
.pt-icon {
    position: absolute;
    object-fit: contain;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, .15));
    pointer-events: none;
}

.pt-value {
    margin-top: 10px;
    background: #fff;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 8px;
    font-weight: 700;
    color: #4a5368;
    box-shadow: 0 6px 16px rgba(0, 0, 0, .08);
}
</style>