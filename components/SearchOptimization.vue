<script setup>
defineProps(['seo', 'type'])


</script>

<template>
     <div v-if="type !== 'Global'">
        <Head>
            <Title>{{ seo.title }}</Title>
            <Meta name="description" :content="seo.description ?? ''" />
            <Meta property="og:title" :content="seo.title" />
            <Meta property="og:description" :content="seo.description ?? ''" />
            <Meta property="og:type" :content="type ?? ''" />
            <Meta property="og:image" :content="seo.image.url ?? ''" />
        </Head>

        <!-- Schema.org -->
        <div v-if="type === 'WebPage'">
            <SchemaOrgWebPage 
            :name="seo.title"
            :description="seo.description ?? ''"
            :image="seo.image.url ?? ''"
        />
        </div>
        <div v-else-if="type === 'BlogPosting'" >
            <SchemaOrgArticle 
            headline: {{seo.title}} 
            :description="seo.description ?? ''"
            :image="seo.image.url ?? ''"
            :date-published="new Date()" 
            :date-modified="new Date()" />
        </div>
        <div v-else-if="type === 'CollectionPage'" >
            <SchemaOrgWebPage 
            type="CollectionPage"
            headline: {{seo.title}} 
            :name="seo.title"
            :description="seo.description ?? ''"
            :image="seo.image.url ?? ''"/>
        </div>
    </div>
    <div v-else>
        <Head>
            <link rel="shortcut icon" :href="seo.url ?? ''">
        </Head>
        <SchemaOrgOrganization
            name="Refergo"
            :same-as="['https://www.linkedin.com/in/killian-habasque-041841220/']"
        />
        <SchemaOrgWebSite name="Refergo" />
        <SchemaOrgPerson
            name="Killian Habasque"
            :image="seo.url ?? ''"
            :same-as="['https://www.linkedin.com/in/killian-habasque-041841220/']"
        />
    </div>
</template>