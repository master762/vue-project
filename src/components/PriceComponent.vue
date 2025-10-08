<template>
    <section>
        <div class="text" data-aos="fade-down">
            <p class="caption-1">PRICING</p>
        </div>
        <p class="heading-2" data-aos="fade-up" data-aos-delay="300">Pricing Plans</p>
        <p class="body-3" data-aos="fade-up" data-aos-delay="400">
            Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you can
            test out our service and see which plan works best for you.
        </p>
        <div class="elements">

            <div class="element" data-aos="fade-up" data-aos-delay="50">
                <div class="items">
                    <p class="heading-9">Basic Plan</p>
                    <div class="price">
                        <p class="heading-1">$99</p>
                        <p class="body-1">/ month</p>
                    </div>
                    <p class="custom-txt">All the basic features to boost your freelance career</p>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Access to a selection of VR games and experiences</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Limited access to educational content</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Limited access to architecture and design tools</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">No access to exclusive events or promotions</p>
                    </div>
                    <button class="btn"> <span>GET 14 DAYS FREE TRIAL</span></button>
                </div>
            </div>

            <div class="element" data-aos="fade-up" data-aos-delay="50">
                <div class="items">
                    <p class="heading-9">Standard Plan</p>
                    <div class="price">
                        <p class="heading-1">$149</p>
                        <p class="body-1">/ month</p>
                    </div>
                    <p class="custom-txt">All the basic features to boost your freelance career</p>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Access to a selection of VR games and experiences</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Limited access to educational content</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Limited access to architecture and design tools</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Access to exclusive events and promotionss</p>
                    </div>
                    <button class="btn"> <span>GET 14 DAYS FREE TRIAL</span></button>
                </div>
            </div>

            <div class="element" data-aos="fade-up" data-aos-delay="50">
                <div class="items">
                    <p class="heading-9">Premium Plan</p>
                    <div class="price">
                        <p class="heading-1">$200</p>
                        <p class="body-1">/ month</p>
                    </div>
                    <p class="custom-txt">All the basic features to boost your freelance career</p>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Access to a selection of VR games and experiences</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Limited access to educational content</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Limited access to architecture and design tools</p>
                    </div>
                    <div class="flex"><img src="@/assets/img/accept1.png" alt="item">
                        <p class="heading-11">Priority access to exclusive events and promotions</p>
                    </div>
                    <button class="btn"> <span>GET 14 DAYS FREE TRIAL</span></button>
                </div>
            </div>

        </div>
    </section>
</template>


<style scoped>
/* текст */
.text {
    display: flex;
    justify-content: center;
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

.heading-2 {
    color: var(--White);
    margin-bottom: 16px;
    text-align: center;
}

.body-3 {
    color: var(--Grey2);
    max-width: 751px;
    margin: 0 auto;
    text-align: center;
}

.heading-9 {
    color: var(--White);

}

.heading-1 {
    color: var(--White);
}

.body-1 {
    color: rgba(113, 113, 122, 1);
}

.custom-txt {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: var(--Grey1);
    margin-bottom: 16px;
}

.heading-11 {
    color: var(--White);
}

/* баннеры с ценами */

.elements {
    display: flex;
    gap: 62px;
    margin-top: 40px;
}

.element {
    max-width: 359px;
    width: 100%;
    background: var(--Black50);
    transition: 0.3s;
}

.element:hover {
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    cursor: pointer;
    transform: scale(1.1);
}

.element {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 39px;
    height: fit-content;

}

.items {
    max-width: 265px;
}

.price {
    display: flex;
    align-items: end;
    margin-top: 9px;
    margin-bottom: 9px;
}

.flex {
    display: flex;
    align-items: start;
    gap: 6px;
    margin-bottom: 16px;
}

.btn {
    max-width: 292px;
    width: 100%;
    height: 55px;
    margin: 36px auto auto auto;
    background: rgba(255, 255, 255, 0.06);
    display: block;
    color: var(--White);
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    animation: borderAnimation 2s infinite alternate;
}

.btn:hover {
    background: var(--linear);
    border: none;
    background-size: 200%;
    animation: gradient 3s linear infinite;
}

@media(max-width:1250px) {

    section {
        width: 90%;
        margin: 0 auto;
    }
}


@media (max-width: 1000px) {
    .element {
        padding-left: 10px;
        padding-right: 10px;
    }

}

@media (max-width: 820px) {
    .elements {
        flex-direction: column;
        align-items: center;
    }
}
</style>