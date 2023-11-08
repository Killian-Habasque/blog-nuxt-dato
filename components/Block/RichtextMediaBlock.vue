<script setup>
defineProps(['component'])
import RichtextBlock from '@/components/Block/RichtextBlock'
import MediaBlock from '@/components/Block/MediaBlock'
</script>

<template>
    <MediaBlock :component="component.mediaComponent[0]"/>
    <RichtextBlock :component="component.richtextComponent[0]"/>
    <p>{{ component.layout[0] }}</p>
</template>
