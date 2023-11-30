<script setup>
import getBlog from '@/cms/queries/blog'
const { data, pending, error } = await useLazyAsyncQuery(getBlog)
</script>

<template v-if="!pending">
    <!-- <HeroBlock :dataTitle="data.blog.title" :dataImage="data.blog.backgroundimage" /> -->

    <div class="page-blog container__lg grid">
        <div v-for="post of data.allPosts" :key="post.id" class="grid-4">
            <div class="card__container">
                <NuxtLink :to="'/article/' + post.slug">
                    <div class="img__group">
                        <img :src="post.backgroundimage.url" />
                    </div>
                    <div class="txt__group">
                        <h2 class="txt__subtitle">{{ post.title }}</h2>
                        <p class="txt__paragraph">{{ post.description }}</p>
                        <div class="txt__cta">Read More ...</div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
