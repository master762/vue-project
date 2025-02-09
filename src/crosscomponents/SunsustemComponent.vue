<template>
  <section>
    <div class="ellipses-container" data-aos="fade" data-aos-delay="300">
      <!-- Эллипсы -->
      <div class="ellipse ellipse-1"></div>
      <div class="ellipse ellipse-2"></div>
      <div class="ellipse ellipse-3"></div>
      <div class="ellipse ellipse-4"></div>
      <div class="ellipse ellipse-5"></div>
      <div class="ellipse ellipse-6"></div>

      <!-- Canvas для аватарок -->
      <canvas ref="canvas" class="canvas-layer" @click="onCanvasClick"></canvas>

      <!-- Центральные элементы -->
      <img class="ellipse-light" src="@/assets/img/Light5.png" alt="background light">
      <img class="ellipse-img" src="@/assets/img/Image5.png" alt="background image">
      <div class="text-container">
        <p class="caption-1">TESTIMONIAL</p>
        <p class="heading-2">What Our Clients Are Saying</p>
      </div>

      <!-- Отображение текста и кнопки при нажатии на аватарку -->
      <div v-if="selectedAvatar" class="tooltip" :style="tooltipStyle">
        <p class="tooltip-text">{{ selectedAvatar.text }}</p>
        <p class="tooltip-author">{{ selectedAvatar.author }}</p>
        <button class="resume-button" @click="resumeAnimation"><span>Close</span></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import avatar1 from "@/assets/img/Avatar-1.png";
import avatar2 from "@/assets/img/Avatar-2.png";
import avatar3 from "@/assets/img/Avatar-3.png";
import avatar4 from "@/assets/img/Avatar-4.png";
import avatar5 from "@/assets/img/Avatar-5.png";

const canvas = ref(null);
const isPaused = ref(false);
const selectedAvatar = ref(null);
const tooltipStyle = ref({ top: '0px', left: '0px' });

// массив аватарок
const avatars = [
  {
    src: avatar1,
    radius: 600,
    speed: 0.0015,
    angle: 0,
    text: "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
    author: "Robert Fox - CEO Anono"
  },
  {
    src: avatar2,
    radius: 520,
    speed: 0.0020,
    angle: Math.PI / 2,
    text: "Учитывая ключевые сценарии поведения, семантический разбор внешних противодействий требует определения и уточнения модели развития.",
    author: "Алексей Белов — директор по маркетингу"
  },
  {
    src: avatar3,
    radius: 437.5,
    speed: 0.0022,
    angle: Math.PI,
    text: "Следует отметить, что высокое качество позиционных исследований способствует подготовке и реализации инновационных методов управления процессами.",
    author: "Игорь Козлов — технический директор"
  },
  {
    src: avatar4,
    radius: 356,
    speed: 0.0017,
    angle: (3 * Math.PI) / 2,
    text: "Для современного мира социально-экономическое развитие требует определения и уточнения форм воздействия.",
    author: "Дмитрий Соколов — руководитель отдела разработки"
  },
  {
    src: avatar5,
    radius: 270,
    speed: 0.0023,
    angle: 0,
    text: "Безусловно, глубокий уровень погружения не оставляет шанса для системы массового участия.",
    author: "Александр Волков — финансовый директор"
  },
];

// отрисовка
onMounted(() => {
  const ctx = canvas.value.getContext("2d");
  const width = canvas.value.clientWidth;
  const height = canvas.value.clientHeight;
  const centerX = width / 2;
  const centerY = height / 2;


  canvas.value.width = width;
  canvas.value.height = height;

  const images = [];
  let loadedImages = 0;

  avatars.forEach((avatar, index) => {
    const img = new Image();
    img.src = avatar.src;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === avatars.length) {
        animate();
      }
    };
    images[index] = img;
  });

  const animate = () => {
    if (!isPaused.value) {
      ctx.clearRect(0, 0, width, height);

      avatars.forEach((avatar, index) => {
        avatar.angle += avatar.speed;
        if (avatar.angle > Math.PI * 2) {
          avatar.angle -= Math.PI * 2;
        }

        const x = centerX + avatar.radius * Math.cos(avatar.angle);
        const y = centerY + avatar.radius * Math.sin(avatar.angle);

        avatar.x = x;
        avatar.y = y;

        ctx.drawImage(images[index], x - 25, y - 25, 50, 50);
      });
    }

    requestAnimationFrame(animate);
  };

  animate();
});

// взаимодействие
const onCanvasClick = (event) => {
  const rect = canvas.value.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  avatars.forEach((avatar) => {
    const distance = Math.sqrt((avatar.x - clickX) ** 2 + (avatar.y - clickY) ** 2);
    if (distance < 25) {
      if (selectedAvatar.value === avatar) {
        resumeAnimation();
      } else {
        isPaused.value = true;
        selectedAvatar.value = avatar;
        tooltipStyle.value = {
          top: `${avatar.y + 30}px`,
          left: `${avatar.x + 30}px`,
        };
      }
    }
  });
};

const resumeAnimation = () => {
  isPaused.value = false;
  selectedAvatar.value = null;
};
</script>

<style scoped>
/* Основные стили */
.ellipses-container {
  position: relative;
  width: 100%;
  max-width: 1247px;
  height: auto;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
}

.ellipse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.17);
  z-index: -2;
}


.ellipse-1 {
  width: 100%;
  height: 100%;
}

.ellipse-2 {
  width: 87%;
  height: 87%;
}

.ellipse-3 {
  width: 72%;
  height: 72%;
}

.ellipse-4 {
  width: 59%;
  height: 59%;
}

.ellipse-5 {
  width: 45%;
  height: 45%;
}

.ellipse-6 {
  width: 31%;
  height: 31%;
  background-color: var(--Black50);
  z-index: -1;
}

.ellipse-light,
.ellipse-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 618px
}

.text-container {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

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

}

.canvas-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.tooltip {
  position: absolute;
  background-color: rgba(37, 37, 50, 0.77);
  color: var(--Grey2);
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
  z-index: 10;
}

.tooltip-text {
  font-size: 14px;
  margin-bottom: 8px;
}

.tooltip-author {
  font-size: 12px;
  border-bottom: 1px solid;
  border-image-source: var(--linear);
  border-image-slice: 1;
  width: fit-content;
}

/* кнопка взаимодействия */
.resume-button {
  margin-top: 10px;
  padding: 0;
  width: 130px;
  height: 40px;
  line-height: 42px;
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.resume-button span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: color 0.3s ease;
}

.resume-button:before,
.resume-button:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: var(--linear);
  transition: all 0.3s ease;
}

.resume-button:before {
  height: 0%;
  width: 2px;
}

.resume-button:after {
  width: 0%;
  height: 2px;
}

.resume-button:hover {
  background: transparent;
}

.resume-button:hover:before {
  height: 100%;
}

.resume-button:hover:after {
  width: 100%;
}

.resume-button span:hover {
  color: rgba(2, 126, 251, 1);
}

.resume-button span:before,
.resume-button span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: rgba(2, 126, 251, 1);
  transition: all 0.3s ease;
}

.resume-button span:before {
  width: 2px;
  height: 0%;
}

.resume-button span:after {
  width: 0%;
  height: 2px;
}

.resume-button span:hover:before {
  height: 100%;
}

.resume-button span:hover:after {
  width: 100%;
}


@media (max-width: 1200px) {
  .ellipses-container {
    max-width: 900px;
  }

  .caption-1 {
    font-size: 1.2rem;
  }

  .heading-2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 920px) {
  .ellipses-container {
    max-width: 800px;
  }
}

@media (max-width: 820px) {
  .ellipses-container {
    max-width: 700px;
  }
}

@media (max-width: 768px) {
  .ellipses-container {
    max-width: 600px;
  }

  .caption-1 {
    font-size: 1rem;
  }

  .heading-2 {
    font-size: 1.2rem;
  }

  .tooltip {
    max-width: 200px;
  }
}

@media (max-width: 620px) {
  .ellipses-container {
    max-width: 460px;
  }
}

@media (max-width: 480px) {
  .ellipses-container {
    max-width: 300px;
  }

  .caption-1 {
    font-size: 0.8rem;
  }

  .heading-2 {
    font-size: 1rem;
  }

  .tooltip {
    max-width: 150px;
  }

  .resume-button {
    width: 100px;
    height: 30px;
    line-height: 32px;
    font-size: 0.8rem;
  }
}
</style>