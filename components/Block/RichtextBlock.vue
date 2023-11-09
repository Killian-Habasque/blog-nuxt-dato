<script setup>
import MarkdownRenderer from '@/adapters/MarkdownRenderer'
defineProps(['component'])
</script>

<template>
    <div class="block__group richtext ma-5">
        <MarkdownRenderer :markdownContent="component.richtext" />
    </div>
</template>