<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block__media">
        <img :src="component.media.url" />
    </div>
</template>