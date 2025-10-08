<template>
    <section>
        <!-- заголовки -->
        <div class="container-txt">
            <p class="custom-txt">FAQ</p>
            <p class="heading-2">Frequently Asked Questions</p>
            <p class="body-1" data-aos="fade-up" data-aos-delay="400">
                At VRNas, we want to make sure that you have all the information you need to make informed
                decisions about our VR services. Here are some of the most common questions we receive:
            </p>
            <img class="light" src="@/assets/img/Light11.png" alt="background light">
        </div>

        <!-- кнопки для фильтрации (видны только на второй странице) -->
        <div v-if="showFilter" class="filter">
            <button class="styled-btn" @click="filterQuestions('All')">All</button>
            <button class="styled-btn" @click="filterQuestions('VR Service')">VR Service</button>
            <button class="styled-btn" @click="filterQuestions('Pricing')">Pricing</button>
        </div>

        <!-- аккордеон -->
        <div class="accordion">
            <div class="accordion-item" v-for="(item, index) in filteredItems" :key="index"
                :class="{ active: item.isOpen }">
                <button class="accordion-header" @click="toggleAccordion(index)">
                    <span class="heading-8">{{ item.title }}</span>
                    <img src="@/assets/img/arrow.png" alt="arrow" class="arrow" :class="{ active: item.isOpen }" />
                </button>
                <div class="accordion-content" :class="{ open: item.isOpen }">
                    <p class="body-3">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.custom-txt {
    margin-top: 350px;
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
    text-align: center;
}

.heading-2 {
    color: var(--White);
    margin-bottom: 24px;
}

.body-1 {
    color: var(--Grey2);
    margin-bottom: 48px;
}

.container-txt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 764px;
    text-align: center;
    margin: 0 auto;
    position: relative;
}

.accordion {
    width: 100%;
    max-width: 790px;
    margin: 0 auto;
}

.accordion-item {
    background: rgba(37, 37, 50, 0.81);
    border: 1px solid rgba(255, 255, 255, 0.35);
    margin-bottom: 24px;
    transition: border-color 0.3s ease;
}

.accordion-item.active {
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    animation: borderAnimation 2s infinite alternate;
}

.accordion-item:last-child {
    margin-bottom: 0;
}

.accordion-header {
    width: 100%;
    padding: 12px 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accordion-item.active .heading-8 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    width: 100%;
    text-align: start;
    padding-bottom: 12px;

}

.heading-8 {
    color: var(--White);
}

.accordion-header .arrow {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
}

.accordion-header .arrow.active {
    transform: rotate(180deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.accordion-content.open {
    max-height: 200px;
    padding: 12px 24px 24px 24px;
}

.body-3 {
    color: var(--Grey2);
    font-size: 1rem;
    line-height: 1.5;
}

.light {
    position: absolute;
    top: 50%;
    right: -30%;
    z-index: -1;
}

.filter {
    display: flex;
    max-width: 336px;
    margin: 32px auto 32px auto;
    gap: 24px;

}

.styled-btn {
    height: 52px;
    border: 1px solid;
    border-image-source: var(--linear);
    border-image-slice: 1;
    background-color: rgba(255, 255, 255, 0);
    color: var(--White);
    animation: borderAnimation 2s infinite alternate;
}


.styled-btn:nth-child(1) {
    width: 65px;
}

.styled-btn:nth-child(2) {
    width: 125px;
}

.styled-btn:nth-child(3) {
    width: 98px;
}

@media(max-width:1250px) {

    section {
        width: 90%;
        margin: 0 auto;
        overflow-x: clip;
    }
}
</style>


<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    isAlternative: Boolean, // Определяет, на какой странице используется компонент
});

// Данные для первой страницы (без фильтров)
const onePage = [
    { title: 'What is virtual reality?', content: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.', category: 'VR Service', isOpen: false },
    { title: 'What types of VR services do you offer?', content: 'We offer a variety of VR services including gaming, educational simulations, and professional training.', category: 'VR Service', isOpen: false },
    { title: 'How much does your VR services cost?', content: 'The cost of our VR services varies depending on the type and duration of the experience. Please contact us for detailed pricing.', category: 'Pricing', isOpen: false },
    { title: 'What equipment do I need to use your VR services?', content: 'You will need a compatible VR headset and a computer or gaming console that meets the required specifications.', category: 'VR Service', isOpen: false },
    { title: 'Can I try out your VR services before I commit?', content: 'Yes, we offer demo sessions for potential customers to experience our VR services before making a commitment.', category: 'VR Service', isOpen: false },
];

// Данные для второй страницы (с фильтрами)

const twoPage = [
    { title: 'What is virtual reality?', content: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment.', category: 'VR Service', isOpen: false },
    { title: 'What types of VR services do you offer?', content: 'We offer a variety of VR services including gaming, educational simulations, and professional training.', category: 'VR Service', isOpen: false },
    { title: 'What types of VR services do you offer?', content: 'We offer a variety of VR services including gaming, educational simulations, and professional training.', category: 'VR Service', isOpen: false },
    { title: 'What types of VR services do you offer?', content: 'We offer a variety of VR services including gaming, educational simulations, and professional training.', category: 'VR Service', isOpen: false },
    { title: 'How much does your VR services cost?', content: 'The cost of our VR services varies depending on the type and duration of the experience.', category: 'Pricing', isOpen: false },
    { title: 'How much does your VR services cost?', content: 'The cost of our VR services varies depending on the type and duration of the experience.', category: 'Pricing', isOpen: false },
    { title: 'How much does your VR services cost?', content: 'The cost of our VR services varies depending on the type and duration of the experience.', category: 'Pricing', isOpen: false },
    { title: 'What equipment do I need to use your VR services?', content: 'You will need a compatible VR headset and a computer or gaming console that meets the required specifications.', category: 'VR Service', isOpen: false },
    { title: 'What equipment do I need to use your VR services?', content: 'You will need a compatible VR headset and a computer or gaming console that meets the required specifications.', category: 'VR Service', isOpen: false },
    { title: 'What equipment do I need to use your VR services?', content: 'You will need a compatible VR headset and a computer or gaming console that meets the required specifications.', category: 'VR Service', isOpen: false },
    { title: 'Can I try out your VR services before I commit?', content: 'Yes, we offer demo sessions for potential customers to experience our VR services before making a commitment.', category: 'VR Service', isOpen: false },
    { title: 'Can I try out your VR services before I commit?', content: 'Yes, we offer demo sessions for potential customers to experience our VR services before making a commitment.', category: 'VR Service', isOpen: false },
    { title: 'Can I try out your VR services before I commit?', content: 'Yes, we offer demo sessions for potential customers to experience our VR services before making a commitment.', category: 'VR Service', isOpen: false },
];
// Логика фильтрации
const items = ref(props.isAlternative ? twoPage : onePage);
const selectedCategory = ref('All');

// Фильтр 
const filteredItems = computed(() => {
    if (selectedCategory.value === 'All') return items.value;
    return items.value.filter(item => item.category === selectedCategory.value);
});

const filterQuestions = (category) => {
    selectedCategory.value = category;
    const openedItems = items.value.filter(item => item.isOpen);
    items.value = props.isAlternative ? twoPage : onePage;
    items.value.forEach(item => {
        const matched = openedItems.find(openItem => openItem.title === item.title);
        if (matched) {
            item.isOpen = true;
        }
    });
};

const toggleAccordion = (index) => {
    filteredItems.value.forEach((item, i) => {
        item.isOpen = i === index ? !item.isOpen : false;
    });
};

const showFilter = props.isAlternative;
</script>