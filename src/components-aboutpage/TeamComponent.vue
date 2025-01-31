<template>
    <section>
        <!-- заголовки, кнопка -->
        <p class="custom-txt" data-aos="fade-up">OUR TEAM</p>
        <div class="flex" data-aos="fade-up">
            <p class="heading-2">Our Professionals Team</p>
            <button class="btn" data-aos="fade-up" data-aos-delay="200"><span class="button-1">SEE ALL</span></button>
        </div>
        <div class="images">
            <div class="image-card" data-aos="fade-up" data-aos-delay="400">
                <img src="@/assets/img/team1.png" alt="">
                <div class="text">
                    <p class="heading-10">Bondan Prabowo</p>
                    <p class="body-4">CEO</p>
                </div>
            </div>
            <div class="image-card" data-aos="fade-up" data-aos-delay="600">
                <img src="@/assets/img/team2.png" alt="">
                <div class="text">
                    <p class="heading-10">Bayu Aji</p>
                    <p class="body-4">CBQ</p>
                </div>
            </div>
            <div class="image-card" data-aos="fade-up" data-aos-delay="800">
                <img src="@/assets/img/team3.png" alt="">
                <div class="text">
                    <p class="heading-10">Ayung Brandon</p>
                    <p class="body-4">VRI Development</p>
                </div>
            </div>
            <div class="image-card" data-aos="fade-up" data-aos-delay="1000">
                <img src="@/assets/img/team4.png" alt="">
                <div class="text">
                    <p class="heading-10">Aril Laao</p>
                    <p class="body-4">VRI Artist</p>
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
    width: 274px;
    padding: 9px;

}

.image-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(37, 37, 50, 0.6);
    width: 293px;
    height: 389px;
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
    gap: 18px;
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
</style>

<script setup>
// Скрипт не требуется, так как данные статичны
</script>