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
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import DetailblogComponent from "@/components-detailblog/DetailblogComponent.vue";




export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        DetailblogComponent,

        FooterComponent,
    },
};
</script>
