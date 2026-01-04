<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>About me</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 col-md-12">
                <p>Welcome aboard! I'm <strong>Andrea Corriga</strong>, <strong>Ph.D.</strong> and a <strong>Software
                        Engineer</strong> currently living in Sardinia, Italy. You can find me on social networks and in
                    games under the username <strong>AsoStrife</strong>.</p>

                <p>I'm {{ currentAge }} years old and have several passions, including sports, music, video games and
                    programming. I regularly train in my personal home gym, go swimming, and I've been playing electric
                    guitar since I was eleven, very sporadically, and, to be honest, I still suck at it; it's a noisy
                    hobby I enjoy despite the lack of talent. I discovered programming when I was eight while attempting
                    to build my first website. My very first project was a simple Pokémon fan site created with
                    FrontPage 2003: it used a single image tiled as the background and featured the message (in Italian)
                    "Benvenuti sul più grande sito di Pokémon del mondo!!" — "Welcome to the world's largest Pokémon
                    site!!". My plans to publish it online were halted when I encountered FTP credentials, which I
                    didn't understand at the time.</p>
            </div>
            <div class="item col-lg-3 d-none d-lg-block">
                <img :src="constants.img.profile_chocobo" class="img-fluid" alt="andrea-corriga-asostrife-paint"
                    title="andrea-corriga-asostrife-paint">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p>My favourite video game is <strong>Final Fantasy VII</strong>; I have a long-standing passion for the
                    Final Fantasy series. At sixteen I launched <strong><a href="http://ffstory.it"
                            target="_blank">FFStory</a></strong> (Final Fantasy Story), a site that collected guides,
                    walkthroughs and discussions about Final Fantasy and Kingdom Hearts. Despite my early inexperience,
                    the site grew to over 10k unique monthly visitors, supported a forum with around 300 active users,
                    hosted dozens of live chat participants, and gathered more than 16k likes on Facebook. I've
                    reuploaded the site for fun at <a href="http://ffstory.it" target="_blank"
                        title="FFStory">http://ffstory.it</a>.</p>

                <p><small><i class="fas fa-info-circle mr-2"></i> At the time I authored the Final Fantasy VII guides
                        and borrowed content from the 1997 official guide. Because of my age and limited experience back
                        then, I did not always verify the sources of contributions made by others; as a result, some
                        content may have been copied from sources that are still unknown to me.</small></p>
            </div> <!-- ./ item col -md-12 -->

        </div> <!-- ./ row -->

    </div>
</template>

<script>


export default {
    name: 'Introduction',
    props: {
    },
    components: {
    },
    methods: {
        getAge(birthday) {
            const now = Date.now();
            const ageDifMs = now - birthday.getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    data() {
        return {
            currentAge: 0
        }
    },
    mounted() {
        this.currentAge = this.getAge(new Date(1993, 8, 21))
    }
}
</script>