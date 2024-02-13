<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-2 col-md-2">
                            <img :src="project.img" class="img-thumbnail project-img d-block" :alt="project.name" :title="project.name">
                        </div>
                        <div class="col-lg-10 col-md-10">
                            <h1>{{project.name}}</h1>
                            <p v-html="project.description"></p>
                            <div class="text-right">
                                <a :href="project.url" target="_blank" class="btn mr-2" v-if="project.url">
                                    <ClientOnly>
                                        <i class="fa fa-globe" aria-hidden="true"></i> Website
                                    </ClientOnly>
                                </a>

                                <a :href="project.repositoryUrl" target="_blank" class="btn mr-2" v-if="project.repositoryUrl">
                                    <ClientOnly>
                                        <i class="fab fa-github" aria-hidden="true"></i> Repository
                                    </ClientOnly>
                                </a>

                                <a :href="project.android" target="_blank" class="btn mr-2" v-if="project.android">
                                    <ClientOnly>
                                        <i class="fab fa-google-play mr-2" aria-hidden="true"></i> Play Store
                                    </ClientOnly>
                                </a>

                                <a :href="project.ios" target="_blank" class="btn mr-2" v-if="project.ios">
                                    <ClientOnly>
                                        <i class="fab fa-apple mr-2" aria-hidden="true"></i> App Store
                                    </ClientOnly>
                                </a>

                                <a :href="project.chrome" target="_blank" class="btn mr-2" v-if="project.chrome">
                                    <ClientOnly>
                                        <i class="fab fa-chrome mr-2" aria-hidden="true"></i> Chrome Store
                                    </ClientOnly>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- row -->
    
</template>

<script>

    export default {
    name: 'Project',
    props: {
        project: Object
    }
}
</script>

<style scoped>
    .card h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 2.5rem
    }
    .card {
        background-color: #202945;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        margin-bottom: 25px;
    }

    .btn {
        background-color: #0f1526;
    }

    .btn:hover {
        background-color: #0f1526;
    }

    @media screen and (max-width: 768px) {
        .project-img {
            width: 25%;
            margin-bottom: 20px;
        }
    }
</style>