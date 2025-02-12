<script setup>
import MinivideoCompopent from '@/crosscomponents/MinivideoCompopent.vue';
import video from '../assets/img/minivideo1.mp4'
import poster from '../assets/img/Videovr.png'
</script>

<template>

  <section>
    <div class="flex">
      <!-- левая часть -->
      <div class="bg-img" data-aos="zoom-in">
        <img src="@/assets/img/Light2.png" alt="background light" data-aos="fade-down" data-aos-delay="200">
        <img src="@/assets/img/Image2.png" alt="image" data-aos="fade" data-aos-delay="400">
        <MinivideoCompopent class="positionVideo" :videoSrc="video" :videoPoster="poster" />
      </div>
      <!-- правая часть -->
      <div class="sectionDescription" data-aos="fade-right">
        <p class="caption-1">ABOUT US</p>
        <p class="heading-2">Bring your events to life like never before with our VR services.</p>
        <p class="body-1">
          VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our
          mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in
          new ways, and experience events in a whole new light.
        </p>
        <div class="advantages" data-aos="fade-up" data-aos-delay="200">
          <img src="@/assets/img/accept.png" alt="image item">
          <p class="body-3">Cutting-Edge Technology</p>
        </div>
        <div class="advantages" data-aos="fade-up" data-aos-delay="400">
          <img src="@/assets/img/accept.png" alt="image item">
          <p class="body-3">Versatile Applications</p>
        </div>
        <div class="advantages" data-aos="fade-up" data-aos-delay="600">
          <img src="@/assets/img/accept.png" alt="image item">
          <p class="body-3">Affordable and Accessible</p>
        </div>
        <button data-aos="zoom-in" data-aos-delay="800">
          <span class="btnText">READ MORE</span>
        </button>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* шрифты */
.caption-1 {
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  /* Для поддержки в Safari */
  color: transparent;
  display: inline-block;
  margin-top: 12px;
}

.heading-2 {
  color: var(--White);
  margin-bottom: 12px;
}

.body-1 {
  color: var(--Grey2);
  margin-bottom: 24px;
}

.body-3 {
  color: var(--White);
}

.btnText {
  color: var(--White);
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
}


/* позиционирование */
.flex {
  display: flex;
  gap: 222px;
  margin-bottom: 165px;
  position: relative;
  z-index: 1;
}

.sectionDescription {
  max-width: 562px;
}

.advantages {
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 14px;
}

.advantages img {
  width: 16px;
  height: 16px;
}

button {
  margin-top: 18px;
  width: 158px;
  height: 50px;
  background: var(--linear);
  background-size: 200%;
  animation: gradient 3s linear infinite;
}

/* левая сторона */
.bg-img {
  background-color: var(--Black50);
  width: 400px;
  height: 500px;
  position: relative;
  z-index: -2;

}

.bg-img img:nth-child(1) {
  position: absolute;
  top: -25%;
  left: -10%;
  z-index: -1;


}

.bg-img img:nth-child(2) {
  position: absolute;
  top: -24.7%;
  left: 5%;

}

.positionVideo {
  position: absolute;
  top: 400px;
  left: 350px;
}





@media(max-width:1250px) {

  section {
    width: 90%;
    margin: 0 auto;
  }

}

@media (max-width: 1200px) {
  .flex {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  section {
    overflow-x: clip;
  }
}



@media (max-width: 650px) {
  .bg-img {
    width: 90%;
  }

}
</style>
