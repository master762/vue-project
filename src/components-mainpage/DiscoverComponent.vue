<template>
    <section data-aos="fade" data-aos-delay="300">
        <div class="center">
            <p class="caption-1">OUR TRUSTED PARTNERS</p>
            <p class="heading-2">Discover the Companies We Work With</p>
        </div>
        <!-- полуэллипсы -->
        <div class="ellipses-container">
            <div class="ellipse ellipse-1">
                <!-- компании -->
                <div class="company"><img src="@/assets/img/company1.png" alt=""></div>
                <div class="company"><img src="@/assets/img/company2.png" alt=""></div>
                <div class="company"><img src="@/assets/img/company3.png" alt=""></div>
                <div class="company"><img src="@/assets/img/company4.png" alt=""></div>
                <div class="company"><img src="@/assets/img/company5.png" alt=""></div>
                <div class="company"><img src="@/assets/img/company6.png" alt=""></div>
                <div class="company"><img src="@/assets/img/company7.png" alt=""></div>
            </div>
            <div class="ellipse ellipse-2"></div>
            <div class="ellipse ellipse-3"></div>
            <div class="ellipse ellipse-4"></div>
            <div class="ellipse ellipse-5"></div>

            <!-- Центральные элементы -->
            <img class="ellipse-light" src="@/assets/img/Light5.png" alt="">
            <img class="ellipse-img" src="@/assets/img/Image6.png" alt="">
        </div>
    </section>
</template>

<style scoped>
.caption-1 {
    margin-bottom: 12px;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    /* Для поддержки в Safari */
    color: transparent;
    display: inline-block;

}

.heading-2 {
    color: var(--White);
}

.center {
    text-align: center;
}

/* полуэлипсы */
.ellipses-container {
    position: relative;
    top: 360px;
    width: 1054px;
    height: 741px;
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

.ellipse-1,
.ellipse-2,
.ellipse-3,
.ellipse-4 {
    clip-path: polygon(0% 52%, 100% 52%, 100% 0%, 0% 0%);
}

.ellipse-1 {
    width: 1054px;
    height: 1054px;
    position: relative;
}

.ellipse-2 {
    width: 917px;
    height: 917px;
    background: var(--linear);
    -webkit-mask: radial-gradient(circle, transparent 70.5%, black 50%);
    mask: radial-gradient(circle, transparent 70.5%, black 50%);
}

.ellipse-3 {
    width: 760px;
    height: 760px;
}

.ellipse-4 {
    width: 622px;
    height: 622px;
}

.ellipse-5 {
    width: 452px;
    height: 452px;
    background-color: var(--Black50);
}

/* картинки в центре */
.ellipse-light {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
}

.ellipse-img {
    position: absolute;
    top: 43.5%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* лого компаний, позиционирование */
.company {
    width: 102px;
    height: 102px;
    background: rgba(37, 37, 50, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

.company:nth-child(1) {
    top: 439px;
    left: 15px;
}

.company:nth-child(2) {
    top: 252px;
    left: 72px;
}

.company:nth-child(3) {
    top: 90px;
    left: 241px;
}

.company:nth-child(4) {
    top: 18px;
    left: 476px;
}

.company:nth-child(5) {
    top: 90px;
    right: 241px;
}

.company:nth-child(6) {
    top: 252px;
    right: 71px;
}

.company:nth-child(7) {
    top: 439px;
    right: 15px;
}


@media (max-width: 1200px) {

    .ellipse-1,
    .ellipse-2,
    .ellipse-3,
    .ellipse-4 {
        clip-path: polygon(0% 54%, 100% 54%, 100% 0%, 0% 0%);
    }

    .heading-2 {
        margin-bottom: -200px;
    }

    .ellipses-container {
        width: 800px;
        height: 600px;
    }

    .ellipse-1 {
        width: 800px;
        height: 800px;
    }

    .ellipse-2 {
        width: 700px;
        height: 700px;
    }

    .ellipse-3 {
        width: 600px;
        height: 600px;
    }

    .ellipse-4 {
        width: 500px;
        height: 500px;
    }

    .ellipse-5 {
        width: 400px;
        height: 400px;
    }

    .company {
        width: 80px;
        height: 80px;
    }

    .company:nth-child(1) {
        top: 350px;
        left: 10px;
    }

    .company:nth-child(2) {
        top: 200px;
        left: 50px;
    }

    .company:nth-child(3) {
        top: 70px;
        left: 180px;
    }

    .company:nth-child(4) {
        top: 10px;
        left: 360px;
    }

    .company:nth-child(5) {
        top: 70px;
        right: 180px;
    }

    .company:nth-child(6) {
        top: 200px;
        right: 50px;
    }

    .company:nth-child(7) {
        top: 350px;
        right: 10px;
    }

    .ellipse-img {
        width: 76.5%;
    }

    .ellipse-light {
        width: 76.5%;
    }
}

@media (max-width: 1000px) {


    .company img {
        width: 80%;
    }

    .ellipses-container {
        width: 600px;
        height: 450px;
    }

    .ellipse-1 {
        width: 600px;
        height: 600px;
    }

    .ellipse-2 {
        width: 500px;
        height: 500px;
    }

    .ellipse-3 {
        width: 400px;
        height: 400px;
    }

    .ellipse-4 {
        width: 300px;
        height: 300px;
    }

    .ellipse-5 {
        width: 200px;
        height: 200px;
    }

    .company {
        width: 60px;
        height: 60px;
    }

    .company:nth-child(1) {
        top: 250px;
        left: 20px;
    }

    .company:nth-child(2) {
        top: 150px;
        left: 45px;
    }

    .company:nth-child(3) {
        top: 60px;
        left: 140px;
    }

    .company:nth-child(4) {
        top: 20px;
        left: 275px;
    }

    .company:nth-child(5) {
        top: 60px;
        right: 140px;
    }

    .company:nth-child(6) {
        top: 150px;
        right: 45px;
    }

    .company:nth-child(7) {
        top: 250px;
        right: 20px;
    }

    .ellipse-img {
        width: 55%;
    }

    .ellipse-light {
        width: 55%;
    }
}

@media (max-width: 650px) {
    .heading-2 {
        margin-bottom: -300px;
    }

    .ellipses-container {
        width: 400px;
        height: 300px;
    }

    .ellipse-1 {
        width: 400px;
        height: 400px;
    }

    .ellipse-2 {
        width: 350px;
        height: 350px;
    }

    .ellipse-3 {
        width: 300px;
        height: 300px;
    }

    .ellipse-4 {
        width: 250px;
        height: 250px;
    }

    .ellipse-5 {
        width: 150px;
        height: 150px;
    }

    .company {
        width: 40px;
        height: 40px;
    }

    .company:nth-child(1) {
        top: 150px;
        left: 5px;
    }

    .company:nth-child(2) {
        top: 100px;
        left: 20px;
    }

    .company:nth-child(3) {
        top: 30px;
        left: 80px;
    }

    .company:nth-child(4) {
        top: 5px;
        left: 180px;
    }

    .company:nth-child(5) {
        top: 30px;
        right: 80px;
    }

    .company:nth-child(6) {
        top: 100px;
        right: 20px;
    }

    .company:nth-child(7) {
        top: 150px;
        right: 5px;
    }

    .caption-1 {
        font-size: 1rem;
    }

    .heading-2 {
        font-size: 1.5rem;
    }

    .ellipse-img {
        width: 60%;
    }

    .ellipse-light {
        width: 60%;
    }
}

@media (max-width: 430px) {
    .ellipses-container {
        width: 300px;
        height: 200px;
    }

    .ellipse-1 {
        width: 300px;
        height: 300px;
    }

    .ellipse-2 {
        width: 250px;
        height: 250px;
    }

    .ellipse-3 {
        width: 200px;
        height: 200px;
    }

    .ellipse-4 {
        width: 150px;
        height: 150px;
    }

    .ellipse-5 {
        width: 100px;
        height: 100px;
    }

    .company {
        width: 30px;
        height: 30px;
    }

    .company:nth-child(1) {
        top: 130px;
        left: 8px;
    }

    .company:nth-child(2) {
        top: 70px;
        left: 25px;
    }

    .company:nth-child(3) {
        top: 25px;
        left: 70px;
    }

    .company:nth-child(4) {
        top: 5px;
        left: 135px;
    }

    .company:nth-child(5) {
        top: 25px;
        right: 70px;
    }

    .company:nth-child(6) {
        top: 70px;
        right: 25px;
    }

    .company:nth-child(7) {
        top: 130px;
        right: 8px;
    }

    .caption-1 {
        font-size: 0.8rem;
    }

    .heading-2 {
        font-size: 1.2rem;
    }

    .ellipse-img {
        width: 55%;
    }

    .ellipse-light {
        width: 55%;
    }
}
</style>

<script setup>
</script>