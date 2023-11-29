<script setup>
defineProps(['component'])
</script>

<template>
    <div :class="'block blk__richtext ' + (component.cardStyle ? 'card__light' : '')">
        <div v-html="component.richtext"></div>
    </div>
</template>