<script setup>
import getBlog from '@/cms/queries/blog'
const { data, pending, error } = await useLazyAsyncQuery(getBlog)
</script>

<template v-if="!pending">
    <div>
        <v-container>
            <HeroBlock :dataHero="data.blog.heroBlock[0]" />
            <div class="d-flex flex-wrap justify-center">
                <v-card class="ma-5" elevation="3" v-for="post of data.allPosts" :key="post.id" width="500">
                    <NuxtLink class="post-card" :to="'/article/' + post.heroBlock[0].slug">
                        <v-img :src="post.heroBlock[0].backgroundImage.url" contain> </v-img>
                        <v-card-title>{{ post.heroBlock[0].title }}</v-card-title>
                        <!-- <v-card-subtitle>by {{ post.author.name }}</v-card-subtitle> -->
                        <!-- <v-card-subtitle class="pt-0 pb-3">{{
                                post.description
                            }}</v-card-subtitle> -->
                        <div class="read-more ml-4 mb-3">Read More ...</div>
                    </NuxtLink>
                </v-card>
            </div>
        </v-container>
    </div>
</template>
