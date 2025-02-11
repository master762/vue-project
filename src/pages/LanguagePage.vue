<template>
    <!-- паралакс -->
    <div class="paralax">
        <div class="paralax-content">
            <h1>{{ Parallax }}</h1>
            <div class="mask"></div>
        </div>
    </div>
    <!-- перевод -->
    <div class="buttons">
        <button @click="changeLanguage('en')" :class="{ active: language === 'en' }"><span>En</span></button>
        <button @click="changeLanguage('ru')" :class="{ active: language === 'ru' }"><span>Ru</span></button>
    </div>
    <div class="container">
        <h2 class="heading-8">{{ Message }}</h2>
    </div>
    <!-- 3д  -->

    <div class="container">
        <model-viewer id="viewer" src="/3dVr.glb" alt="3D модель" auto-rotate camera-controls
            arenvironment-image="neutral" shadow-intensity="1"
            style="background-color: var(--Black50); border-radius: 10px; margin-top: 80px;">
        </model-viewer>
        <div class="color-buttons">
            <button class="custom-button" @click="changeColor('black')">{{ buttonBlack }}</button>
            <button class="custom-button" @click="changeColor('white')">{{ buttonWhite }}</button>
            <button class="custom-button" @click="changeColor('yellow')">{{ buttonYellow }}</button>
            <button class="custom-button" @click="changeColor('green')">{{ buttonGreen }}</button>
            <button class="custom-button" @click="changeColor('purple')">{{ buttonPurple }}</button>
        </div>
    </div>
    <!-- карточка -->
    <div class="container-cards">

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">
                        {{ cardhoverTitle }}
                    </p>
                    <div class="text">
                        {{ cardhoverFront }}
                    </div>
                </div>
                <div class="flip-card-back">
                    <p>{{ cardhoverBack }}</p>
                    <div class="main">
                        <div class="up">
                            <button class="card1">
                                <img src="@/assets/img/social.png" alt="twitter" />
                            </button>
                            <button class="card2">
                                <img src="@/assets/img/social1.png" alt="facebook" />
                            </button>
                        </div>
                        <div class="down">
                            <button class="card3">
                                <img src="@/assets/img/social2.png" alt="instagram" />
                            </button>
                            <button class="card4">
                                <img src="@/assets/img/social3.png" alt="github" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-border">
            <h2>{{ card }}</h2>
        </div>
    </div>

</template>
<style scoped>
/* вторая карточка */

.card-border {
    width: 300px;
    height: 400px;
    background: black;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
}

.card-border h2 {
    z-index: 1;
    color: white;
}

.card-border::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: cardBorder 3s linear infinite;
    transition: all 0.2s linear;
}

@keyframes cardBorder {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.card-border::after {
    content: '';
    position: absolute;
    background: black;
    ;
    inset: 5px;
    border-radius: 15px;
}




/* соц сети */

.main {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 10px;
}

.up,
.down {
    display: flex;
    flex-direction: row;
    gap: 7px;
}

.card1,
.card2,
.card3,
.card4 {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    transition: .2s ease-in-out;
}

.card1 {
    border-radius: 90px 5px 5px 5px;
}

.card2 {
    border-radius: 5px 90px 5px 5px;
}

.card3 {
    border-radius: 5px 5px 5px 90px;
}

.card4 {
    border-radius: 5px 5px 90px 5px;
}

.card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #cc39a4;
}

.card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03A9F4;
}

.card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
}

.card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
}

/* карточка */
.title {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: yellow;

}

.text {
    color: white;
    max-width: 80%;
    margin: 0 auto;
}

.container-cards {
    margin-top: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 80px;
}


.flip-card {
    width: 300px;
    height: 400px;
    perspective: 1000px;
}



.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 5px;



}

.flip-card-front {
    background: var(--linear);
    background-size: 200%;
    animation: gradient 3s linear infinite;
    color: black;
}

.flip-card-back {
    background: linear-gradient(90deg, #F19A0C 0%, #4AE95C 100%);
    background-size: 200%;
    animation: gradient 3s linear infinite;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: end;
    flex-wrap: wrap;

}

/* паралакс */
h1 {
    margin: 0;
    color: white;
}

.paralax {
    background-image: url(/src/assets/img/paralax.png);
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    z-index: -1;
}

.paralax-content {
    z-index: 1;
}

/* текст */
.heading-8 {
    color: white;
}

.buttons {
    display: flex;
    gap: 10px;
    position: fixed;
    left: 50px;
    top: 90%;
    z-index: 3;
}

span {
    color: white;
}

button {
    width: 50px;
    height: 50px;
    padding: 0;
    background: rgba(108, 0, 231, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

button.active {
    border-bottom: 1px solid rgb(255, 30, 0);
}

/* 3д */
.color-buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
}

.custom-button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: #100720;
    transition: 0.1s;
}

.custom-button::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2%);
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
}

.custom-button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2%);
    transition: 0.5s;
}

.custom-button:nth-child(1) {
    background: #100720;
}

.custom-button:nth-child(1)::after {
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2%);
}


.custom-button:nth-child(2) {
    background: #f0f0f0;
    color: black;
}

.custom-button:nth-child(2)::after {
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(245, 245, 245) 17.8%, rgb(233, 233, 233) 100.2%);
}

.custom-button:nth-child(3) {
    background: #ffcc00;
}

.custom-button:nth-child(3)::after {
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 218, 0, 1) 17.8%, rgb(252, 206, 0) 100.2%);
}


.custom-button:nth-child(4) {
    background: #2c8c2d;
}

.custom-button:nth-child(4)::after {
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(0, 255, 0, 1) 17.8%, rgba(0, 255, 0, 1) 100.2%);
}


.custom-button:nth-child(5) {
    background: #7b4e8e;
}

.custom-button:nth-child(5)::after {
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(138, 43, 226, 1) 17.8%, rgba(186, 85, 211, 1) 100.2%);
}

model-viewer {
    width: 100%;
    height: 500px;
}
</style>


<script setup>
import '@google/model-viewer';
import { ref, computed } from 'vue'
// 3д 
// Определенные цвета rgb
const colors = {
    black: [0, 0, 0, 1],
    white: [1, 1, 1, 1],
    yellow: [1, 1, 0, 1],
    green: [0, 1, 0, 1],
    purple: [0.5, 0, 0.5, 1],

};

// смена цвета
const changeColor = (colorName) => {
    const model = document.getElementById("viewer");

    if (model && model.model) {
        const materialIndexes = [1, 2, 3, 4, 5, 7, 8];
        materialIndexes.forEach((index) => {
            if (model.model.materials[index]) {
                model.model.materials[index].pbrMetallicRoughness.setBaseColorFactor(colors[colorName]);
            }
        });
    }
};
// перевод
const language = ref('en')

const changeLanguage = (lang) => {
    language.value = lang
}

const messages = {
    en: {
        text: 'However, we should not forget that consulting with a wide range of assets requires us to analyze the directions of progressive development. Comrades! Consulting with a broad asset is an interesting experiment to test the development model. Similarly, the established structure of the organization provides a wide range of (specialists) to participate in the formation of appropriate conditions for activation. Ideological considerations of the highest order, as well as constant quantitative growth and the scope of our activity, largely determine the creation of a personnel training system that meets urgent needs. On the other hand, the current structure of the organization is an interesting experiment to test the directions of progressive development. On the other hand, the constant information and propaganda support of our activities ensures that a wide range of (specialists) participate in the formation of a personnel training system that meets urgent needs. Comrades! the beginning of daily work on the formation of a position contributes to the preparation and implementation of areas of progressive development.',
        parallax: 'This is the parallax effect.',
        buttonBlack: 'Black',
        buttonWhite: 'White',
        buttonYellow: 'Yellow',
        buttonGreen: 'Green',
        buttonPurple: 'Purple',
        cardhoverTitle: 'Hover me',
        cardhoverFront: 'The fish text website will help a designer, layout designer, and webmaster generate several paragraphs of more or less meaningful fish text in Russian, and a novice speaker will hone the skill of public speaking at home.',
        cardhoverBack: 'Comrades! The further development of various forms of activity contributes to the preparation and implementation of appropriate activation conditions.',
        card: 'CARD'
    },
    ru: {
        text: 'Не следует, однако забывать, что консультация с широким активом требуют от нас анализа направлений прогрессивного развития. Товарищи! консультация с широким активом представляет собой интересный эксперимент проверки модели развития. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! начало повседневной работы по формированию позиции способствует подготовки и реализации направлений прогрессивного развития.',
        parallax: 'Это паралакс-эффект.',
        buttonBlack: 'Чёрный',
        buttonWhite: 'Белый',
        buttonYellow: 'Жёлтый',
        buttonGreen: 'Зеленый',
        buttonPurple: 'Пурпурный',
        cardhoverTitle: 'наведи на меня',
        cardhoverFront: 'Сайт рыба текст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. ',
        cardhoverBack: 'Товарищи! дальнейшее развитие различных форм деятельности способствует подготовки и реализации соответствующий условий активизации.',
        card: 'КАРТОЧКА'
    },


}

const Message = computed(() => {
    return messages[language.value].text
})

const Parallax = computed(() => {
    return messages[language.value].parallax
})
const buttonBlack = computed(() => {
    return messages[language.value].buttonBlack
})
const buttonWhite = computed(() => {
    return messages[language.value].buttonWhite
})
const buttonYellow = computed(() => {
    return messages[language.value].buttonYellow
})
const buttonGreen = computed(() => {
    return messages[language.value].buttonGreen
})
const buttonPurple = computed(() => {
    return messages[language.value].buttonPurple
})
const cardhoverTitle = computed(() => {
    return messages[language.value].cardhoverTitle
})
const cardhoverFront = computed(() => {
    return messages[language.value].cardhoverFront
})
const cardhoverBack = computed(() => {
    return messages[language.value].cardhoverBack
})
const card = computed(() => {
    return messages[language.value].card
})

</script>
