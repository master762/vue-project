<template>
    <router-view />
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
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import PagepointerComponent from "../components/PagepointerComponent.vue";
import PriceComponent from "@/components/PriceComponent.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";
import FaqComponent from "@/components/FaqComponent.vue";




export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        PriceComponent,
        AccordionComponent,
        FaqComponent,
        FooterComponent,

    },
};
</script>
