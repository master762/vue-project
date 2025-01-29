<template>
  <router-view />
  <ThemeSwitcher />
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
// импорты компонентов
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
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
    ThemeSwitcher,
    FooterComponent,
    SunsustemComponent,
  },
};
</script>
<style scoped></style>