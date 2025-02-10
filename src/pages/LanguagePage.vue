<template>
    <div class="buttons">
        <button @click="changeLanguage('en')" :class="{ active: language === 'en' }"><span>En</span></button>
        <button @click="changeLanguage('ru')" :class="{ active: language === 'ru' }"><span>Ru</span></button>
    </div>
    <div class="container">
        <p class="heading-8">{{ currentMessage }}</p>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const language = ref('en')


const changeLanguage = (lang) => {
    language.value = lang
}


const currentMessage = computed(() => {
    return messages[language.value].text
})

const messages = {
    en: {
        text: 'On the other hand, the further development of various forms of activity ensures that a wide range of (specialists) participate in the formation of appropriate activation conditions. Diverse and rich experience The new model of organizational activity plays an important role in shaping the appropriate conditions for activation. Comrades! The current structure of the organization is an interesting experiment to test the positions held by the participants in relation to the tasks set. Comrades! The constant information and propaganda support of our activities contributes to the preparation and implementation of mass participation systems. Similarly, the further development of various forms of activity requires the definition and refinement of new proposals. Thus, the new model of organizational activity plays an important role in shaping further development directions. Ideological considerations of the highest order, as well as constant information and propaganda support for our activities, largely determine the creation of a development model. Thus, the constant quantitative growth and scope of our activity ensures that a wide range of (specialists) participate in the formation of significant financial and administrative conditions. Similarly, consultation with a wide range of assets allows us to assess the importance of progressive development directions. Comrades! The current structure of the organization makes it possible to assess the importance of the positions held by the participants in relation to the tasks set. Everyday practice shows that the implementation of the planned tasks is an interesting experiment to test the personnel training system and meets the urgent needs. The diverse and rich experience of constant information and propaganda support of our activities allows us to assess the importance of progressive development directions. Diverse and rich experience consulting with a wide range of assets provides a wide range of (specialists) to participate in shaping the directions of progressive development. On the other hand, the further development of various forms of activity largely determines the creation of appropriate conditions for activation. Our diverse and rich experience, constant quantitative growth and the scope of our activity require us to analyze further development directions. However, it should not be forgotten that the strengthening and development of the structure ensures that a wide range of (specialists) participate in shaping the positions held by the participants in relation to the tasks set. The significance of these problems is so obvious that the constant quantitative growth and scope of our activity is an interesting experiment to test the appropriate conditions for activation. On the other hand, the constant information and propaganda support of our activities largely determines the creation of forms of development. Thus, the constant information and propaganda support of our activities allows us to assess the importance of progressive development directions. The significance of these issues is so obvious that the scope and location of staff training allows us to assess the importance of appropriate activation conditions. The task of the organization, especially the strengthening and development of the structure, allows you to carry out important tasks to develop significant financial and administrative conditions. On the other hand, the established structure of the organization provides a wide range of (specialists) to participate in the formation of significant financial and administrative conditions. Thus, the strengthening and development of the structure largely leads to the creation of significant financial and administrative conditions. On the other hand, the current structure of the organization requires us to analyze the systems of mass participation. Similarly, starting the daily work of forming a position requires defining and clarifying new proposals. Ideological considerations of a higher order, as well as the further development of various forms of activity, represent an interesting experiment in testing new proposals. Everyday practice shows that strengthening and developing the structure requires us to analyze the appropriate conditions for activation. The task of the organization, especially the implementation of the planned tasks, plays an important role in shaping the forms of development. The task of the organization, especially the constant information and propaganda support of our activities, entails the process of introducing and modernizing the development model. On the other hand, the new model of organizational activity provides a wide range of (specialists) to participate in shaping further development directions. Thus, the constant information and propaganda support of our activities allows us to carry out important tasks related to the development of significant financial and administrative conditions. Thus, the strengthening and development of the structure plays an important role in shaping the development model. The diverse and rich experience of implementing the planned tasks requires us to analyze the directions of progressive development. The task of the organization, especially the beginning of daily work on the formation of a position, entails the process of introducing and modernizing further areas of development. Comrades! The new model of organizational activity makes it possible to carry out important tasks in developing areas of progressive development. The importance of these problems is so obvious that the strengthening and development of the structure makes it possible to carry out important tasks for the development of a personnel training system that meets urgent needs. Thus, consultation with a broad asset is an interesting experiment in testing mass participation systems. Comrades! the scope and place of staff training allows us to assess the importance of forms of development.',
    },
    ru: {
        text: 'С другой стороны дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании соответствующий условий активизации. Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации систем массового участия. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения новых предложений. Таким образом новая модель организационной деятельности играет важную роль в формировании дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Таким образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Равным образом консультация с широким активом позволяет оценить значение направлений прогрессивного развития. Товарищи! сложившаяся структура организации позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение направлений прогрессивного развития. Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. С другой стороны дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание соответствующий условий активизации. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют от нас анализа дальнейших направлений развития. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки соответствующий условий активизации. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет оценить значение соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры позволяет выполнять важные задания по разработке существенных финансовых и административных условий. С другой стороны сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Таким образом укрепление и развитие структуры в значительной степени обуславливает создание существенных финансовых и административных условий. С другой стороны сложившаяся структура организации требуют от нас анализа систем массового участия. Равным образом начало повседневной работы по формированию позиции требуют определения и уточнения новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки новых предложений. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании форм развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации модели развития. С другой стороны новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Таким образом укрепление и развитие структуры играет важную роль в формировании модели развития. Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа направлений прогрессивного развития. Задача организации, в особенности же начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Товарищи! новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Таким образом консультация с широким активом представляет собой интересный эксперимент проверки систем массового участия. Товарищи! рамки и место обучения кадров позволяет оценить значение форм развития.',
    },
}
</script>

<style scoped>
.heading-8 {
    color: white;
}

.buttons {
    display: flex;
    gap: 10px;
    position: fixed;
    left: 50px;
    top: 90%;
}

span {
    color: white;

}

button {
    width: 50px;
    height: 50px;
    padding: 0;
    background: rgba(108, 0, 231, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

button.active {
    border-bottom: 1px solid rgb(255, 30, 0);
}
</style>