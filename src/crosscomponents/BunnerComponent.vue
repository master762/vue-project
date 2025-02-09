<template>
  <section>
    <!-- текст, передаваемый через пропс -->
    <div v-if="showText" class="flex-props">
      <p class="custom-txt">WHY CHOOSE US</p>
      <p class="heading-2">Empowering Your Virtual Reality Experience</p>
    </div>
    <!-- банер -->
    <div class="banner" data-aos="fade-up">
      <!-- Первый блок -->
      <div data-aos="fade-right" data-aos-delay="100">
        <img src="@/assets/img/banner1.png" alt="item" data-aos="zoom-in" data-aos-delay="200">
        <p class="heading-7" data-aos="fade-right" data-aos-delay="300">Expertise</p>
        <p class="body-2" data-aos="fade-right" data-aos-delay="400">
          Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a
          commitment to delivering quality work and give the best service.
        </p>
      </div>
      <!-- Второй блок -->
      <div data-aos="fade-right" data-aos-delay="500">
        <img src="@/assets/img/banner2.png" alt="item" data-aos="zoom-in" data-aos-delay="600">
        <p class="heading-7" data-aos="fade-right" data-aos-delay="700">Customization</p>
        <p class="body-2" data-aos="fade-right" data-aos-delay="800">
          Every client is unique, and we believe every VR experience should be too. We'll work with you to create a
          customized solution that meets your specific needs and goals.
        </p>
      </div>
      <!-- Третий блок -->
      <div data-aos="fade-right" data-aos-delay="900">
        <img src="@/assets/img/banner3.png" alt="item" data-aos="zoom-in" data-aos-delay="1000">
        <p class="heading-7" data-aos="fade-right" data-aos-delay="1100">Service</p>
        <p class="body-2" data-aos="fade-right" data-aos-delay="1200">
          We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal
          is to ensure you're satisfied with every aspect of your VR experience.
        </p>
      </div>
      <!-- визуальные эллементы сзади -->
      <img v-if="showImages" class="positionMan" data-aos="fade-left" src="@/assets/img/Image.png" alt="image">
      <img v-if="showImages" class="lightDecoration" src="@/assets/img/Light.png" alt="background light">
    </div>
  </section>
</template>


<style scoped>
.flex-props {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.custom-txt {
  margin-bottom: 16px;
  line-height: auto;
  letter-spacing: 14%;
  font-weight: 500;
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  /* Для поддержки в Safari */
  color: transparent;
  display: inline-block;
  margin-top: 150px;
}

.heading-2 {
  color: var(--White);
  margin-bottom: 54px;
  max-width: 708px;
}

/* шрифты */
.heading-7 {
  color: var(--White);
  margin-bottom: 12px;
}

.body-2 {
  color: var(--Grey1);
}

/* позиционирование */
.banner {
  background-color: var(--Black50);
  width: 100%;
  height: 357px;
  display: flex;
  gap: 50px;
  margin-bottom: 201px;
  position: relative;
}

.banner div:nth-child(1) {
  margin-left: 64px;
}

.banner div {
  margin-top: 42px;
  max-width: 324px;

}

div img {
  margin-bottom: 42px;
}

.positionMan {
  position: absolute;
  top: -626px;
  right: 0;
  margin: 0;
}

.lightDecoration {
  position: absolute;
  top: -626px;
  right: 0;
  z-index: -2;
}

@media(max-width:1250px) {

  section {
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 1200px) {
  .positionMan {
    top: -356px;
    right: 0;
    width: 300px;
    height: 357px;
  }
}

@media (max-width: 926px) {
  .banner {
    height: fit-content;
    margin-top: 400px;
  }

  .body-2 {
    margin-bottom: 20px;
  }
}


@media (max-width: 650px) {
  .banner {
    flex-direction: column;
  }

  .banner div {
    padding: 20px;

  }

  .banner div:nth-child(1) {
    margin-left: 0;
  }
}

@media (max-width: 430px) {
  .banner {
    height: fit-content;
    margin-top: 450px;

  }

  section {
    overflow-x: clip;
  }

  .positionMan {
    width: 354px;
    height: 422px;
    top: -420px;
    right: -35%;

  }

}
</style>

<script setup>

defineProps({
  showText: {
    type: Boolean,
    default: true
  },
  showImages: {
    type: Boolean,
    default: true
  }
});
</script>