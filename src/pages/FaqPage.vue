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

import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import FaqComponent from "@/components-aboutpage/FaqComponent.vue";
import PagepointerComponent from "@/crosscomponents/PagepointerComponent.vue";





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
