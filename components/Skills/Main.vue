<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-12">
                <h1>Skills</h1>
                <p>Talking about skills is always a difficult subject for a Software Engineer. On the one hand there is the desire not to seem too inexperienced, on the other hand I don't want to exaggerate by talking about all the technologies I have tried over the time in which I don't feel confident. I have therefore decided to put in this section everything that I have used at least once to create a project that has gone into production. </p>

                <p><strong>In brief, I'm quite good in:</strong></p>
                <ul class="list-unstyled service-list">
                    <li><i class="fas fa-check"></i> Full Stack Web-App development and Rest Services with PHP using <strong>Codeigniter</strong>; </li>
                    <li><i class="fas fa-check"></i> Developing microservices with Java using <strong>Springboot</strong>; </li>
                    <li><i class="fas fa-check"></i> Front-End development with Vue, Bootstrap and  JS;</li>
                    <li><i class="fas fa-check"></i> Cross-Platform App (Android, iOS, Windows, MacOs, Linux) with <strong>Framework 7</strong> as Front-End Framework and Capacitor, Cordova, Electron and Vite as builder tools;</li>
                    <li><i class="fas fa-check"></i> I've made a few Telegram Bot with a couple of thousand active users per month. I've used PHP, but I would like to try something with Node.  </li>
                    <li><i class="fas fa-check"></i> Machine Learning and Deep Learning as been part of my life per more than 3 year of my Ph.D. journey. My Thesis entitled <a :href="constants.urls.iris_thesis" target="_blank"><strong>Artificial Intelligence Approaches Applied To The Financial Forecasting Domain</strong></a> can be a starting point to better understand what I know about it.  </li>
                </ul>

                <p><strong>What am I studying at the moment? </strong></p>
                <p>I am constantly looking for new challenges in terms of technologies to learn. At the moment, I am working on several fronts: at work I'm learning more about microservices architecture made with Java and Springboot. In  my free time I'm learning more about Vue as Front-End Framework and Strapi CMS as Node Framework to make rest services. On the other hand, in the near future I also want to explore more topics such as Reinforcement Learning and Solidity to create Smart Contracts. <br> I have recently created my own shitcoin called: <router-link to="strife_coin" title="Strife Coin">Strife Coin (ASO)</router-link>.  </p>
                
                <p><strong>Speaking in terms of keywords, here are my work experiences in recent years:</strong></p>
                <span v-for="skill in constants.skills" :key="skill">
                    <span class="skill-tag"> {{skill}} </span>
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