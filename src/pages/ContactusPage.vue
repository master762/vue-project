<template>
    <router-view />
    <ThemeSwitcher />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
        <main>
            <PagepointerComponent :style="{ marginBottom: '64px' }" />
            <InfoComponent :style="{ marginBottom: '150px' }" />
            <InputComponent :style="{ marginBottom: '209px' }" />
            <MapComponent />
        </main>
        <footer>
            <FooterComponent />
        </footer>
    </div>
</template>

<script>
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue";
import InfoComponent from "@/components-contactus/InfoComponent.vue";
import InputComponent from "@/components-contactus/InputComponent.vue";
import MapComponent from "@/components-contactus/MapComponent.vue";







export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        ThemeSwitcher,
        InfoComponent,
        InputComponent,
        MapComponent,
        FooterComponent,
    },
};
</script>
<style scoped></style>