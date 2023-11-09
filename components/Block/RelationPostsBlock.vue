<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block__group richtext ma-5">
        <p v-html="component.richtext"></p>
    </div>
</template>