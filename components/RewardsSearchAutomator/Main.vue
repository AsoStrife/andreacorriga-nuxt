
import type { Head } from '#build/components';

import type { ClientOnly } from '#build/components';
<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-12">

                <h2> Thanks for using Rewards Search Automator </h2>
            </div>

            <div class="col-12 col-lg-8 col-md-8 mt-5">
                <div v-for="project in constants.rewardsDiscoverMore" :key="project.name">
                <ProjectsProjectCard :project="project"/>
            </div>
            </div>

            <div class="col-12 col-lg-2 col-md-2">
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-0339695948238346"
                    data-ad-slot="2175628198"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>

        </div>
    </div>
</template>

<style scoped>
.page-content {
    text-align: left  !important;
}

</style>

<script>
export default {
    mounted() {
        let adsbygoogle = window.adsbygoogle || []
    },
    head: {
        script: [
            {
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0339695948238346',
                crossorigin: 'anonymous'
            }
        ]
    }
}
</script>