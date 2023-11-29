<script setup>
import getHomepage from '@/cms/queries/homepage'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const { data, pending, error } = await useLazyAsyncQuery(getHomepage)


</script>

<template v-if="!pending">
    <Head>
        <Title>TEST</Title>
        <Meta name="description" :content="title" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:site_name" content="Doowup" />
        <Meta property="og:url" content={url} />
        <Meta property="og:description" content={text} />
        <Meta property="og:type" content="WebPage" />
        <Meta property="og:image" content="" />
    </Head>
    <SchemaOrgArticle 
        headline: TEST
        image="/photos/16x9/photo.jpg"
        :date-published="new Date(2020, 1, 1)"
        :date-modified="new Date(2020, 1, 1)"
    />
    <SchemaOrgArticle
        type="BlogPosting"
    />
    <SchemaOrgOrganization
        name="My company"
        logo="/logo.png"
        :same-as="['https://twitter.com/company']"
    />
    <SchemaOrgPerson name="John doe" url="https://johndoe.com" />

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