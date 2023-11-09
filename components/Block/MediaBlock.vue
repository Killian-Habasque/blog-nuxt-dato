<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block__group media ma-5">
        <v-img :src="component.media.url" cover max-height="400"></v-img>
    </div>
</template>