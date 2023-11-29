<script setup>
defineProps(['component'])
import RichtextBlock from '@/components/Block/RichtextBlock'
import MediaBlock from '@/components/Block/MediaBlock'
import RichtextMediaBlock from '@/components/Block/RichtextMediaBlock'
import MultipleBlock from '@/components/Block/MultipleBlock'
</script>

<template>
    <div v-if="component.__typename === 'RichtextBlockRecord'">
        <RichtextBlock :component="component" />
    </div>
    <div v-else-if="component.__typename === 'MediaBlockRecord'">
        <MediaBlock :component="component" />
    </div>
    <div v-else-if="component.__typename === 'RichtextMediaBlockRecord'">
        <RichtextMediaBlock :component="component" />
    </div>
    <div v-else-if="component.__typename === 'RichtextMediaBlockRecord'">
        <RichtextMediaBlock :component="component"/>
    </div>
    <div v-else-if="component.__typename === 'BlockMultipleRecord'">
        <MultipleBlock :component="component"/>
    </div>
    <div v-else>
        Not A/B/C
    </div>
</template>