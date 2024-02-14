<template>
    <Head>
        <Title> {{ title }}</Title>

        <Link rel="sitemap" :href="requestUrl.origin + '/sitemap.xml'" type="application/xml" />
        <Link rel="canonical" :href="requestUrl.href"/>

        <Meta name="description" :content="description" />
        <Meta name="author" :content="constants.meta.author" />	
        <Meta name="keywords" :lang="constants.meta.language" :content="constants.meta.keywords" />
        <Meta name="robots" :content="constants.meta.robots" />
        <Meta name="language" :content="constants.meta.language" />
        <Meta name="rating" :content="constants.meta.rating" />

        <!--Facebook OpenGraph-->
        <Meta property="og:url" :content="requestUrl.href" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:image" :content="constants.facebook_open_graph.image" />
        <Meta property="og:description" :content="description" />

    </Head>

    <LayoutHeader />

    <MoviesMain />

    <LayoutFooter />
</template>

<script>
export default {
    data() {
        return {
            title: "Movies Collection" + constants.main.second_title, 
            description: "Below is Andrea's Blu-rays & DVDs collection. They have only seen some of the films listed in this catalog and do not yet own others.", 

            nuxtApp: useNuxtApp(),
            requestUrl: useRequestURL()

        }
    }
}
</script>