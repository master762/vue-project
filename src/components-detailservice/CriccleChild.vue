<template>
    <div class="content">
        <div class="title-container" data-aos="fade-up">
            <p class="caption-1">SERVICE</p>
            <p class="custom-title">VR Design</p>
        </div>
        <p class="body-1" style="margin-bottom: 38px;" data-aos="fade-up" data-aos-delay="300">
            At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that
            transport your audience to a whole new world. Our team of experienced designers and developers work together
            to create VR experiences that are not only visually stunning but also interactive and user-friendly.
        </p>
        <p class="body-1" data-aos="fade-up" data-aos-delay="400">
            We take a collaborative approach to our VR design process, working closely with you to understand your
            specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a
            game, we can help you bring your ideas to life.
        </p>
        <div class="points">
            <p class="body-3" style="margin-bottom: 24px;" data-aos="fade-up" data-aos-delay="500">Our VR design
                services include:</p>
            <div class="flex" data-aos="fade-up" data-aos-delay="600">
                <img src="@/assets/img/accept.png" alt="">
                <p class="body-3">Concept development and ideation</p>
            </div>
            <div class="flex" data-aos="fade-up" data-aos-delay="700">
                <img src="@/assets/img/accept.png" alt="">
                <p class="body-3">Storyboarding and scriptwriting</p>
            </div>
            <div class="flex" data-aos="fade-up" data-aos-delay="800">
                <img src="@/assets/img/accept.png" alt="">
                <p class="body-3">3D modeling and animation</p>
            </div>
            <div class="flex" data-aos="fade-up" data-aos-delay="900">
                <img src="@/assets/img/accept.png" alt="">
                <p class="body-3">User interface design and development</p>
            </div>
            <div class="flex" data-aos="fade-up" data-aos-delay="1000">
                <img src="@/assets/img/accept.png" alt="">
                <p class="body-3">Sound design and effects</p>
            </div>
            <div class="flex" data-aos="fade-up" data-aos-delay="1100">
                <img src="@/assets/img/accept.png" alt="">
                <p class="body-3">Quality assurance testing and optimization</p>
            </div>
        </div>
        <p class="body-1" style="margin-bottom: 38px;" data-aos="fade-up" data-aos-delay="1200">
            We use the latest VR technologies and software to create immersive experiences that are fully customized to
            your brand and message. We understand that every project is unique, and we work closely with you to ensure
            that we create a VR experience that perfectly matches your vision.
        </p>
        <p class="body-1" data-aos="fade-up" data-aos-delay="1300">
            At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate,
            and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR
            design services.
        </p>
        <button class="custom-btn" data-aos="fade-up" data-aos-delay="1400"><span>CONTACT US</span></button>
    </div>
</template>




<style scoped>
.title-container {
    display: flex;
    flex-direction: column;
    align-items: center;

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

.custom-title {
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -0.5%;
    color: var(--White);
    margin-bottom: 16px;
}

.body-1 {
    color: var(--Grey2);
}

.body-3 {
    color: var(--White);
}


/* позиционирование */
.content {
    max-width: 625px;
}

.points {
    max-width: 431px;
    width: 100%;
    padding-left: 32px;
    padding-top: 30px;
    padding-bottom: 35px;
    background-color: var(--Black50);
    border: 1px solid;
    border-image-source: linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    border-image-slice: 1;
    margin: 54px auto 32px auto;
}

.flex {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
}

.flex:last-child {
    margin-bottom: 0;
}



.flex img {
    width: 16px;
    height: 16px;
    margin-right: 12px;
}

span {
    color: var(--White);
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 1.5px;
}

.custom-btn {
    max-width: 174px;
    width: 100%;
    background: var(--linear);
    background-size: 200%;
    animation: gradient 3s linear infinite;
    height: 50px;
    margin: 32px auto auto auto;
    display: block;
}
</style>