<script setup>
 defineProps(['dataNav'])
</script>

<template>
    <div class="navbar__group">
        <div v-for="(item, index) in dataNav" :key="index">
            <NuxtLink :to="'/' + item.navslug" :class="'navbar__item ' + (item.button ? 'btn__secondary' : '')">
                {{ item.navlabel }}
            </NuxtLink>
        </div>
    </div>
</template>