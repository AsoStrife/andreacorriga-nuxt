<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Projects</h1>
            </div>
        </div>
        <p>As a programming enthusiast, I often launch new projects to experiment with new technologies/frameworks and
            try to solve small everyday problems. This page shows the projects that are currently active.</p>
        <div v-for="project in constants.projects" :key="project.name">
            <ProjectsProjectCard :project="project" />
        </div>

        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Relevant Repository</h1>
                <p>Not every project is meant to be groundbreaking or to shake up the community. Sometimes, the goal is
                    simply to write code, experiment, and learn. <br> My <b><a :href="github.url" target="_blank"
                            :title="github.name">GitHub Profile</a></b> hosts a variety of repositories—some
                    particularly noteworthy, others more modest, but all representing a part of my journey as a
                    developer. <br> Below is a curated selection of the most interesting projects:</p>

                <ul>
                    <li v-for="repo in constants.repositories" :key="repo.name">
                        <a :href="repo.url" target="_blank" :title="repo.name">{{ repo.name }}</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    data() {
        return {
            github: constants.social.filter(s => s.name == 'Github')[0]
        }
    }
}
</script>