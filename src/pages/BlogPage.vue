<template>
    <router-view />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
        <main>
            <PagepointerComponent :style="{ marginBottom: '95px' }" />
            <BlogComponent />
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
import BlogComponent from "../components/BlogComponent.vue";



export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        BlogComponent,

        FooterComponent,
    },
};
</script>
