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
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue";
import BlogComponent from "../components-blog/BlogComponent.vue";



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
<style scoped></style>