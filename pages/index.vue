<script setup>
import getBlog from '@/cms/queries/blog'
const { data, pending, error } = await useLazyAsyncQuery(getBlog)


</script>

<template>
    <div v-if="!pending">
        <div v-for="(item, index) in data.allPosts" :key="index">
            {{ item.title }}
        </div>
    </div>
</template>