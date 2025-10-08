<template>
    <div class="video">
        <video ref="video" :poster="videoPoster" class="video">
            <source :src="videoSrc" type="video/mp4" />
        </video>
        <div v-show="showButton" class="play-button" @click="playVideo">
            <img src="@/assets/img/Playbutton1.png" alt="Play Button" />
        </div>
    </div>
</template>
<style scoped>
.play-button img {
    width: 28px;
    height: 28px;

}

.play-button {
    position: absolute;
    top: 50px;
    left: 84px;

}

video {
    width: 196px;
    height: 127px;
    position: relative;
}
</style>
<script setup>
import { ref } from 'vue';

defineProps({
    videoSrc: String,
    videoPoster: String
});

const video = ref(null);
const showButton = ref(true);
const showText = ref(true);

const playVideo = () => {
    if (video.value) {
        video.value.play();
        setTimeout(() => {
            showButton.value = false;
            showText.value = false;
        }, 500);
    }
};
</script>