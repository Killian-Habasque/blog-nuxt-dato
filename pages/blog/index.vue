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
                <div class="card__container">
                    <NuxtLink :to="'/article/' + post.slug">
                        <div class="img__group">
                            <img :src="post.backgroundimage.url" :alt="post.backgroundimage.alt"/>
                        </div>
                        <div class="txt__group">
                            <h2 class="txt__subtitle">{{ post.title }}</h2>
                            <p class="txt__paragraph">{{ post.description }}</p>
                            <div class="txt__cta">Read More ...</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>
