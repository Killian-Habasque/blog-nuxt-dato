<script setup>
defineProps(['component'])

</script>

<template>
    <div v-if="component.__typename === 'RichtextBlockRecord'">
        <MarkdownRenderer :markdownContent="component.richtext" />
    </div>
    <div v-else-if="component.__typename === 'MediaBlockRecord'">
        <img width="300" :src="component.media.url"/>
    </div>
    <div v-else-if="component === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>
</template>