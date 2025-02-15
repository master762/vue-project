<template>
    <div id="map" style="height: 473px;" data-aos="fade-up"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {

    const map = L.map('map').setView([-0.034000, 109.356778], 13); // Центр карты с координатами

    // Темная тема с использованием слоя CartoDB
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    }).addTo(map);


    const customIcon = L.icon({
        iconUrl: '/Maps.png',
        iconSize: [64, 64],
        iconAnchor: [40, 52],

    });
    L.marker([-0.034000, 109.356778], { icon: customIcon }).addTo(map);
});
</script>
