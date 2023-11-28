<script setup>
defineProps(['component'])
// import RichtextBlock from '@/components/Block/RichtextBlock'
// import MediaBlock from '@/components/Block/MediaBlock'
import ComponentAdapter from '@/adapters/ComponentAdapter'
import gridAdapter from '@/services/gridAdapter'
let test = "";

</script>

<template>
    {{ test = gridAdapter(component.gridNumber) }}
    <div class="block grid">
        <div :class="'grid-' + test" v-for="(component, index) in component.blocks" :key="index">
            <ComponentAdapter :component="component"></ComponentAdapter>

            <!-- <div v-if="component.__typename === 'RichtextBlockRecord'">
                <RichtextBlock :component="component" />
            </div>
            <div v-else-if="component.__typename === 'MediaBlockRecord'">
                <MediaBlock :component="component" />
            </div> -->

        </div>
    </div>
</template>