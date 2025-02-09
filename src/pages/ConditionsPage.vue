<template>
    <router-view />
    <ThemeSwitcher />
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
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue";
import ConditionsCompoent from "@/components-conditions/ConditionsCompoent.vue";

export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        ThemeSwitcher,
        PagepointerComponent,
        ConditionsCompoent,
        FooterComponent,
    },
};
</script>
<style scoped></style>