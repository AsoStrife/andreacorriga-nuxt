

<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Movies</h1>
            </div>
        </div>

        <div class="row">

            <div class="col-lg-3 col-md-3 mb-3" v-for="movie in movies" v-bind:key="movie">
                <div class="card" style="">
                    <img class="card-img-top img-fluid" 
                        :src="'https://image.tmdb.org/t/p/w500/' + movie.attributes.image" 
                        alt="Card image cap"
                        >
                    <div class="card-body">
                        <h1>{{ movie.attributes.title }}</h1>
                    </div>

                    <div class="card-footer">
                        <ClientOnly>
                            <img src="/icons/4k_plus_black_24dp.svg" class="mr-2" title="4k Blu ray" v-if="movie.attributes.bluray4k" />
                            <img src="/icons/hd_black_24dp.svg" class="mr-2" title="Blu ray" v-if="movie.attributes.bluray" />
                            <img src="/icons/sd_black_24dp.svg" class="mr-2" title="DVD" v-if="movie.attributes.dvd"/>
                            <img src="/icons/visibility_black_24dp.svg" class="mr-2"  title="Movie seen" v-if="movie.attributes.seen"/>
                        </ClientOnly>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'

    export default {
        name: 'Movies Main',
        data() {
            return {
                movies: [],
                page: 1,
                pageCount: 1,
                pageSize: 20,
                el: ref<HTMLElement | null>(null)
            }
        }, 
        async mounted() {
            let query = qs.stringify(
                {
                    pagination: {
                        page: this.page,
                        pageSize: this.pageSize
                    },
                    sort: ['title']
                }, {
                    encodeValuesOnly: true,
                })

            let response = ( await axios.get(constants.strapi.film + query)).data

            this.movies = response.data
            this.pageCount = response.meta.pagination.pageCount

            this.scroll()
        },
        methods: {
            scroll () {
                window.onscroll = () => {

                    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight > document.documentElement.offsetHeight - 1

                    if (bottomOfWindow) {
                        console.log(this.page)
                        console.log(this.pageCount)
                        if(this.page < this.pageCount){
                            console.log("dentro")
                            this.page = this.page + 1 
                            this.loadMore()
                        }
                        
                    }
                }
            }, 
            async loadMore() {
                let query = qs.stringify(
                {
                    pagination: {
                        page: this.page,
                        pageSize: this.pageSize
                    },
                    sort: ['title']
                }, {
                    encodeValuesOnly: true,
                })

                let response = ( await axios.get(constants.strapi.film + query)).data

                this.movies = this.movies.concat(response.data)
                console.log(this.movies)
                this.pageCount = response.meta.pagination.pageCount
            }
        }
    }
</script>

<style scoped>
.card {
    background-color: #202945;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    min-height: 265px;
}

.card h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.8rem;
    font-weight: 900;
    text-align: left;
}

.card p {
    font-size: 0.8rem;
}

.card img {
    background-color:white; 
    border-radius:5px;
}

.card-footer {
    padding: .55rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 0px !important;
}
</style>