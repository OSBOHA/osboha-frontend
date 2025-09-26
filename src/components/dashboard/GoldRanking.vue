<template>
    <div class="card">
        <!-- المستطيل الأصفر الفاتح -->
        <div class="paper">
            <div class="rank" dir="rtl">
                {{ rank }}
            </div>
            <slot />
        </div>

        <!-- الشارة البنفسجية للعنوان -->
        <div class="badge" dir="rtl">
            {{ title }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, default: 'اسم العضو' },
    rank: { type: String, default: 'ترتيب العضو #1' },
})
</script>

<style scoped>
.card {
    background: none;
}


.paper {
    min-height: 120px;
    background: #f2eccb66;
    border-radius: 28px 28px 14px 14px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

.rank {
    font-weight: 700;
    color: #444;
    text-align: center;
    font-size: 18px;
}

.badge {
    margin-top: -12px;
    background: #8b7a1f;
    color: #fff;
    padding: 8px 16px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}
</style>