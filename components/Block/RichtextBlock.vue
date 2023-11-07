<script setup>
import MarkdownRenderer from '@/adapters/MarkdownRenderer'
defineProps(['component'])
</script>

<template>
    <MarkdownRenderer :markdownContent="component.richtext" />
</template>