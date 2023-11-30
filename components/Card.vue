<script setup>
defineProps(['post'])
</script>

<template>
    <div class="card__container">
        <NuxtLink :to="'/article/' + post.slug">
            <div class="img__group">
                <img :src="post.backgroundimage.url" :alt="post.backgroundimage.alt" />
            </div>
            <div class="txt__group">
                <h2 class="txt__subtitle">{{ post.title }}</h2>
                <p class="txt__paragraph">{{ post.description }}</p>
                <div class="txt__cta">Voir plus ...</div>
            </div>
        </NuxtLink>
    </div>
</template>
