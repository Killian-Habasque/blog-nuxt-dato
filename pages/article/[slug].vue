<script setup>
import getPostBySlug from '@/cms/queries/post'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(getPostBySlug, { slug: route.params.slug })
</script>

<template v-if="route && !pending">
    <div v-if="data">
        <HeroBlock :dataTitle="data.post.title" :dataImage="data.post.backgroundimage"/>
        <div class="container__full content">
            <div v-for="(component, index) in data.post.content" :key="index">
                <ComponentAdapter :component="component"></ComponentAdapter>
            </div>
        </div>
    </div>
</template>