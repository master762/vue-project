<template>
    <router-view />
    <div class="clip"></div>
    <header>
        <HeaderComponent class="container" />
    </header>
    <main>
        <PagepointerComponent class="container" :style="{ marginBottom: '64px' }" />
        <ConditionsCompoent />
    </main>
    <footer>
        <FooterComponent class="container" />
    </footer>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import PagepointerComponent from "../components/PagepointerComponent.vue";
import ConditionsCompoent from "@/components/ConditionsCompoent.vue";

export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        ConditionsCompoent,
        FooterComponent,
    },
};
</script>
