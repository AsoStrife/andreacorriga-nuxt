<template>
    <div class="intro">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3">
                    
                    <img class="rounded-circle img-fluid avatar d-block wow fadeInLeft" @mouseover="mouseOver()" @mouseleave="mouseLeave()"
                        :src="profilePic" 
                        alt="Andrea Corriga photo" 
                        title="andrea-corriga-img-profile">
                    
                </div>
                <div class="col-12 col-md-9 row-names">
                    <div style="margin-top:6%; margin-left:5%;">
                        <h1 class="name wow fadeInRight" data-wow-delay="0.1s"> {{ constants.main.full_name }} </h1>
                        <div class="title wow fadeInRight" data-wow-delay="0.5s"> {{ constants.main.slogan }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Intro',
        data() {
            return {
                profilePic: constants.img.profile
            }
        },
        methods: {
            mouseOver: function() {
                profilePic = constants.img.profile_real
            },
            mouseLeave: function() {
                profilePic = constants.img.profile
            }
        }
        
    }
</script>

<style scoped>
.avatar {
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid #202945;
    /*border: 3px solid #FFF; */

}

.header .name {
    letter-spacing: 0.5px;
    font-family: Kiona;
}

.header .title {
    font-weight: 300;
    margin-bottom: 30px;
    font-family: Kiona;

}

@media screen and (max-width: 768px) {
    .header .avatar {
        max-width: 150px;
        margin-left:auto;
        margin-right: auto;
    }

    .header .name {
        font-size: 40px;
    }
    .header .title {
        font-size: 20px;
    }

    .row-names {
        text-align: center;
    }

    .cv-telegram {
        margin-top: 25px;
        text-align: center;
    }
}

@media screen and (min-width: 769px) {
    .cv-telegram {
        text-align: right;
    }

    .header .name {
        font-size: 64px;
    }
    .header .title {
        font-size: 28px;
    }
}

@media screen and (min-width: 577px) and (max-width: 992px) {
    .header .name {
        font-size: 32px;
    }
    .header .title {
        font-size: 20px;
    }
}

.header a {
    color: #fff;    
}

.header .top-bar {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
}

.header .social {
    margin-bottom: 0;
}

.header .social a {
    color: #FFF;
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

.header .social a:hover {
    color: #fff;
    background-color: #202945;
}


.header .contact-info,
.header .intro {
    background: #202945;
    font-size: 16px;
}
.header .intro {
    padding-top: 90px;
    padding-bottom: 15px;
    position: relative;
    border-width: 3px 0 0;
}
</style>