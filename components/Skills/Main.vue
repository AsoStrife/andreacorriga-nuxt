<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-12">
                <h1>Skills</h1>
                <p>Describing one's skills is always a delicate task. I aim to be clear and accurate: the items below
                    reflect technologies I've used in projects that reached production and areas where I have real,
                    practical experience.</p>

                <p><strong>In brief, I'm quite good in:</strong></p>
                <ul class="list-unstyled service-list">
                    <li><i class="fas fa-check"></i> Node.js developer (backend & frontend): extensive experience
                        building REST APIs, server-side applications and frontend integrations using Vue, Bootstrap and
                        Tailwind.</li>
                    <li><i class="fas fa-check"></i> Full-stack web application development and REST services with PHP
                        using <strong>CodeIgniter</strong>.</li>
                    <li><i class="fas fa-check"></i> Front-end development with Vue.js, modern JavaScript and responsive
                        UI frameworks.</li>
                    <li><i class="fas fa-check"></i> Cross-platform applications (Android, iOS, Windows, macOS, Linux)
                        using <strong>Framework7</strong>, Capacitor, Cordova, Electron and Vite.</li>
                    <li><i class="fas fa-check"></i> Developed Telegram bots with a few thousand monthly active users;
                        initially built with PHP and increasingly implemented with Node.js.</li>
                    <li><i class="fas fa-check"></i> Machine Learning and Deep Learning: several years of hands-on
                        experience during my Ph.D. My thesis <a :href="constants.urls.iris_thesis"
                            target="_blank"><strong>Artificial Intelligence Approaches Applied To The Financial
                                Forecasting Domain</strong></a> describes part of this work. Today my main focus is on
                        generative AI, large language models (LLMs) and agent systems.</li>
                </ul>

                <p><strong>What am I studying at the moment?</strong></p>
                <p>I enjoy learning and taking on new technical challenges. Currently I am focusing on generative AI,
                    LLMs and agent-based systems, while continuing to deepen my practical skills with Node.js, Vue and
                    Strapi for building APIs and services. I'm also actively exploring game development: 2D games (I
                    contribute to the rpgjs community) and 3D games using Unreal Engine. I have studied reinforcement
                    learning in the past as part of my academic work.</p>

                <p><strong>Speaking in terms of keywords, here are my work experiences in recent years:</strong></p>
                <span v-for="skill in constants.skills" :key="skill">
                    <span class="skill-tag"> {{ skill }} </span>
                </span>
            </div> <!-- ./ item col -md-12 -->
        </div> <!-- ./ row -->
    </div>
</template>

<style scoped>
.skill-tag:hover {
    background: #202945;
}

.skill-tag {
    -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    padding: 6px 30px;
    display: inline-block;
    margin-right: 10px;
    border: 1px solid #f5f5f5;
    font-weight: 500;
    margin-bottom: 15px;
    font-size: 16px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
</style>