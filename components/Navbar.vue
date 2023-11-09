<script setup>
 defineProps(['dataNav'])
</script>

<template>
    <div class="d-flex" v-if="!pending">
        <div v-for="(item, index) in dataNav" :key="index">
            <NuxtLink :to="'/' + item.navslug">
                {{ item.navlabel }}
            </NuxtLink>
        </div>
    </div>
</template>