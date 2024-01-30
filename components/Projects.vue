<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Projects</h1>
            </div>
        </div>
        <p>As a programming enthusiast, I often launch new projects to experiment with new technologies/frameworks and try to solve small everyday problems. This page shows the projects that are currently active.</p>
        <div v-for="project in this.constants.projects" :key="project.name">
            <Project :project="project"/>
        </div>

        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Relevant Repository</h1>
                <p>Not all projects are born to be innovative and shake up the community. Sometimes you just need to write code. <br> My <b><a :href="github.url" target="_blank" :title="github.name">Github Profile</a></b> contains several repositories, some of them worth mentioning... others a bit less. <br> Here is a short list of noteworthy ones:</p>
                <ul>
                    <li v-for="repo in this.constants.repositories" :key="repo.name">
                        <a :href="repo.url" target="_blank" :title="repo.name">{{repo.name}}</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import constants from "../constants.js"
    import Project from "./Projects/Project.vue";

    export default {
        name: 'Projects',
        components: {
            Project
        },
        data() {
            return {
                constants: constants,
                github: constants.social.filter(s => s.name == 'Github')[0]
            }
        }
    }
</script>

<style scoped>
    

</style>