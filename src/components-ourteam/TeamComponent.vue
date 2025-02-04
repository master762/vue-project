<template>
    <section>
        <p class="custom-txt">OUR TEAM</p>
        <div class="flex">
            <p class="heading-2">Our Professionals Team</p>
            <button class="btn"><span class="button-1">SEE ALL</span></button>
        </div>
        <div class="images">
            <!-- Карточки с изображениями, добавлены AOS анимации -->
            <div class="image-card" data-aos="fade-up" data-aos-duration="1000">
                <a href="/">
                    <div class="Inst"><img src="@/assets/img/inst.png" alt="image inst"></div>
                </a>
                <a href="/">
                    <div class="face"><img src="@/assets/img/facebook.png" alt="image facebook"></div>
                </a>
                <a href="/">
                    <div class="twit"><img src="@/assets/img/twitter.png" alt="image twitter"></div>
                </a>
                <img src="@/assets/img/team1.png" alt="worker">
                <div class="text">
                    <p class="heading-10">Bondan Prabowo</p>
                    <p class="body-4">CEO</p>
                </div>
            </div>

            <div class="image-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <a href="/">
                    <div class="Inst"><img src="@/assets/img/inst.png" alt="image inst"></div>
                </a>
                <a href="/">
                    <div class="face"><img src="@/assets/img/facebook.png" alt="image facebook"></div>
                </a>
                <a href="/">
                    <div class="twit"><img src="@/assets/img/twitter.png" alt="image twitter"></div>
                </a>
                <img src="@/assets/img/team2.png" alt="worker">
                <div class="text">
                    <p class="heading-10">Bayu Aji</p>
                    <p class="body-4">CBQ</p>
                </div>
            </div>

            <div class="image-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <a href="/">
                    <div class="Inst"><img src="@/assets/img/inst.png" alt="image inst"></div>
                </a>
                <a href="/">
                    <div class="face"><img src="@/assets/img/facebook.png" alt="image facebook"></div>
                </a>
                <a href="/">
                    <div class="twit"><img src="@/assets/img/twitter.png" alt="image twitter"></div>
                </a>
                <img src="@/assets/img/team3.png" alt="worker">
                <div class="text">
                    <p class="heading-10">Ayung Brandon</p>
                    <p class="body-4">VRI Development</p>
                </div>
            </div>

            <div class="image-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <a href="/">
                    <div class="Inst"><img src="@/assets/img/inst.png" alt="image inst"></div>
                </a>
                <a href="/">
                    <div class="face"><img src="@/assets/img/facebook.png" alt="image facebook"></div>
                </a>
                <a href="/">
                    <div class="twit"><img src="@/assets/img/twitter.png" alt="image twitter"></div>
                </a>
                <img src="@/assets/img/team5.png" alt="worker">
                <div class="text">
                    <p class="heading-10">Aldo Boy</p>
                    <p class="body-4">3D Designer</p>
                </div>
            </div>

            <div class="image-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                <a href="/">
                    <div class="Inst"><img src="@/assets/img/inst.png" alt="image inst"></div>
                </a>
                <a href="/">
                    <div class="face"><img src="@/assets/img/facebook.png" alt="image facebook"></div>
                </a>
                <a href="/">
                    <div class="twit"><img src="@/assets/img/twitter.png" alt="image twitter"></div>
                </a>
                <img src="@/assets/img/team6.png" alt="worker">
                <div class="text">
                    <p class="heading-10">Aril Laso</p>
                    <p class="body-4">UI / UX Designer</p>
                </div>
            </div>

            <div class="image-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                <a href="/">
                    <div class="Inst"><img src="@/assets/img/inst.png" alt="image inst"></div>
                </a>
                <a href="/">
                    <div class="face"><img src="@/assets/img/facebook.png" alt="image facebook"></div>
                </a>
                <a href="/">
                    <div class="twit"><img src="@/assets/img/twitter.png" alt="image twitter"></div>
                </a>
                <img src="@/assets/img/team7.png" alt="worker ">
                <div class="text">
                    <p class="heading-10">Beni Barak</p>
                    <p class="body-4">3D Artist</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.heading-10 {
    color: var(--White);
}

.body-4 {
    color: var(--Grey1);
}

.heading-2 {
    color: var(--White);
}

.button-1 {
    color: var(--White);
}

.custom-txt {
    margin-top: 150px;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: auto;
    letter-spacing: 14%;
    font-weight: 500;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 41px;
}

.btn {
    width: 140px;
    height: 50px;
    padding: 18px 38px 18px 38px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    animation: borderAnimation 2s infinite alternate;
}

/* картинки */
img {
    width: 355px;
    padding: 9px;
}

.image-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(37, 37, 50, 0.6);
    width: 379px;
    height: 503px;
    position: relative;

}

.image-card:hover {
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    animation: borderAnimation 2s infinite alternate;
}

.images {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
}

.text {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
}

section {
    margin-bottom: 152px;
}

.twit,
.face,
.Inst {
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background:
        linear-gradient(#252532, #252532) padding-box,
        linear-gradient(90deg, #0CBAF1 0%, #E95CE9 100%) border-box;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s;
}

.image-card:hover .twit {
    opacity: 1;
}

.image-card:hover .face {
    opacity: 1;
}

.image-card:hover .Inst {
    opacity: 1;
}


.Inst img {
    width: 22px;
    height: 22px;
}

.face img {
    width: 11px;
    height: 20px;
}

.twit img {
    width: 18px;
    height: 14px;
}

.twit {
    bottom: 86px;
    left: 237px;
}

.face {
    bottom: 86px;
    left: 167px;
}

.Inst {
    bottom: 86px;
    left: 97px;
}
</style>
