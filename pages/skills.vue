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

    <SkillsMain />

    <LayoutFooter />
</template>

<script>
export default {
    data() {
        return {
            title: "Skills" + constants.main.second_title, 
            description: "Andrea Corriga has vertical expertise in full stack application and infrastructure development, Android and iOS application development, Machine Learning, and Deep Learning.", 

            nuxtApp: useNuxtApp(),
            requestUrl: useRequestURL()

        }
    }
}
</script>