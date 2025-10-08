<template>
    <router-view />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
        <main>
            <DetailblogComponent />
        </main>
        <footer>
            <FooterComponent />
        </footer>
    </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import DetailblogComponent from "@/components/DetailblogComponent.vue";




export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        DetailblogComponent,

        FooterComponent,
    },
};
</script>
