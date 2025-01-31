<template>
    <router-view />
    <ThemeSwitcher />
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
// импорты компонентов
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue";
import BlogComponent from "../components-blog/BlogComponent.vue";



export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        ThemeSwitcher,
        BlogComponent,

        FooterComponent,
    },
};
</script>
<style scoped></style>