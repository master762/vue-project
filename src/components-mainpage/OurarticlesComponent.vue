<template>
  <section>
    <div class="adaptContainer">
      <!-- заголовки, кнопка -->
      <div class="container">
        <p class="caption-1" data-aos="fade-up">OUR ARTICLES</p>
        <div class="flex" data-aos="fade-up" data-aos-delay="100">
          <p class="heading-2">Stay Up-to-Date with Our VR Insights</p>
          <button class="customBtn">
            <span class="customTxt">SEE ALL</span>
          </button>
        </div>
      </div>
      <div class="position">
        <!-- визуальные эллементы сзади -->
        <img class="visual" src="@/assets/img/visual.png" alt="" data-aos="fade-right" data-aos-delay="200">
        <!-- слайдер -->
        <div class="container">
          <p class="heading-6" data-aos="fade-up" data-aos-delay="300">Popular Article</p>
          <div class="slider" data-aos="fade-up" data-aos-delay="400">
            <div class="slides" :style="{ transform: `translateX(-${currentSlide * 636}px)` }">
              <img v-for="(image, index) in images" :key="index" :src="image" alt="">
            </div>
            <button v-if="currentSlide > 0" @click="prevSlide" class="slider-btn prev">
              <img src="@/assets/img/prev.png" alt="">
            </button>
            <button v-if="currentSlide < images.length - 1" @click="nextSlide" class="slider-btn next">
              <img src="@/assets/img/next.png" alt="">
            </button>
          </div>
          <!-- индикаторы слайдов -->
          <div class="indicators" data-aos="fade-up" data-aos-delay="500">
            <div v-for="(image, index) in images" :key="index" class="indicator"
              :class="{ active: currentSlide === index }"></div>
          </div>
        </div>
        <!-- скролл-блок -->
        <div class="scroll-block" data-aos="fade-up" data-aos-delay="600">
          <div class="scroll-elements">
            <p class="scroll-title" data-aos="fade-up" data-aos-delay="700">Recent Article</p>
            <div class="element" data-aos="fade-up" data-aos-delay="800">
              <img src="@/assets/img/scroll1.png" alt="">
              <div class="scroll-text">
                <p class="caption-2">VR Education</p>
                <p class="heading-9">The Future of Education: How VR is Revolutionizing the Classroom</p>
              </div>
              <button class="btn"><img src="@/assets/img/next.png" alt=""></button>
            </div>
            <div class="element" data-aos="fade-up" data-aos-delay="900">
              <img src="@/assets/img/scroll2.png" alt="">
              <div class="scroll-text">
                <p class="caption-2">VR Architecture</p>
                <p class="heading-9">Bringing Designs to Life: How VR is Changing Architecture</p>
              </div>
              <button class="btn"><img src="@/assets/img/next.png" alt=""></button>
            </div>
            <div class="element" data-aos="fade-up" data-aos-delay="1000">
              <img src="@/assets/img/scroll3.png" alt="">
              <div class="scroll-text">
                <p class="caption-2">VR Entertainment </p>
                <p class="heading-9">Making Events Memorable: The Power of VR for Corporate and Special Occasions</p>
              </div>
              <button class="btn"><img src="@/assets/img/next.png" alt=""></button>
            </div>
            <div class="element" data-aos="fade-up" data-aos-delay="1100">
              <img src="@/assets/img/scroll4.png" alt="">
              <div class="scroll-text">
                <p class="caption-2">VR Event</p>
                <p class="heading-9">Exploring New Worlds: The Benefits of VR Travel</p>
              </div>
              <button class="btn"><img src="@/assets/img/next.png" alt=""></button>
            </div>
            <div class="element" data-aos="fade-up" data-aos-delay="1200">
              <img src="@/assets/img/scroll5.png" alt="">
              <div class="scroll-text">
                <p class="caption-2">Крутой лев</p>
                <p class="heading-9">Крутой лев стоит, думает, переливается </p>
              </div>
              <button class="btn"><img src="@/assets/img/next.png" alt=""></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* заголовки, стили их текстов и кнопка */
.caption-2 {
  color: rgba(255, 255, 255, 1);
  padding: 2px 10px 2px 10px;
  background: rgba(255, 255, 255, 0.3);
  width: fit-content;
  border-radius: 16px;
  margin-bottom: 8px;
}

.heading-9 {
  color: var(--White);
}

.heading-6 {
  color: var(--White);
  margin-top: 104px;
  margin-bottom: 32px;
}

.scroll-title {
  color: var(--White);
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 600;
  line-height: auto;

}

.customTxt {
  color: var(--White);
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 1.5px;
  white-space: nowrap;
}

.heading-2 {
  color: var(--White);
  white-space: nowrap;
}

.caption-1 {
  margin-top: 350px;
  margin-bottom: 12px;
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
}

.flex {
  display: flex;
  gap: 228px;
  align-items: center;
}

.customBtn {
  width: 140px;
  height: 50px;
  padding: 18px 38px 18px 38px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid;
  border-image-source: var(--linear);
  border-image-slice: 1;
  animation: borderAnimation 2s infinite alternate;
}

/* слайдер */
.slider {
  position: relative;
  width: 636px;
  height: 425px;
  overflow: hidden;
  margin-bottom: 44px;
  /* Отступ снизу для индикаторов */
  z-index: 2;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slides img {
  width: 636px;
  height: 425px;
}

/* Общие стили для кнопок слайдера */
.slider-btn {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid;
  animation: borderAnimation 2s infinite alternate;
  border-image-source: var(--linear);
  border-image-slice: 1;
}

/* Позиционирование кнопок */
.prev {
  bottom: 47px;
  left: 24px;
}

.next {
  bottom: 47px;
  left: 562px;
}

/* индикаторы слайдов */
.indicators {
  display: flex;
  justify-content: flex-start;
  margin-left: 278px;
  gap: 12px;
  margin-top: 44px;
}

.indicator {
  width: 9px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.31);
  transition: all 0.3s ease;
  border-radius: 32px;
}

.indicator.active {
  width: 17px;
  background-color: var(--White);
}

/* скролл-блок */
.position {
  position: relative;
  width: 100%;
}

.scroll-block {
  max-width: 729px;
  width: 100%;
  height: 605px;
  position: absolute;
  right: 250px;
  top: 0;
  background: var(--Black50);
  overflow-y: auto;
}

.scroll-elements {
  width: 512px;
  margin: 0 auto;
  padding: 32px 70px 1px 70px;

}

.element {
  display: flex;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.15);
  padding-bottom: 32px;
  margin-bottom: 32px;
  align-items: center;

}

.scroll-text {
  padding-top: 8px;
  margin: 7px 13px 0 21px;
}

.btn {

  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid;
  animation: borderAnimation 2s infinite alternate;
  border-image-source: var(--linear);
  border-image-slice: 1;
}

.scroll-block::-webkit-scrollbar {
  width: 2px;
}

.scroll-block::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.12);
  /* Цвет трека */
  border-radius: 32px;
}

.scroll-block::-webkit-scrollbar-thumb {
  background: var(--White);
  /* Цвет ползунка */
  border-radius: 32px;
  min-height: 2px;
  /* Минимальная высота ползунка */
  max-height: 2px;
  /* Максимальная высота ползунка */

}

/* визуальные эллементы сзади */

.visual {
  position: absolute;
  top: 40px;
  left: -350px;
  z-index: -2;
}

section {
  overflow-x: clip;
}

@media(max-width:1250px) {
  .adaptContainer {
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 1200px) {
  .flex {
    gap: 100px;
  }

  .slider {
    width: 500px;
    height: 335px;
  }

  .slides img {
    width: 500px;
    height: 335px;
  }

  .next {
    left: 430px;
  }

  .scroll-block {
    width: 50%;
    right: -50px;
  }

  .scroll-elements {
    width: 400px;
    padding: 32px 40px 1px 40px;
  }

  .flex {
    gap: 100px;
  }

  .heading-2 {
    font-size: 28px;
  }

  .customBtn {
    width: 120px;
    height: 45px;
    padding: 15px 30px;
  }

  .customTxt {
    font-size: 12px;
  }
}



@media (max-width: 1000px) {
  .flex {
    gap: 50px;
  }

  .slider {
    width: 400px;
    height: 270px;
  }

  .slides img {
    width: 400px;
    height: 270px;
  }

  .next {
    left: 330px;
  }

  .scroll-block {
    width: 45%;
    right: -30px;
  }

  .scroll-elements {
    width: 350px;
    padding: 32px 30px 1px 30px;
  }

  section {
    margin-bottom: 240px;
  }

  .flex {
    gap: 50px;
  }

  .heading-2 {
    font-size: 24px;
  }

  .customBtn {
    width: 100px;
    height: 40px;
    padding: 12px 25px;
  }

  .customTxt {
    font-size: 11px;
  }

}

@media (max-width: 768px) {
  section {
    margin-bottom: 1000px;
  }

  .flex {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .slider {
    width: 100%;
    height: auto;
  }

  .slides img {
    width: 100%;
    height: auto;
  }

  .next {
    left: calc(100% - 70px);
  }

  .scroll-block {
    width: 100%;
    right: 0;
    top: 700px;
  }

  .scroll-elements {
    width: 90%;
    padding: 32px 20px 1px 20px;
  }

  .indicators {
    justify-content: center;
    margin-left: 0;
  }

  .flex {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .heading-2 {
    font-size: 20px;
    white-space: normal;
  }

  .customBtn {
    width: 90px;
    height: 35px;
    padding: 10px 20px;
  }

  .customTxt {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .caption-1 {
    margin-top: 200px;
  }

  .slider {
    width: 100%;
    height: auto;
  }

  .slides img {
    width: 100%;
    height: auto;
  }

  .next {
    left: calc(100% - 70px);
  }

  .scroll-block {
    top: 600px;
  }

  .scroll-elements {
    width: 100%;
    padding: 32px 10px 1px 10px;
  }

  .element {
    flex-direction: column;
    align-items: flex-start;
  }

  .scroll-text {
    margin: 7px 0 0 0;
  }

  .btn {
    margin-top: 10px;
  }

  .caption-1 {
    margin-top: 200px;
    font-size: 14px;
  }

  .heading-2 {
    font-size: 18px;
  }

  .customBtn {
    width: 80px;
    height: 30px;
    padding: 8px 15px;
  }

  .customTxt {
    font-size: 9px;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import slider1 from "@/assets/img/slider1.png";
import slider2 from "@/assets/img/slider2.png";
import slider3 from "@/assets/img/slider3.png";
import slider4 from "@/assets/img/slider4.png";

const images = [slider1, slider2, slider3, slider4];

const currentSlide = ref(0);

const nextSlide = () => {
  if (currentSlide.value < images.length - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};
</script>