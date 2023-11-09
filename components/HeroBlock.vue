<script setup>
 defineProps(['dataTitle', 'dataImage'])
</script>

<template>
    <div>
        <v-img :src="dataImage.url" cover max-height="300"></v-img>
        <v-container>
            <Breadcrumbs></Breadcrumbs>
            <h1 class="text-h2 ma-4">{{ dataTitle }}</h1>
        </v-container>
    </div>
</template>