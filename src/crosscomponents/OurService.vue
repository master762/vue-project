<template>
    <section>
        <div class="adaptContainer">
            <div class="mainPosition">
                <img class="light" src="@/assets/img/Light3.png" alt="">
                <div class="OurServices">
                    <p class="caption-1" data-aos="fade-right">OUR SERVICE</p>
                    <p class="heading-2" data-aos="fade-right">Our Service</p>
                </div>
                <p class="body-1" data-aos="fade-left">We use the latest VR hardware and software to create high-quality
                    VR experiences that are accessible and affordable. Our goal is to provide exceptional customer
                    service and support, and our team is always available to answer any questions and address any
                    concerns you may have.</p>
            </div>
            <div class="cards">
                <div class="doubleCards">
                    <div class="card" data-aos="fade-up">
                        <img src="@/assets/img/Development.png" alt="">
                        <p class="header-7">VR Development</p>
                        <p class="body-2">From concept to creation, our team of VR developers will bring your vision to
                            life.</p>
                        <button class="hidenBtn"><span class="customText">LEARN MORE</span></button>
                    </div>
                    <div class="card" data-aos="fade-up">
                        <img src="@/assets/img/Design.png" alt="">
                        <p class="header-7">VR Design</p>
                        <p class="body-2">Our talented VR designers will create immersive and engaging environments that
                            will captivate your audience.</p>
                        <button class="hidenBtn"><span class="customText">LEARN MORE</span></button>
                    </div>
                </div>
                <div class="doubleCards">
                    <div class="card" data-aos="fade-up">
                        <img src="@/assets/img/Consulting.png" alt="">
                        <p class="header-7">VR Consulting</p>
                        <p class="body-2">Our VR consultants will work with you to ensure that your VR experience meets
                            your goals and exceeds your expectations.</p>
                        <button class="hidenBtn"><span class="customText">LEARN MORE</span></button>
                    </div>

                    <div class="card" data-aos="fade-up">
                        <img src="@/assets/img/Games.png" alt="">
                        <p class="header-7">VR Games</p>
                        <p class="body-2">We offer a wide selection of VR games that are suitable for players of all
                            ages and skill levels.</p>
                        <button class="hidenBtn"><span class="customText">LEARN MORE</span></button>
                    </div>
                </div>
                <div class="doubleCards">
                    <div class="card" data-aos="fade-up">
                        <img src="@/assets/img/Events.png" alt="">
                        <p class="header-7">VR Events</p>
                        <p class="body-2">Make your next event unforgettable with our VR event services.</p>
                        <button class="hidenBtn"><span class="customText">LEARN MORE</span></button>
                    </div>

                    <div class="card" data-aos="fade-up">
                        <img src="@/assets/img/Entertaiment.png" alt="">
                        <p class="header-7">VR Entertainment</p>
                        <p class="body-2">reate a VR escape room, or offer VR experiences at a theme park, we have the
                            expertise and experience to make it happen.</p>
                        <button class="hidenBtn"><span class="customText">LEARN MORE</span></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
/* шрифты */
.body-2 {
    color: var(--Grey1);
    max-width: 291px;
}

.header-7 {
    color: var(--White);
    margin-bottom: 12px;
}

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
}

.body-1 {
    color: var(--Grey2);
    max-width: 625px;
}

.mainPosition {
    display: flex;
    align-items: center;
    gap: 274px;

}

/* декорации сзади */
.light {
    position: absolute;
    z-index: -1;
    right: 0;
}

/* карточки */
.cards {
    display: flex;
    justify-content: center;
    gap: 26px;
}

.doubleCards img {
    padding-left: 32px;
}

.doubleCards p {
    padding-left: 32px;
}

.card {
    position: relative;
    width: 379px;
    height: 291px;
    background-color: var(--Black50);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 32px;
    transition: 0.5s;
    transition: 0.3s;

}

.card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom,
            rgba(37, 37, 50, 0) 0%,
            rgba(37, 37, 50, 0.91) 53%,
            rgba(37, 37, 50, 1) 100%);
    opacity: 0;

}

.card:hover::after {
    opacity: 1;
}

.card:hover {
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    cursor: pointer;
    transform: scale(1.025);
}

.cards img {
    margin-top: 38px;
    margin-bottom: 60px;
}

.doubleCards:nth-child(1) {
    margin-top: 46px;
}

.doubleCards:nth-child(2) {
    margin-top: 103px;
}

.doubleCards:nth-child(3) {
    margin-top: 181px;
}




/* кнопка */
.customText {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    color: var(--White);
}

.hidenBtn {
    width: 177px;
    height: 50px;
    padding: 18px 38px 18px 38px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid;
    animation: borderAnimation 2s infinite alternate;
    border-image-source: var(--linear);
    border-image-slice: 1;
    position: absolute;
    top: 83%;
    left: 50%;
    transform: translate(-50%, -50%);


    opacity: 0;
    z-index: 2;
}

.card:hover .hidenBtn {
    opacity: 1;

}

@media(max-width:1250px) {

    .adaptContainer {
        width: 90%;
        margin: 0 auto;
    }
}

@media (max-width: 1200px) {
    .card {
        width: 100%;
    }

    .doubleCards img {
        padding-left: 23px;
        padding-right: 23px;

    }

    .doubleCards p {
        padding-left: 23px;
        padding-right: 23px;
    }
}

@media (max-width: 1000px) {
    .card {
        height: fit-content;
        padding-bottom: 10px;

    }

    .mainPosition {
        gap: 200px;
    }
}

@media (max-width: 650px) {

    .OurServices {
        width: fit-content;
        margin: 0 auto;

    }

    .body-1 {
        width: 50%;
        margin: 0 auto;
    }

    .doubleCards {
        margin: 0 auto;
    }

    .doubleCards:nth-child(1) {
        margin-top: 40px;

    }

    .doubleCards:nth-child(2) {
        margin-top: 0px;
    }

    .doubleCards:nth-child(3) {
        margin-top: 0px;
    }

    .cards {
        flex-direction: column;
        gap: 0;
    }

    .mainPosition {
        display: block;

    }

}

@media (max-width: 430px) {}
</style>

<script setup>

</script>