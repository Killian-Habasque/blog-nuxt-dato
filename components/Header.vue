<script setup>
import getHeader from '@/cms/queries/header'
const { data, pending, error } = await useLazyAsyncQuery(getHeader)
// console.log("_________")
// console.log(data)
</script>

<template>

    <header class="header container__full">
        <div class="header__group">
            <img :src="data.header.logo.url" width="10" alt="">
            <Navbar :dataNav="data.header.navigation"/>
        </div>
    
    </header>



    <!-- <v-app-bar v-if="!pending" color="white">
        <img :src="data.header.logo.url" width="100" alt="">
        <Navbar :dataNav="data.header.navigation"/>
    </v-app-bar> -->
</template>


<style>

</style>