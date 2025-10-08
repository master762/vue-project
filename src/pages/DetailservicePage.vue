<template>
  <router-view />
  <div class="container">
    <div class="clip"></div>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <PagepointerComponent :style="{ marginBottom: '150px' }" />
      <CircleComponent :style="{ marginBottom: '900px' }" />
      <VideoComponent caption1="OUR VR DESIGN PROJECT"
        heading2="Revolutionize Your Experience with Our Cutting-Edge VR Design Project" caption2="VR Design"
        heading4="VR Design Projects" videoSrc="/video1.mp4" videoPoster="/Video5.png" />
      <VrservicesComponent />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>

import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import PagepointerComponent from "../components/PagepointerComponent.vue"
import CircleComponent from "@/components/CircleComponent.vue";
import VideoComponent from "@/components/VideoComponent.vue";
import VrservicesComponent from "@/components/VrservicesComponent.vue";




export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    PagepointerComponent,
    CircleComponent,
    FooterComponent,
    VideoComponent,
    VrservicesComponent,

  },
};
</script>
