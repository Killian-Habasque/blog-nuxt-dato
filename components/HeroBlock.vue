<script setup>
defineProps(['dataTitle', 'dataImage'])
</script>

<template>
    <div class="hero__post container__sm center">
        <div class="img__group">
            <img :src="dataImage.url" alt="">
        </div>
        <h1 class="txt__title">{{ dataTitle }}</h1>
    </div>
</template>