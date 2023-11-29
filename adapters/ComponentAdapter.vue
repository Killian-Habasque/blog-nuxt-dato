<script setup>
defineProps(['component'])
import RichtextBlock from '@/components/Block/RichtextBlock'
import MediaBlock from '@/components/Block/MediaBlock'
import RichtextMediaBlock from '@/components/Block/RichtextMediaBlock'
import MultipleBlock from '@/components/Block/MultipleBlock'
</script>

<template>
    <RichtextBlock v-if="component.__typename === 'RichtextBlockRecord'" :component="component" />
    <MediaBlock v-else-if="component.__typename === 'MediaBlockRecord'" :component="component" />
    <RichtextMediaBlock v-else-if="component.__typename === 'RichtextMediaBlockRecord'" :component="component" />
    <MultipleBlock v-else-if="component.__typename === 'BlockMultipleRecord'" :component="component" />
</template>