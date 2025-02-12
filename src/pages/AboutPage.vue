<template>
  <router-view />
  <div class="container">
    <div class="clip"></div>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <PagepointerComponent />
      <BringingComponent />
      <BunnerComponent :showText="true" :showImages="false" />
      <AccordionComponent />
      <TeamComponent />
      <DiscoverComponent />
      <FaqComponent />
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
import BringingComponent from "../components-aboutpage/BringingComponent.vue";
import BunnerComponent from "../crosscomponents/BunnerComponent.vue";
import AccordionComponent from "@/components-aboutpage/AccordionComponent.vue";
import TeamComponent from "@/components-aboutpage/TeamComponent.vue";
import DiscoverComponent from "@/components-mainpage/DiscoverComponent.vue";
import FaqComponent from "@/components-aboutpage/FaqComponent.vue";


export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    PagepointerComponent,
    BringingComponent,
    BunnerComponent,
    AccordionComponent,
    TeamComponent,
    DiscoverComponent,
    FaqComponent,
    FooterComponent,
  },
};
</script>
<style scoped></style>