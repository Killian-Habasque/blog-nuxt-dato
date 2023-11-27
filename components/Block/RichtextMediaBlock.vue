<script setup>
defineProps(['component'])
import RichtextBlock from '@/components/Block/RichtextBlock'
import MediaBlock from '@/components/Block/MediaBlock'
</script>

<template>
    <div :class="'block grid ' + (component.reverse ? 'reverse' : '')">
        <div class="grid-6">
            <MediaBlock :component="component.mediaComponent[0]" />
        </div>
        <div class="grid-6">
            <RichtextBlock :component="component.richtextComponent[0]" />
        </div>
    </div>
</template>