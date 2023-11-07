<script setup>
defineProps(['component'])
</script>

<template>
    <img width="300" :src="component.media.url"/>
</template>