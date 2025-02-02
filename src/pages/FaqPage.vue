<template>
    <router-view />
    <ThemeSwitcher />
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
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import FaqComponent from "@/components-aboutpage/FaqComponent.vue";
import PagepointerComponent from "@/crosscomponents/PagepointerComponent.vue";





export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        ThemeSwitcher,
        PagepointerComponent,
        FaqComponent,
        FooterComponent,


    },
};
</script>
<style scoped></style>