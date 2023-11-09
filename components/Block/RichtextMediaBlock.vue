<script setup>
defineProps(['component'])
import RichtextBlock from '@/components/Block/RichtextBlock'
import MediaBlock from '@/components/Block/MediaBlock'
</script>

<template>
    <div :class="'block__container ' + (component.reverse ? 'reverse' : '')">
        <v-row no-gutters>
            <v-col cols="6">
                <MediaBlock :component="component.mediaComponent[0]" />
            </v-col>
            <v-col cols="6">
                <RichtextBlock :component="component.richtextComponent[0]" />
            </v-col>
        </v-row>
    </div>
</template>

<style>
.reverse .v-row {
    flex-direction: row-reverse;
}
</style>