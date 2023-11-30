<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block blk__media">
        <img :src="component.media.url" :alt="component.media.alt"/>
    </div>
</template>