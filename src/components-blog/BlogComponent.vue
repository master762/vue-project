<template>
    <section>
        <div class="news-list">
            <div v-for="news in currentNews" :key="news.id" class="new" data-aos="fade-up">
                <img :src="news.image" :alt="news.title" />
                <div class="text">
                    <p class="caption-2">{{ news.category }}</p>
                    <p class="heading-9">{{ news.title }}</p>
                    <p class="custom-txt">READ MORE</p>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <button v-for="page in newsData.length" :key="page" @click="changePage(page)"
                :class="{ 'active': page === currentPage }" data-aos="fade-up">
                {{ page }}
            </button>
        </div>
    </section>
</template>


<script setup>
import { ref, computed } from 'vue';

import blog from '../assets/img/blog.png'
import blog1 from '../assets/img/blog1.png'
import blog2 from '../assets/img/blog2.png'
import blog3 from '../assets/img/blog3.png'
import blog4 from '../assets/img/blog4.png'
import blog5 from '../assets/img/blog5.png'
import blog6 from '../assets/img/blog6.png'
import blog7 from '../assets/img/blog7.png'
import blog8 from '../assets/img/blog8.png'

const newsData = [
    // страница 1
    [
        { id: 1, category: 'VR Games', title: 'Entertainment Goes Virtual: The Rise of VR Gaming', image: blog },
        { id: 2, category: 'VR Games', title: 'Entertainment Goes Virtual: The Rise of VR Gaming', image: blog1 },
        { id: 3, category: 'VR Games', title: 'Entertainment Goes Virtual: The Rise of VR Gaming', image: blog2 },
        { id: 4, category: 'VR Entertainment', title: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions', image: blog3 },
        { id: 5, category: 'VR Event', title: 'Exploring New Worlds: The Benefits of VR Travel', image: blog4 },
        { id: 6, category: 'VR Architecture', title: 'Bringing Designs to Life: How VR is Changing Architecture', image: blog5 },
        { id: 7, category: 'VR Games', title: 'Entertainment Goes Virtual: The Rise of VR Gaming', image: blog6 },
        { id: 8, category: 'VR Games', title: 'Entertainment Goes Virtual: The Rise of VR Gaming', image: blog7 },
        { id: 9, category: 'VR Education', title: 'The Future of Education: How VR is Revolutionizing the Classroom', image: blog8 },
    ],
    // страница 2
    [
        { id: 10, category: 'VR Technology', title: 'New VR Headsets: A Game Changer', image: blog2 },
        { id: 11, category: 'VR Travel', title: 'Virtual Tourism: Exploring the World from Home', image: blog3 },
        { id: 12, category: 'VR Business', title: 'How VR is Transforming Remote Work', image: blog4 },
    ],
    // страница 3
    [
        { id: 13, category: 'VR Training', title: 'VR Training for Medical Professionals', image: blog7 },
        { id: 14, category: 'VR Sports', title: 'The Future of VR in Sports Training', image: blog1 },
        { id: 15, category: 'VR Therapy', title: 'VR for Mental Health Therapy', image: blog },
    ]
];


const currentPage = ref(1);


const currentNews = computed(() => newsData[currentPage.value - 1]);

const changePage = (page) => {
    if (page > 0 && page <= newsData.length) {
        currentPage.value = page;
    }
};
</script>



<style scoped>
.news-list {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
}

.new {
    max-width: 379px;
    width: 100%;
    background-color: var(--Black50);
    transition: 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1;

}

.new:hover {
    transform: scale(1.05);
    border: none;
}

.text {
    max-width: 331px;
    margin: 16px auto 32px auto;
}

.caption-2 {
    color: var(--White);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    padding: 2px 10px;
    display: flex;
    width: fit-content;
    margin-bottom: 12px;
}

.heading-9 {
    color: var(--White);
    margin-bottom: 20px;
}

.custom-txt {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 1.5px;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    border-bottom: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    cursor: pointer;
}

.btn-container {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    gap: 16px;
}

button {
    width: 34px;
    height: 34px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    color: var(--White);
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
    transition: 0.3s;
}

button.active {
    opacity: 1;
}
</style>
