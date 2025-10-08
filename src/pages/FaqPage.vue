<template>
    <router-view />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
        <main>
            <PagepointerComponent />
            <FaqComponent :isAlternative="true" />
        </main>
        <footer>
            <FooterComponent />
        </footer>
    </div>
</template>

<script>

import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import FaqComponent from "@/components/FaqComponent.vue";
import PagepointerComponent from "@/components/PagepointerComponent.vue";





export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        FaqComponent,
        FooterComponent,


    },
};
</script>
