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
import AccordionComponent from "../components-mainpage/AccordionComponent.vue";
import AdvertisingComponent from "../components-mainpage/AdvertisingComponent.vue";
import BunnerComponent from "../crosscomponents/BunnerComponent.vue";
import DiscoverComponent from "../components-mainpage/DiscoverComponent.vue";
import EventComponent from "../components-mainpage/EventComponent.vue";
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import OurService from "../crosscomponents/OurService.vue";
import SunsustemComponent from "../crosscomponents/SunsustemComponent.vue";
import VideoComponent from "../crosscomponents/VideoComponent.vue";
import VrservicesComponent from "../crosscomponents/VrservicesComponent.vue";
import OurarticlesComponent from "../components-mainpage/OurarticlesComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";

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
