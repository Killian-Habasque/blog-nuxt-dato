<script setup>
import getPostBySlug from '@/cms/queries/post'
import ComponentAdapter from '@/adapters/ComponentAdapter'

const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(getPostBySlug, { slug: route.params.slug })

</script>

<template v-if="route && !pending">
  <SchemaOrgArticle
     headline: {{data.post.title}},
  />
  <SchemaOrgArticle 
        headline: {{data.homepage.seo.title}}
        image="/photos/16x9/photo.jpg"
        :date-published="new Date(2020, 1, 1)"
        :date-modified="new Date(2020, 1, 1)"
    />
      <Head>
        <Title>{{data.post.title}}</Title>
        <Meta name="description" :content="title" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:site_name" content="Doowup" />
        <Meta property="og:url" content={url} />
        <Meta property="og:description" content={text} />
        <Meta property="og:type" content="" />
        <Meta property="og:image" :content="data.post.backgroundimage" />
      </Head>

    <div v-if="data">
        <HeroBlock :dataTitle="data.post.title" :dataImage="data.post.backgroundimage"/>
        <div class="container__full page-content__light">
            <div class="container__lg" v-for="(component, index) in data.post.content" :key="index">
                <ComponentAdapter :component="component"></ComponentAdapter>
            </div>
        </div>
    </div>
</template>