<script setup>
import getPostBySlug from '@/cms/queries/post'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(getPostBySlug, { slug: route.params.slug })


</script>

<template v-if="route && !pending">
    <v-container>
        <div v-if="data">
            <p>Blog - {{ $route.params.slug }}</p>
            <div v-for="(component, index) in data.post.content" :key="index">
                {{ console.log(component) }}
                <ComponentAdapter :component="component"></ComponentAdapter>
            </div>
        </div>
    </v-container>
</template>