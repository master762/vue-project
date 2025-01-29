<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// импорт библиотеки для появления блоков (AOS)
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",

  // Инициализация AOS
  mounted() {
    AOS.init({
      duration: 850, // Длительность анимации
      once: true, // Анимация срабатывает только один раз
    });
  },
};
</script>
<style>
/* общее */
body {
  margin: 0;
  padding: 0;
  background-color: var(--theme);
  font-family: 'Chakra Petch', sans-serif;
}

body {
  --theme: rgba(24, 24, 27, 1);
}

body.light-theme {
  --theme: #ffffff;
  --Grey1: #4a4a4a;
  --Grey2: #2a2a2a;
  --White: #000000;

}

a {
  text-decoration: none;

}

li {
  list-style-type: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

p {
  margin: 0;

}

button {
  cursor: pointer;
  transition: 0.3s ease;
  border: none;

}

button:active {
  transform: scale(0.93);
}

img {
  user-select: none;
  pointer-events: none;
}

/* анимация бордера */
@keyframes borderAnimation {
  0% {
    border-image-source: var(--linear);
  }

  50% {
    border-image-source: linear-gradient(45deg, #ff00ff, #00ffff);
  }

  100% {
    border-image-source: var(--linear);
  }
}

/* анимация заливки */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* декоративные эллементы страницы */
.clip {
  background-image: url('assets/img/Clip path group.png');
  width: 736px;
  height: 353px;
  background-position: right;
  background-size: cover;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

/* цвета */
:root {
  --linear: linear-gradient(90deg, #0CBAF1 0%, #E95CE9 100%);
  --Purple: #CA6AEB;
  --Blue: #19B5F1;
  --Success: #00C566;
  --Error: #FF4747;
  --Warning: #FACC15;
  --Black100: #18181B;
  --Black50: #252532;
  --Grey1: #B0B0B2;
  --Grey2: #D1D1D1;
  --White: #FFFFFF;

}

/* шрифты */
.navigation {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
}

.heading-1 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 64px;
  font-weight: 600;
  line-height: auto;
}

.heading-2 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
}

.heading-3 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 58px;
}

.heading-4 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
}

.heading-5 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: auto;
}

.heading-6 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: auto;
}

.heading-7 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: auto;
}

.heading-8 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: auto;
}

.heading-9 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: auto;
}

.heading-10 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
}

.heading-11 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: auto;
}

.heading-12 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: auto;
}

.body-1 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
}

.body-2 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
}

.body-3 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}

.body-4 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
}

.caption-1 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: auto;
}

.caption-2 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.caption-3 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 19px;
}

.button-1 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
}

.button-2 {
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
}

/* костыли */
header {
  height: 114px;
  margin-bottom: 87px;
}
</style>
