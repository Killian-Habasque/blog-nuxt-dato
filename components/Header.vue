<script setup>
import getHeader from '@/cms/queries/header'
const { data, pending, error } = await useLazyAsyncQuery(getHeader)
console.log("_________")
console.log(data)
</script>

<template>
    <v-app-bar v-if="!pending" color="white">
        <img :src="data.header.logo.url" width="100" alt="">
        <Navbar :dataNav="data.header.navigation"/>
    </v-app-bar>
</template>