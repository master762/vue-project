<template>
    <div class="content">
        <div class="title-container">
            <p class="caption-1">SERVICE</p>
            <p class="custom-title">{{ content.title }}</p>
        </div>

        <p class="body-1" style="margin-bottom: 38px;">
            {{ content.bodyTop1 }}
        </p>
        <p class="body-1">
            {{ content.bodyTop2 }}
        </p>

        <div class="points">
            <p class="body-3" style="margin-bottom: 24px;" data-aos="fade-up" data-aos-delay="500">
                {{ content.backgroundTitle }}
            </p>
            <div v-for="(service, index) in content.services" :key="index" class="flex">
                <img src="@/assets/img/accept.png" alt="image item">
                <p class="body-3">{{ service }}</p>
            </div>
        </div>

        <p class="body-1" style="margin-bottom: 38px;">
            {{ content.bodyBottom1 }}
        </p>
        <p class="body-1">
            {{ content.bodyBottom2 }}
        </p>

        <button class="custom-btn">
            <span>CONTACT US</span>
        </button>
    </div>
</template>

<script setup>
defineProps({
    content: Object
});
</script>






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




@media(max-width:1200px) {
    .content {
        max-width: 425px;
    }
}

@media(max-width:1000px) {
    .content {
        max-width: 250px;

    }

    .custom-title {
        text-align: center;
    }


}
</style>
