<script setup>
import MinivideoCompopent from '@/components/MinivideoCompopent.vue';
import video from '../assets/img/minivideo.mp4'
import poster from '../assets/img/miniposter.png'
</script>
<template>
  <section>
    <div class="ads" data-aos="flip-right">
      <p class="heading-1">Immerse Yourself in Virtual Reality</p>
      <p class="body-1">Experience Unforgettable Events in VR. Bring your events to <br>life like never before with
        our VR services</p>
      <RouterLink to="/OurService"><button>
          <span class="button-1">DISCOVER MORE</span>
        </button>
      </RouterLink>
      <MinivideoCompopent class="positionVideo" :videoSrc="video" :videoPoster="poster" />
    </div>
    <div class="clients" data-aos="fade-right">
      <div class="clients-img">
        <img src="@/assets/img/Ellipse1.png" alt="client's photo">
        <img src="@/assets/img/Ellipse2.png" alt="client's photo">
        <img src="@/assets/img/Ellipse3.png" alt="client's photo">
      </div>
      <div class="clients-text">
        <div class="position">
          <p class="clients-count">32k+</p>
          <img src="@/assets/img/Element.png" alt="image item">
        </div>
        <p class="clients-description">Happy Client</p>
      </div>
    </div>
    <img class="positionDecoration" src="@/assets/img/Assets.png" alt="background image">
  </section>
</template>
<style scoped>
/* цвета текста */
.heading-1 {
  color: var(--White);
}

.body-1 {
  padding-top: 12px;
  color: var(--Grey2);
}

.button-1 {
  color: var(--White);
}

/* основной контейнер */
.ads {
  max-width: 540px;
  position: relative;
}

button {
  margin-top: 32px;
  width: 206px;
  height: 50px;
  padding: 18px 38px 18px 38px;
  background: var(--linear);
  background-size: 200%;
  animation: gradient 3s linear infinite;
}

/* клиенты, их фото и текст */
.clients {
  margin-top: 81px;
  display: flex;
  align-items: center;
  margin-bottom: 104px;
  width: fit-content;
}

.clients-img {
  display: flex;
  gap: 12px;
  position: relative;
  margin-right: 80px
}

.clients-img img {
  position: absolute;
  top: 0;
  left: 0;
}

.clients-img img:nth-child(1) {
  position: static;

}

.clients-img img:nth-child(2) {
  left: 40px;
}

.clients-img img:nth-child(3) {
  left: 80px;
}



.clients-text img {
  position: absolute;
  top: 20px;
  left: -10px;
}

.clients-text {
  margin-left: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.position {
  position: relative;

}

.clients-count {
  color: var(--White);
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
}

.clients-description {
  font-size: 16px;
  color: rgba(209, 209, 209, 1);
  font-weight: 300;
}

/* декоративные эллементы сзади */
.positionVideo {
  position: absolute;
  bottom: -169px;
  right: 0;
  z-index: 1;

}

.positionDecoration {
  position: absolute;
  top: 17%;
  left: 0;
  z-index: -1;
  width: auto;
}


@media(max-width:1250px) {

  section {
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 1200px) {

  .positionDecoration {
    width: 80%;
    top: 28%;
  }
}

@media (max-width: 570px) {
  .positionVideo {
    display: none;
  }

  .positionDecoration {
    display: none;
  }
}

@media (max-width: 430px) {}
</style>
