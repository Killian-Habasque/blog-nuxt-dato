<script setup>
import getHomepage from '@/cms/queries/homepage'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const { data, pending, error } = await useLazyAsyncQuery(getHomepage)


</script>

<template v-if="!pending">
    <Head>
        <Title>{{data.homepage.seo.title}}</Title>
        <Meta name="description" :content="data.homepage.seo.description" />
        <Meta property="og:title" :content="data.homepage.seo.title" />
        <Meta property="og:url" :content="$route.name" />
        <Meta property="og:description" :content="data.homepage.seo.description" />
        <Meta property="og:type" content="WebPage" />
        <Meta property="og:image" :content="data.homepage.seo.image.url" />
    </Head>

    <SchemaOrgWebPage 
        type="WebPage"
        :name=data.homepage.seo.title
    />


    <div class="container__lg page-content">
        <div v-for="(component, index) in data.homepage.content" :key="index">
            <ComponentAdapter :component="component"></ComponentAdapter>
        </div>
    </div>


    <!-- <div class="hero__home container__full grid">
        <div class="txt__group grid-6">
            <div>
                <h1 class="txt__title">Experience the Ultimate Comfort</h1>
                <h2 class="txt__subtitle">Embrace a new era of seating.</h2>
                <a class="btn__secondary">Discover Now</a>
            </div>
        </div>
        <div class="img__group grid-6">
            <img src="../assets/img/0559def6da387c314026f49f59e709ec.png" alt="">
        </div>
    </div>

    <div class="container__lg">
        <div class="container__sm txt__group center">
            <h2 class="txt__subtitle">Health Benefits</h2>
            <p class="txt__paragraph">Promote Better Posture</p>
        </div>
        <div class="img__group">
            <img src="../assets/img/0559def6da387c314026f49f59e709ec.png" alt="">
        </div>
        <div class="list__group">
            <ul>
                <li>Conception ergonomique</li>
                <li>Conception ergonomique</li>
                <li>Conception ergonomique</li>
                <li>Conception ergonomique</li>
                <li>Conception ergonomique</li>
            </ul>
        </div>
    </div> -->
</template>