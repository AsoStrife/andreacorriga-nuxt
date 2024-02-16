<template>
    <div class="container page-content">
        
        <!-- <div class="row">
            <div class="col-12 col-lg-12 col-md-12 mt-5">
                <h2> Thanks for using Rewards Search Automator </h2>
            </div>
        </div> -->

        <div class="row">
            <div class="col-12 col-lg-3 col-md-3">
                <h3 class="mb-3">ADS</h3>
                <ClientOnly>
                    <ins class="adsbygoogle" style="display:block" data-ad-slot="2175628198" data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                </ClientOnly>
            </div>

            <div class="col-12 col-lg-8 col-md-8">
                <h3 class="mb-3">Discover more</h3>
                <div v-for="project in constants.rewardsDiscoverMore" :key="project.name">
                    <ProjectsProjectCard :project="project" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.page-content {
    text-align: left !important;
}
</style>

<script>
export default {
    mounted() {
    }
}
</script>