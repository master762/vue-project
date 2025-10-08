<template>
  <router-view />
  <div class="container">
    <div class="clip"></div>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <PagepointerComponent :style="{ marginBottom: '150px' }" />
      <OurService />
      <StatisticsComponent :style="{ marginBottom: '150px' }" />
      <VrservicesComponent :style="{ marginBottom: '150px' }" />
      <SunsustemComponent />
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
import OurService from "@/components/OurService.vue";
import StatisticsComponent from "@/components/StatisticsComponent.vue";
import VrservicesComponent from "@/components/VrservicesComponent.vue";
import SunsustemComponent from "@/components/SunsustemComponent.vue";


export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    PagepointerComponent,
    OurService,
    StatisticsComponent,
    VrservicesComponent,
    FooterComponent,
    SunsustemComponent,
  },
};
</script>
