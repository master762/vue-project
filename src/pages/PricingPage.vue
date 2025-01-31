<template>
    <router-view />
    <ThemeSwitcher />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
        <main>
            <PagepointerComponent :style="{ marginBottom: '150px' }" />
            <PriceComponent :style="{ marginBottom: '150px' }" />
            <AccordionComponent :style="{ marginBottom: '-200px' }" />
            <FaqComponent />
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
import PriceComponent from "@/components-pricingpage/PriceComponent.vue";
import AccordionComponent from "@/components-aboutpage/AccordionComponent.vue";
import FaqComponent from "@/components-aboutpage/FaqComponent.vue";



export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        PriceComponent,
        AccordionComponent,
        FaqComponent,
        ThemeSwitcher,
        FooterComponent,

    },
};
</script>
<style scoped></style>