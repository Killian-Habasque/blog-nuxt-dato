<script setup>
import getHomepage from '@/cms/queries/homepage'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const { data, pending, error } = await useLazyAsyncQuery(getHomepage)
</script>

<template v-if="!pending">
    <!-- <SearchOptimization type="WebPage" :seo="data.homepage.seo" /> -->

    <div class="page-content container__lg">
        <div v-for="(component, index) in data.homepage.content" :key="index">
            <ComponentAdapter :component="component"></ComponentAdapter>
        </div>
    </div>
</template>