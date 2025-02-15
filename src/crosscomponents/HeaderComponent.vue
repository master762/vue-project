<template>
  <div class="flex">
    <!-- Логотип -->
    <router-link to="/">
      <div class="logo" data-aos="zoom-in-right">
        <div class="shapes">
          <div class="shape blue"></div>
          <div class="shape purple"></div>
        </div>
        <div class="CompanyName">
          <p>VRNas</p>
        </div>
      </div>
    </router-link>

    <nav>
      <!-- Навигация -->
      <ul class="NavFlex" data-aos="zoom-in-up">
        <router-link to="/">
          <li :class="{ active: $route.path === '/' }" data-aos="fade-right" data-aos-delay="100">
            <p class="navigation">Home</p>
          </li>
        </router-link>
        <router-link to="/About">
          <li :class="{ active: $route.path === '/About' }" data-aos="fade-right" data-aos-delay="200">
            <p class="navigation">About us</p>
          </li>
        </router-link>
        <router-link to="/OurService">
          <li :class="{ active: $route.path === '/OurService' }" data-aos="fade-right" data-aos-delay="300">
            <p class="navigation">Service</p>
          </li>
        </router-link>

        <li data-aos="fade-right" data-aos-delay="400" @click="togglePageMenu">
          <p class="navigation">Page</p>
          <img src="@/assets/img/arrow.png" alt="arrow" class="arrow">
          <ul v-if="isPageMenuVisible" class="dropdown-menu">
            <router-link to="/Detailservice">
              <li>
                <p class="navigation">Detail Service</p>
              </li>
            </router-link>
            <router-link to="/PricingPlan">
              <li>
                <p class="navigation">Pricing Plan</p>
              </li>
            </router-link>
            <router-link to="/Ourteam">
              <li>
                <p class="navigation">Our Team</p>
              </li>
            </router-link>
            <router-link to="/Language">
              <li>
                <p class="navigation">Language</p>
              </li>
            </router-link>

          </ul>
        </li>
        <li data-aos="fade-right" data-aos-delay="500" @click="toggleBlogMenu">
          <p class="navigation">Blog</p>
          <img src="@/assets/img/arrow.png" alt="arrow" class="arrow">
          <ul v-if="isBlogMenuVisible" class="dropdown-menu">
            <router-link to="/Blog">
              <li>
                <p class="navigation">Blog</p>
              </li>
            </router-link>
            <router-link to="/DetailBlog">
              <li>
                <p class="navigation">Detail Blog</p>
              </li>
            </router-link>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Кнопка -->
    <div class="buttonContainer" data-aos="zoom-in-left">
      <button class="AdaptButton"><img src="@/assets/img/btn.png" alt="button"></button>
      <router-link to="/Contactus">
        <button class="CustomButton">
          <p class="button-2">Contact us</p>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isPageMenuVisible = ref(false);
const isBlogMenuVisible = ref(false);

const togglePageMenu = () => {
  isPageMenuVisible.value = !isPageMenuVisible.value;
  isBlogMenuVisible.value = false;

};

const toggleBlogMenu = () => {
  isBlogMenuVisible.value = !isBlogMenuVisible.value;
  isPageMenuVisible.value = false;
};
</script>

<style scoped>
/* стилизация элементов nav */
li {
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
}

/* доп стилизация */
li::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--linear);
  bottom: 2px;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.navigation:hover {
  background-image: var(--linear);
  -webkit-background-clip: text;
  /* Для Chrome, Safari */
  background-clip: text;
  color: transparent;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 31px;
  width: 100%;
}

/* логотип */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* фигуры */
.shapes {
  position: relative;
  width: 27px;
  height: 38px;
  perspective: 100px;
}

.shape {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: skew(-20deg) rotateY(-20deg) rotateX(30deg);
}

.shape.blue {
  background-color: var(--Purple);
}

.shape.purple {
  background-color: var(--Blue);
  transform: skew(-20deg) rotateY(-20deg) rotateX(30deg) translate(-20px, -20px);
}

/* текст */
.CompanyName {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  background-clip: text;
  -webkit-background-clip: text;
  /* Для поддержки в Safari */
  color: transparent;
  display: inline-block;
  display: flex;
}

/* навигация */
.NavFlex {
  display: flex;
  gap: 64px;
}

/* кнопка */
.CustomButton {
  width: 126px;
  height: 52px;
  padding: 12px 24px;
  border: 1px solid;
  border-image-source: var(--linear);
  border-image-slice: 1;
  background-color: rgba(255, 255, 255, 0);
  color: var(--White);
  animation: borderAnimation 2s infinite alternate;
}

/* стрелочки */
.NavFlex li {
  display: flex;
  align-items: center;
  /* Выравнивание по вертикали */
  gap: 8px;
  /* Расстояние между текстом и изображением */
}

.button-2 {
  white-space: nowrap;
}

.navigation {
  color: var(--White);
  white-space: nowrap;
  position: relative;
  user-select: none;
}

ul {
  padding: 0;
}

.AdaptButton {
  display: none;
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-image-source: var(--linear);
  border-image-slice: 1;
  background-color: rgba(255, 255, 255, 0);
  color: var(--White);
  animation: borderAnimation 2s infinite alternate;
}

/* Выпадающее меню */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 10px;
  z-index: 1000;
}

.dropdown-menu li {
  padding: 5px 0;

}


.active p {
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  /* Для поддержки в Safari */
  color: transparent;

}

@media (max-width: 1250px) {
  .flex {
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 1000px) {
  .NavFlex {
    gap: 20px;
  }
}

@media (max-width: 650px) {
  .CustomButton {
    display: none;
  }

  .AdaptButton {
    display: block;
  }

  .NavFlex {
    display: none;
  }
}
</style>