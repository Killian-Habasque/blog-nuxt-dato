<script setup>
import getHeader from '@/cms/queries/header'
const { data, pending, error } = await useLazyAsyncQuery(getHeader)
</script>

<template v-if="!pending">
    <header class="header container__full">
        <div class="header__group">
            <img class="logo" :src="data.header.logo.url" :alt="data.header.logo.alt">
            <Navbar :dataNav="data.header.navigation"/>
        </div>
    </header>
    <SchemaOrgOrganization
        name="Refergo"
        :logo="data.header.logo.url"
        />
</template>
