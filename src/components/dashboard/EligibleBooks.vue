<template>
    <section class="fc" :dir="rtl ? 'rtl' : 'ltr'">

        <div class="fc-card">
            <div class="fc-illustration">
                <img v-if="illustration" :src="illustration" alt="" />
                <slot name="illustration" v-else />
            </div>

            <div class="fc-main">
                <h3 class="fc-title">{{ title }}</h3>
                <p class="fc-sub">{{ subtitle }}</p>

                <button class="fc-btn" @click="$emit('view-all')">
                    <span class="material-symbols-outlined" v-if="btnIcon">{{ btnIcon }}</span>
                    {{ btnLabel }}
                </button>
            </div>

            <div class="fc-list">
                <article v-for="(it, i) in items" :key="i" class="fc-item" @click="$emit('item-click', it, i)">
                    <div class="fc-item-icon">
                        <img v-if="it.icon && it.icon.endsWith('.svg') || it.icon?.startsWith('/')" :src="it.icon"
                            alt="" />
                        <span v-else class="material-symbols-outlined">{{ it.icon || 'menu_book' }}</span>
                    </div>
                    <div class="fc-item-meta">
                        <h4 class="fc-item-title">{{ it.title }}</h4>
                        <p class="fc-item-desc">{{ it.desc }}</p>
                    </div>
                </article>
            </div>

        </div>
        <div class="mt-3">
            <div class="bc-cta">
                <button class="view-all" type="button" @click="$emit('view-all')">
                    عرض الكل (10)
                </button>
                <button class="nav-btn prev" type="button" :disabled="disablePrev" @click="goPrev"
                    aria-label="Prev">‹</button>
                <button class="nav-btn next" type="button" :disabled="disableNext" @click="goNext"
                    aria-label="Next">›</button>
            </div>
        </div>

    </section>
</template>

<script setup>
const props = defineProps({
    rtl: { type: Boolean, default: false },

    illustration: { type: String, default: '' },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },

    btnLabel: { type: String, default: 'عرض الكل' },
    btnIcon: { type: String, default: 'visibility' },

    items: {
        type: Array,
        default: () => [
            { icon: 'draw', title: 'الأطروحات', desc: 'التقييم 100 ' },
            { icon: 'indeterminate_question_box', title: 'الأسئلة العامة', desc: 'التقييم 100' },
            { icon: 'article', title: 'الملخص العام', desc: 'التقييم 100' }
        ]
    }
})
</script>

<style scoped>
.fc {
    width: 100%;
}

.fc-card {
    display: grid;
    gap: 16px;
    background: #D1DCCD;
    border-radius: 18px;
    padding: 16px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, .08);
    align-items: center;
}

/* العمود الأيسر */
.fc-illustration {
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #f5efe6, #ece3d6);
}

.fc-illustration img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* الوسط */
.fc-main {
    min-width: 0;
}

.fc-title {
    margin: 0 0 8px;
    font-weight: 800;
    font-size: 18px;
    color: #3c3a3a;
}

.fc-sub {
    margin: 0 0 12px;
    color: #766b5d;
    font-size: 13px;
    line-height: 1.5;
}

.fc-btn {
    border: 0;
    background: #278036;
    color: #fff;
    font-weight: 700;
    padding: 8px 14px;
    border-radius: 999px;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
}

.fc-list {
    display: grid;
    gap: 10px;
}

.fc-item {
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 10px;
    align-items: center;
    background: #fff;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, .08);
    cursor: pointer;
}

.fc-item-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: #f5f1ea;
    display: grid;
    place-items: center;
}

.fc-item-icon img {
    width: 70%;
    height: 70%;
    object-fit: contain;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 24;
}

.fc-item-meta {
    min-width: 0;
}

.fc-item-title {
    margin: 0 0 4px;
    font-size: 14px;
    color: #3c3a3a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fc-item-desc {
    margin: 0;
    font-size: 12px;
    color: #7b6f60;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 768px) {
    .fc-card {
        grid-template-columns: 1fr;
    }

    .fc-illustration {
        order: 1;
    }

    .fc-main {
        order: 2;
    }

    .fc-list {
        order: 3;
        grid-template-columns: 1fr;
    }
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
</style>