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
      <CircleComponent :style="{ marginBottom: '800px' }" />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>

import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
import PagepointerComponent from "../crosscomponents/PagepointerComponent.vue"
import CircleComponent from "@/components-detailservice/CircleComponent.vue";




export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    PagepointerComponent,
    CircleComponent,
    ThemeSwitcher,
    FooterComponent,


  },
};
</script>
<style scoped></style>