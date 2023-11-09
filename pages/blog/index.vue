<script setup>
import getBlog from '@/cms/queries/blog'
const { data, pending, error } = await useLazyAsyncQuery(getBlog)
</script>

<template v-if="!pending">
    <HeroBlock :dataTitle="data.blog.title" :dataImage="data.blog.backgroundimage"  />
    <v-container>
        <div class="d-flex flex-wrap justify-center">
            <v-card class="ma-5" elevation="3" v-for="post of data.allPosts" :key="post.id" width="300">
                <NuxtLink class="post-card" :to="'/article/' + post.slug">
                    <v-img :src="post.backgroundimage.url" contain> </v-img>
                    <v-card-title>{{ post.title }}</v-card-title>
                    <!-- <v-card-subtitle>by {{ post.author.name }}</v-card-subtitle> -->
                    <!-- <v-card-subtitle class="pt-0 pb-3">{{
                                post.description
                            }}</v-card-subtitle> -->
                    <div class="read-more ml-4 mb-3">Read More ...</div>
                </NuxtLink>
            </v-card>
        </div>
    </v-container>
</template>
