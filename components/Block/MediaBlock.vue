<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block__group media">
        <v-img :src="component.media.url" max-height="400"></v-img>
    </div>
</template>