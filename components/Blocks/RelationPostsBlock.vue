<script setup>
defineProps(['component'])
</script>

<template>
    <div class="block blk__richtext">
        <div v-html="component.richtext"></div>
    </div>
</template>