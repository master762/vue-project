<template>
    <router-view />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
        <main>
            <PagepointerComponent :style="{ marginBottom: '95px' }" />
            <TeamComponent />
            <StatisticsComponent />
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
import TeamComponent from "@/components-ourteam/TeamComponent.vue";
import StatisticsComponent from "@/components-ourservice/StatisticsComponent.vue";




export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        PagepointerComponent,
        TeamComponent,
        StatisticsComponent,
        FooterComponent,
    },
};
</script>
<style scoped></style>