<template>
  <section>
    <div class="adaptContainer">
      <div class="flex">
        <p class="caption-1" data-aos="fade-down">HOW TO GET STARTED</p>
      </div>
      <div class="flex">
        <p class="heading-2" data-aos="fade-up" data-aos-delay="100">
          Bringing Your Virtual Reality <br />
          Dreams to Life
        </p>
      </div>
      <div class="video-container" data-aos="zoom-in" data-aos-delay="200">
        <video ref="video" controls poster="@/assets/img/Video2.png" class="video">
          <source src="@/assets/img/video.mp4" type="video/mp4" />
        </video>
        <div v-show="showButton" class="play-button" @click="playVideo">
          <img src="@/assets/img/Playbutton.png" alt="Play Button" />
        </div>
        <div class="text" v-if="showText">
          <p class="caption-2" data-aos="fade-right" data-aos-delay="300">
            VR Service
          </p>
          <p class="heading-4" data-aos="fade-left" data-aos-delay="400">
            How to get started
          </p>
        </div>
      </div>
      <div class="btn" data-aos="fade-up" data-aos-delay="500">
        <button>
          <p class="customText">GET STARTED</p>
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* стили текста */
.caption-1 {
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  /* Для поддержки в Safari */
  color: transparent;
  display: inline-block;
  margin-bottom: 12px;
}

.heading-2 {
  color: var(--White);
  text-align: center;
}

.caption-2 {
  color: var(--White);
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  width: 90px;
  text-align: center;
}

.heading-4 {
  color: var(--White);
  margin-top: 12px;
}

.customText {
  color: var(--White);
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 1.5px;
}

/* позиционирование */
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex:nth-child(2) {
  margin-bottom: 48px;
}

.video {
  width: 100%;
  height: 522px;
  background-image: url('/src/assets/img/Video2.png');
}

.video-container {
  width: 100%;
  height: 522px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.text {
  padding-top: 52px;
  padding-left: 34px;
  position: absolute;
  top: 52px;
  left: 34px;
}

.btn {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}

button {
  margin-top: 46px;
  width: 182px;
  height: 50px;
  background: var(--linear);
  background-size: 200%;
  animation: gradient 3s linear infinite;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: opacity 0.3s;
}

@media(max-width:1250px) {

  .adaptContainer {
    width: 90%;
    margin: 0 auto;
  }

  .video {
    border-radius: 12px;
    background-size: contain;
    background-repeat: no-repeat;

  }

  button {
    margin-top: 0px;
  }
}

@media(max-width:1000px) {
  button {
    margin-top: -100px;
  }
}



@media (max-width: 650px) {
  .text {
    padding-top: 10px;
    padding-left: 10px;
  }

  button {
    margin-top: -260px;
  }
}

@media (max-width: 430px) {

  .heading-4 {
    font-size: 20px;
    width: 150px;
    line-height: auto;
  }
}
</style>
<script setup>
import { ref } from 'vue';

const video = ref(null);
const showButton = ref(true);
const showText = ref(true);

const playVideo = () => {
  if (video.value) {
    video.value.play();

    setTimeout(() => {
      showButton.value = false;
      showText.value = false;
    }, 500);
  }
};
</script>
