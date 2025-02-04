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
                        <button>BACK HOME</button>
                    </RouterLink>
                </div>
                <div class="ellipse">
                    <img class="ellipse-light" src="@/assets/img/Light5.png" alt="background light">
                    <img class="ellipse-img" src="@/assets/img/Image5.png" alt="image">

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

button {
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
</style>












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
