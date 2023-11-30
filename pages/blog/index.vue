<script setup>
import getBlog from '@/cms/queries/blog'

const { data, pending, error } = await useLazyAsyncQuery(getBlog)
</script>

<template v-if="!pending">
    <SearchOptimization type="CollectionPage" :seo="data.blog.seo" />

    <div class="page-content container__lg">
        <div class="container__sm center">
            <div class="img__group">
                <img :src="data.blog.url" :alt="data.blog.alt">
            </div>
            <h1 class="txt__title">{{ data.blog.title }}</h1>
        </div>
        <section class="grid">
            <div v-for="post of data.allPosts" :key="post.id" class="grid-4">
                <Card :post="post"/>
            </div>
        </section>
    </div>
</template>
