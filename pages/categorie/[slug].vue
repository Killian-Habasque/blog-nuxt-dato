<script setup>
import getCategoryBySlug from '@/cms/queries/post'

const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(getCategoryBySlug, { slug: route.params.slug })
</script>

<template v-if="route && !pending">
    <div v-if="data">
        <HeroBlock :dataTitle="data.post.title" :dataImage="data.post.backgroundimage"/>
        <v-container>

        </v-container>
    </div>
</template>