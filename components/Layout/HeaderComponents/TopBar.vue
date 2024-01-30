<template>
    <div class="top-bar container-fluid">
        <div class="row">
            <ClientOnly>
                <div class="col-12 col-md-6">
                    <ul class="social list-inline">
                        
                        <span v-for="social in constants.social" :key="social.name">
                            <li class="list-inline-item">
                                <a :href="social.url" target="_blank" :title="social.name">
                                    <i :class="social.icon" aria-hidden="true"></i>
                                </a>
                            </li>
                        </span>
                    </ul>
                </div>
                
                <div class="col-12 col-md-6 cv-telegram">
                    <!-- <a class="btn mr-1" :href="telegram.url" target="_blank" :title="telegram.name"><i class="fas fa-paper-plane" aria-hidden="true"></i> Telegram</a> -->
                    <a class="btn" :href="constants.meta.cv" target="_blank">
                        <i class="fas fa-download" aria-hidden="true"></i> 
                        Curriculum Vitae </a>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
        props: {
        },
        data() {
            return {
                // telegram: constants.social.filter(s => s.name == 'Telegram')[0]
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
.list-inline-item:not(margin-right){
    margin-right: .5rem;
}

@media screen and (max-width: 768px) {
    .cv-telegram {
        margin-top: 25px;
        text-align: center;
    }
}

@media screen and (min-width: 769px) {
    .cv-telegram {
        text-align: right;
    }
}


.top-bar a {
    color: #fff;    
}

.top-bar {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
}

.top-bar .social {
    margin-bottom: 0;
}

.top-bar .social a {
    display: inline-block;
    text-align: center;
    width: 35px;
    height: 35px;
    -ms-border-radius: 50%;
    border-radius: 50%;
    background-clip: padding-box;
    padding-top: 4px;
    font-size: 16px;
    border: 1px solid #202945;
}

.top-bar .social a:hover {
    color: #fff;
    background-color: #202945;
}

</style>