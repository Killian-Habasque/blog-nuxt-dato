<script setup>
import getFooter from '@/cms/queries/footer'
const { data, pending, error } = await useLazyAsyncQuery(getFooter)
</script>

<template v-if="!pending">
    <footer class="footer container__full">
        <div v-html="data.footer.copyright"></div>
    </footer>
</template>
