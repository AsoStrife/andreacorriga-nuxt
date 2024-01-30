<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>About me</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <p> Welcome aboard foreigner, <br> I'm <strong>Andrea Corriga</strong> (obviously), <strong>Ph.D.</strong> and <strong>Software Engineer</strong> currently live in Sardinia, Italy. <br> You can find me on every social or videogame with the username <strong>AsoStrife</strong>.</p>

                <p> I'm a {{currentAge}} old boy with several passions including sports, music, videogames and programming. I regularly practice body building in my personal home gym, swimming and I have been playing the electric guitar since I was eleven. I approached the world of programming when I was 8 years old trying to make my first website with very poor results. My first attempt to make a website was a terrible Fanbase Pokémon site with only one image as background repeated on the X and Y axis and a text that said:<i>"Benvenuti sul più grande sito di pokemon del mondo!!"</i> translated: "Welcome to the world's largest Pokemon site!!" all done with with FrontPage 2003. My dreams of glory ended when I wanted to publish the site online, faced with so-called FTP credentials, which at the time I had no idea what they were.</p>
            </div>
            <div class="item col-lg-3 d-none d-lg-block">
                <img :src="constants.img.profile_chocobo" class="img-fluid" alt="andrea-corriga-asostrife-paint" title="andrea-corriga-asostrife-paint">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p>My favourite video game is <strong>Final Fantasy VII</strong> and in particular I love the Final Fantasy saga. Starting from this passion at the age of sixteen I launched my first website related to the world of Final Fantasy called <strong><a href="http://ffstory.andreacorriga.com" target="_blank">FFStory</a></strong> <small>(Final Fantasy Story)</small> which was a repository of guides, solutions and discussions regarding the various chapters of the Final Fantasy saga and Kingdom Hearts. Despite my inexperience, the site achieved a certain notoriety with more than 10k unique monthly views, 300 active users on the forum, dozens of users in the live chat and +16k likes on the Facebook page. I've reuploaded the site just for fun at <a href="http://ffstory.andreacorriga.com" target="_blank" title="FFStory">http://ffstory.andreacorriga.com </a>.</p>
                <p><small><i class="fas fa-info-circle mr-2"></i> At that time, I personally wrote the Final Fantasy VII guides, copying them from the 1997 official guide. Due to my young age I didn't check the sources and the contents inserted by the other contributors of the site, so as a disclaimer I say that some contents could have been copied from sources, up to this day, unknown to me.</small>
                </p>
            </div> <!-- ./ item col -md-12 -->
            
        </div> <!-- ./ row -->

        <div class="row">
            <div class="col-md-12">
                <h1>Gallery</h1>
                <p>I'm not a guy who takes a lot of shots, so finding the right photos to put here has been a challenge. Reading a wall of text can be boring, so I'll leave here a couple of photos that can briefly sum up my love for my cats, my passions and can show you my unphotogenic face.</p>
                <SimpleGallery galleryID="my-test-gallery" :images="images" />
                
            </div>
        </div>
    </div>
</template>

<script>

    import SimpleGallery from './SimpleGallery.vue';

    export default {
        name: 'Introduction',
        props: {
            constants: Object,
        },
        components: {
            SimpleGallery 
        },
        methods: {
            getAge(birthday) {
                var ageDifMs = Date.now() - birthday.getTime();
                var ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
        },
        data() {
            return {
                currentAge: Int32Array,
                images: this.constants.gallery,
            }
        },
        mounted() {
            this.currentAge = this.getAge( new Date(1993, 8, 21))
        }
    }
</script>

<style scoped>
    
</style>