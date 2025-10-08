<template>
    <router-view />
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
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import PagepointerComponent from "../components/PagepointerComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import MapComponent from "@/components/MapComponent.vue";







export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        InfoComponent,
        InputComponent,
        MapComponent,
        FooterComponent,
    },
};
</script>
