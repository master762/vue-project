<template>
    <section>
        <div class="finder">
            <img class="light" src="@/assets/img/light8.png" alt="">
            <p class="heading-1">{{ pageTitle }}</p>
            <div class="flex">
                <router-link to="/">
                    <p class="heading-11">Home</p>
                </router-link>
                <img class="transform" src="@/assets/img/arrow.png" alt="">
                <p class="body-1">{{ pageTitle }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Настройка текста заголовка на основе текущего пути
const pageTitle = computed(() => {
    const routeName = route.name;
    if (routeName === 'AboutPage') return 'About Us';
    if (routeName === 'OurService') return 'Our Service';
    if (routeName === 'Detailservice') return 'Detail service';
    return 'Page Not Found';
});

</script>

<style scoped>
.light {
    position: absolute;
    top: -70%;
    left: 23%;
    z-index: -1;
}

.body-1 {
    color: var(--Grey2);
    cursor: pointer;
}

.heading-11 {
    color: var(--White);
}

.heading-1 {
    color: var(--White);
    margin-bottom: 30px;
}

.finder {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-bottom: 1px solid;
    padding-bottom: 70px;
    border-image-source: var(--linear);
    border-image-slice: 1;
}

.flex {
    display: flex;
    gap: 7px;
    align-items: center;
}

.transform {
    transform: rotate(270deg);
}
</style>
