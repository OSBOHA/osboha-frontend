<template>
    <div :class="['d-inline-flex', 'align-center', 'gap-1', customClass]">
        <span class="material-symbols-outlined">
            {{ icon }}
        </span>
        <component :is="tag" class="title">
            {{ title }}
        </component>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    tag: { type: String, default: 'span' },

    icon: {
        type: String,
        default: "info" // أيقونة افتراضية
    },
    customClass: {
        type: String,
        default: ""
    }
})
</script>