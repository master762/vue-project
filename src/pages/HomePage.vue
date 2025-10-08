<template>
  <router-view />
  <ThemeSwitcher />

  <div class="clip"></div>
  <header>
    <HeaderComponent class="container" />
  </header>
  <main>
    <div class="container">
      <AdvertisingComponent />
      <BunnerComponent :showText="false" :showImages="true" />
      <EventComponent />
      <OurService />
      <AccordionComponent />
      <VideoComponent caption1="HOW TO GET STARTED" heading2="Bringing Your Virtual Reality Dreams to Life"
        caption2="VR Service" heading4="How to get started" videoSrc="/video.mp4" videoPoster="/Video2.png" />
      <SunsustemComponent />
      <VrservicesComponent />
      <DiscoverComponent />
    </div>
    <OurarticlesComponent />
  </main>
  <footer>
    <FooterComponent class="container" />
  </footer>

</template>

<script>
import AccordionComponent from "../components/AccordionComponent.vue";
import AdvertisingComponent from "../components/AdvertisingComponent.vue";
import BunnerComponent from "../components/BunnerComponent.vue";
import DiscoverComponent from "../components/DiscoverComponent.vue";
import EventComponent from "../components/EventComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import OurService from "../components/OurService.vue";
import SunsustemComponent from "../components/SunsustemComponent.vue";
import VideoComponent from "../components/VideoComponent.vue";
import VrservicesComponent from "../components/VrservicesComponent.vue";
import OurarticlesComponent from "../components/OurarticlesComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    AdvertisingComponent,
    BunnerComponent,
    EventComponent,
    OurService,
    AccordionComponent,
    VideoComponent,
    SunsustemComponent,
    VrservicesComponent,
    DiscoverComponent,
    OurarticlesComponent,
    FooterComponent,
  },
};
</script>
