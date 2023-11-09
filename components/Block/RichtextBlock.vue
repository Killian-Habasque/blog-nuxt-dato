<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block__group richtext ma-5">
        <div v-html="component.richtext"></div>
    </div>
</template>