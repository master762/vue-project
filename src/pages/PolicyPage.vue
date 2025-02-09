<template>
    <router-view />
    <ThemeSwitcher />
    <div class="clip"></div>
    <header>
        <HeaderComponent class="container" />
    </header>
    <main>
        <PagepointerComponent class="container" :style="{ marginBottom: '64px' }" />
        <PolicyComponent />
    </main>
    <footer>
        <FooterComponent class="container" />
    </footer>
</template>

<script>
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue";
import PolicyComponent from "@/components-policy/PolicyComponent.vue";

export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        ThemeSwitcher,
        PagepointerComponent,
        PolicyComponent,
        FooterComponent,
    },
};
</script>
<style scoped></style>