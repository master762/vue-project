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
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import PagepointerComponent from "../components/PagepointerComponent.vue";
import BringingComponent from "@/components/BringingComponent.vue";
import BunnerComponent from "../components/BunnerComponent.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";
import DiscoverComponent from "@/components/DiscoverComponent.vue";
import FaqComponent from "@/components/FaqComponent.vue";


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
