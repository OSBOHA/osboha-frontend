<template>
    <section>
        <img class="img-fluid rounded w-75" src="@/assets/images/dashboard/reading.png" alt="reading" />
        <hr/>
        <h1 class="text-center mb-2">{{ greeting }}</h1>

    </section>
</template>

<script setup>
const props = defineProps({
    greeting: { type: String, default: 'Hi, Danielle.' },
})
</script>
