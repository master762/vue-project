<template>
  <section>
    <div class="elements">
      <div class="grid">
        <!-- Аккордион -->
        <div class="accordion" data-aos="fade-up" data-aos-delay="200">
          <!-- Заголовок -->
          <p class="caption-1" data-aos="fade-down">WHY CHOOSE US</p>
          <p class="heading-2" data-aos="fade-right" data-aos-delay="100">Why Choose Us for Your VR Needs</p>
          <div class="accordion-item" v-for="(item, index) in items" :key="index">
            <button class="accordion-header" @click="openandClose(index)">
              <span class="heading-8">{{ item.title }}</span>
              <img src="@/assets/img/arrow.png" alt="arrow" class="arrow" :class="{ active: item.isOpen }" />
            </button>
            <div class="accordion-content" :class="{ open: item.isOpen }">
              <p class="body-3">{{ item.content }}</p>
            </div>
          </div>
        </div>

        <!-- Фоновые изображения -->
        <div class="bg-img" data-aos="fade-left" data-aos-delay="300">
          <img src="@/assets/img/light10.png" alt="bacground light" />
          <img src="@/assets/img/image8.png" alt="bacground image" />
          <MinivideoCompopent class="positionVideo" :videoSrc="video" :videoPoster="poster" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.acordion-title {
  display: flex;
  flex-direction: column;
  align-items: end;
}

/* Основные стили */
.caption-1 {
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  margin-bottom: 12px;
}

.heading-2 {
  color: var(--White);
  margin-bottom: 32px;
}

.accordion {
  width: 100%;
  max-width: 600px;
  grid-column: 2;
}

.accordion-item {
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
}

.accordion-header {
  width: 100%;
  padding-top: 48px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading-8 {
  color: var(--White);
}

.accordion-header .arrow {
  width: 16px;
  height: 16px;
  transition: 0.3s;
}

.accordion-header .arrow.active {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s;
}

.accordion-content.open {
  padding-top: 12px;
  max-height: 200px;
}

.body-3 {
  color: var(--Grey2);
}

.elements {
  margin-bottom: 240px;
  margin-top: 150px;
}

.grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 600px;
  gap: 32px;
  position: relative;
  z-index: 1;
}

.bg-img {
  background-color: var(--Black50);
  width: 400px;
  height: 500px;
  position: relative;
  z-index: -1;
  grid-column: 1;
  margin-left: 32px;
}

.bg-img img:nth-child(1) {
  position: absolute;
  top: -25%;
  left: -50%;
  z-index: -2;
}

.bg-img img:nth-child(2) {
  position: absolute;
  bottom: 0;
  left: -13%;
}

.positionVideo {
  position: absolute;
  bottom: -52px;
  right: -45px;
  z-index: 2;
}

/* Медиа-запросы */
@media (max-width: 1250px) {
  section {
    overflow-x: clip;
  }

  section {
    width: 90%;
    margin: 0 auto;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .bg-img {
    margin: 0 auto;

  }
}

@media (max-width: 1000px) {
  .heading-2 {
    margin-bottom: 120px;
  }
}

@media (max-width: 650px) {
  .grid {
    display: flex;
    flex-direction: column;
    gap: 170px;
  }





}

@media (max-width: 430px) {

  .elements {
    margin-top: 100px;
    margin-bottom: 150px;
  }

}
</style>

<script setup>
import { ref } from 'vue';
import MinivideoCompopent from '@/crosscomponents/MinivideoCompopent.vue';
import video from '../assets/img/minivideo1.mp4'
import poster from '../assets/img/Videovr.png'

const items = ref([
  {
    title: 'Passionate and Experienced Team',
    content: 'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.',
    isOpen: false,
  },
  {
    title: 'Customized Solutions',
    content: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что элементы политического процесса будут преданы социально-демократической анафеме.',
    isOpen: false,
  },
  {
    title: 'Exceptional Customer Service',
    content: 'Учитывая ключевые сценарии поведения, разбавленное изрядной долей эмпатии, рациональное мышление напрямую зависит от своевременного выполнения сверхзадачи.',
    isOpen: false,
  },
]);

const openandClose = (index) => {
  items.value.forEach((item, i) => {
    if (i === index) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
  });
};
</script>