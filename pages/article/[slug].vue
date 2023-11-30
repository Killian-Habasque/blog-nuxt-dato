<script setup>
import getPostBySlug from '@/cms/queries/post'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(getPostBySlug, { slug: route.params.slug })

</script>

<template v-if="route && !pending">
    <!-- <SearchOptimization type="BlogPosting" :seo="data.post.seo" /> -->

    <div>
        <div class="hero__post container__sm center">
            <div class="img__group">
                <img :src="data.post.backgroundimage.url" :alt="data.post.backgroundimage.alt">
            </div>
            <h1 class="txt__title">{{ data.post.title }}</h1>
        </div>
        <div class="container__full page-content__light">
            <div class="container__lg" v-for="(component, index) in data.post.content" :key="index">
                <ComponentAdapter :component="component"></ComponentAdapter>
            </div>
        </div>
    </div>

</template>