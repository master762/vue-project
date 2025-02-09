<script>
import HeaderComponent from "../crosscomponents/HeaderComponent.vue";
import FooterComponent from "../crosscomponents/FooterComponent.vue";
import ThemeSwitcher from "../crosscomponents/ThemeSwitcher.vue";
export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        ThemeSwitcher,
        FooterComponent,
    },
};
</script>
<template>
    <router-view />
    <ThemeSwitcher />
    <div class="container">
        <div class="clip"></div>
        <header>
            <HeaderComponent />
        </header>
    </div>
    <main>
        <section>
            <div class="items container">
                <div class="width">
                    <p class="caption-1">404 ERROR</p>
                    <p class="heading-2">Page Not Found</p>

                    <p class="body-1">Oops! It looks like the page you were looking for is not here. Here are some
                        possible
                        reasons why:
                    </p>

                    <ul>
                        <li class="body-1">The page may have been moved or deleted.</li>
                        <li class="body-1">You may have mistyped the URL.</li>
                        <li class="body-1">There may be a temporary problem with our server.</li>
                    </ul>
                    <p class="body-1">You can try the following options to find what you're looking for:</p>
                    <ul>
                        <li class="body-1">Check the URL for typos or errors and try again.</li>
                        <li class="body-1">Go back to our homepage and browse from there.</li>
                    </ul>
                    <p class="body-1">If you believe there's an issue with our website, please contact us using the
                        information provided on
                        our contact page.</p>
                    <RouterLink to="/">
                        <button class="btn">BACK HOME</button>
                    </RouterLink>
                </div>
                <div class="ellipse">
                    <img class="ellipse-light" src="@/assets/img/Light5.png" alt="background light">
                    <img class="ellipse-img" src="@/assets/img/Image5.png" alt="image">


                </div>
            </div>
        </section>
        <section class="container">
            <div>
                <model-viewer id="viewer" src="/3dVr.glb" alt="3D модель" auto-rotate camera-controls
                    arenvironment-image="neutral" shadow-intensity="1"
                    style="background-color: var(--Black50); border-radius: 10px; margin-top: 80px;">
                </model-viewer>
                <div class="color-buttons">
                    <button class="custom-button" @click="changeColor('black')">Black</button>
                    <button class="custom-button" @click="changeColor('white')">White</button>
                    <button class="custom-button" @click="changeColor('yellow')">Yellow</button>
                    <button class="custom-button" @click="changeColor('green')">Green</button>
                    <button class="custom-button" @click="changeColor('purple')">Purple</button>
                </div>


            </div>
        </section>
    </main>
    <div class="container">
        <footer>
            <FooterComponent />
        </footer>
    </div>

</template>

<script setup>
import '@google/model-viewer';

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
</script>
<style scoped>
.caption-1 {
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
}

.heading-2 {
    color: var(--White);
    margin-top: 12px;
    margin-bottom: 16px;
}

.btn {
    background: var(--linear);
    background-size: 200%;
    animation: gradient 3s linear infinite;
    color: var(--White);
    max-width: 168px;
    width: 100%;
    height: 50px;
    margin-top: 24px;
}

.body-1 {
    color: var(--Grey2);
}

li {
    list-style-type: disc;
}

.width {
    max-width: 625px;
}

.items {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.ellipse {
    width: 410px;
    height: 410px;
    background-color: var(--Black50);
    border-radius: 50%;
    position: relative;
    z-index: -2;
}

.ellipse img {
    position: absolute;

}

.ellipse img:nth-child(1) {
    top: -100px;
    left: -300px;
    z-index: -1;
}

.ellipse img:nth-child(2) {
    bottom: -46px;
    left: -100px;
}

section {
    overflow-x: clip;
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

@media(max-width:1250px) {

    section {
        width: 90%;
        margin: 0 auto;
    }
}

@media (max-width: 1000px) {
    .color-buttons {
        width: 90%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin: 40px auto auto auto;
    }
}

@media (max-width: 400px) {
    model-viewer {
        height: 200px;
    }

    .custom-button {
        width: 80%;
    }
}
</style>
