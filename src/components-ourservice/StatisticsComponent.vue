<template>
    <section>
        <div class="flex">
            <div class="inf" data-aos="fade-up">
                <p class="caption-1">HAPPY CLIENTS</p>
                <p class="heading-2">123k+</p>
            </div>
            <div class="inf" data-aos="fade-up" data-aos-delay="200">
                <p class="caption-1">PROJECT COMPLETE</p>
                <p class="heading-2">300k+</p>
                <img src="@/assets/img/Bg.png" alt="background image">
            </div>
            <div class="inf" data-aos="fade-up" data-aos-delay="400">
                <p class="caption-1">YEARS EXPERIENCE</p>
                <p class="heading-2">10+</p>
            </div>
        </div>
    </section>
</template>


<style scoped>
.flex {
    display: flex;
    text-align: center;
}

.inf {
    flex: 1;
}

.inf:nth-child(2) {
    position: relative;
}

.inf:nth-child(2) {
    margin-left: 200px;
    margin-right: 200px;
}

.caption-1 {
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    margin-bottom: 12px;
}

section {
    margin-top: 150px;
}

.heading-2 {
    color: var(--White);
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
</style>