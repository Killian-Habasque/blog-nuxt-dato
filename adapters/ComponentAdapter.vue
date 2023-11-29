<script setup>
defineProps(['component'])
import RichtextBlock from '@/components/Blocks/RichtextBlock'
import MediaBlock from '@/components/Blocks/MediaBlock'
import RichtextMediaBlock from '@/components/Blocks/RichtextMediaBlock'
import MultipleBlock from '@/components/Blocks/MultipleBlock'
import RelationPostBlock from '@/components/Blocks/RelationPostBlock'

</script>

<template>
    <RichtextBlock v-if="component.__typename === 'RichtextBlockRecord'" :component="component" />
    <MediaBlock v-else-if="component.__typename === 'MediaBlockRecord'" :component="component" />
    <RichtextMediaBlock v-else-if="component.__typename === 'RichtextMediaBlockRecord'" :component="component" />
    <MultipleBlock v-else-if="component.__typename === 'BlockMultipleRecord'" :component="component" />
    <RelationPostBlock v-else-if="component.__typename === 'BlockRelationPostRecord'" :component="component" />
</template>