<script setup>
import MinivideoCompopent from '@/crosscomponents/MinivideoCompopent.vue';
import video from '../assets/img/minivideo.mp4'
import poster from '../assets/img/miniposter.png'
</script>
<template>
    <section>
        <div class="flex">
            <div class="bg-img" data-aos="fade-in"></div>
            <div class="left" data-aos="fade-up">
                <p class="custom-text" data-aos="fade-up" data-aos-delay="200">ABOUT US</p>
                <p class="heading-2" data-aos="fade-up" data-aos-delay="400">Bringing Your Vision to Life: Learn
                    About
                    VRNas</p>
                <p class="body-1" data-aos="fade-up" data-aos-delay="600">VRNas is a leading provider of VR services
                    for
                    education, entertainment, architecture,
                    and events. Our mission is to bring the power of virtual reality to everyone, allowing them to
                    explore new worlds, learn in new ways, and experience events in a whole new light.
                    Our team consists of experienced VR developers, designers, and technicians who are passionate
                    about
                    VR and dedicated to delivering the highest quality work. We use the latest VR hardware and
                    software
                    to create immersive, interactive experiences that are tailored to your specific needs.
                    From initial consultation to final delivery, we are committed to providing exceptional customer
                    service. Our goal is to ensure that you are completely satisfied with every aspect of your VR
                    experience.</p>
            </div>
            <div class="right">
                <div class="bacground" data-aos="zoom-in">
                    <img src="@/assets/img/Image7.png" alt="background image" data-aos="fade-up" />
                    <img src="@/assets/img/Light9.png" alt="background light" data-aos="fade-down" />
                    <MinivideoCompopent class="positionVideo" :videoSrc="video" :videoPoster="poster" />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.flex {
    display: flex;
    gap: 64px;
    margin-top: 200px;
}

.custom-text {
    margin-bottom: 12px;
    line-height: auto;
    font-family: 16px;
    font-weight: 400;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    /* Для поддержки в Safari */
    color: transparent;
    display: inline-block;
}

.heading-2 {
    color: var(--White);
    margin-bottom: 18px;
}

.body-1 {
    color: var(--Grey2);
    max-width: 625px;
}

/* левая часть */
.bacground {
    background: var(--Black50);
    width: 400px;
    height: 500px;
    position: relative;
}

img {
    position: absolute;
}

img:nth-child(1) {
    bottom: 0;
    right: 18px;
    z-index: 2;
}

img:nth-child(2) {
    bottom: -30%;
    right: -40%;
}

.positionVideo {
    position: absolute;
    top: 400px;
    right: 300px;
    z-index: 3;
}

.bg-img {
    background-image: url('/src/assets/img/bgimg.png');
    max-width: 990px;
    width: 100%;
    height: 721px;
    background-position: right;
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: -40%;
    z-index: -1;
}

section {
    overflow-x: clip;
}

@media(max-width:1250px) {

    section {
        width: 90%;
        margin: 0 auto;
    }
}

@media (max-width: 1200px) {}

@media (max-width: 1000px) {
    .flex {
        flex-direction: column;
        align-items: center;
    }

    .right {
        margin-top: 40px;
    }

}

@media (max-width: 470px) {


    .bacground {
        max-width: 350px;
    }

    img:nth-child(1) {
        width: 90%;
    }




    section {
        margin-bottom: 80px;
    }

}
</style>