<template>
    <router-view />
    <ThemeSwitcher />
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
// импорты компонентов
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import DetailblogComponent from "@/components-detailblog/DetailblogComponent.vue";




export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        ThemeSwitcher,
        DetailblogComponent,

        FooterComponent,
    },
};
</script>
<style scoped></style>