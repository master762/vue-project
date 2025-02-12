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
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue";
import OurService from "@/crosscomponents/OurService.vue";
import StatisticsComponent from "@/components-ourservice/StatisticsComponent.vue";
import VrservicesComponent from "@/crosscomponents/VrservicesComponent.vue";
import SunsustemComponent from "@/crosscomponents/SunsustemComponent.vue";


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
<style scoped></style>