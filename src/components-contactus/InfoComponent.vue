<template>
    <section>
        <div class="items">
            <a class="item" href="mailto:Support@VRNas.com" target="_blank" data-aos="fade-up" data-aos-duration="1000">
                <img src="@/assets/img/email.png" alt="">
                <div class="text">
                    <p class="caption-1">EMAIL</p>
                </div>
                <p class="heading-8">Support@VRNas.com</p>
            </a>

            <a href="https://www.google.ru/maps/@-0.022861,109.3290922,182m/data=!3m1!1e3?hl=ru&entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img src="@/assets/img/address.png" alt="">
                <div class="text">
                    <p class="caption-1">ADDRESS</p>
                </div>
                <p class="heading-8">Tanjung Sari Street no.48, Pontianak City</p>
            </a>

            <a class="item" href="tel:+123 456 7890" target="_blank" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="400">
                <img src="@/assets/img/phone.png" alt="">
                <div class="text">
                    <p class="caption-1">PHONE</p>
                </div>
                <p class="heading-8">+123 456 7890</p>
            </a>
        </div>
    </section>
</template>
<style scoped>
/* текст */
.caption-1 {
    margin-bottom: 8px;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    /* Для поддержки в Safari */
    color: transparent;
    display: inline-block;
}

.heading-8 {
    color: var(--White);
    width: 248px;
    text-align: center;

}

/* позиционирование */
.items {
    display: flex;
    justify-content: space-between;

}

.item {
    max-width: 379px;
    width: 100%;
    height: 291px;
    background-color: var(--Black50);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

img {
    width: 65px;
    height: 65px;
    margin-bottom: 32px;
}

.item:hover {
    transform: scale(1.05);
}
</style>