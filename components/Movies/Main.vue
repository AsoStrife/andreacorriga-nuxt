

<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Movies</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 mb-4">
                <input type="text" class="form-control" v-model="querySearch" placeholder="Search movie by title" @keydown="search">
            </div>
        </div>

        <div class="row">
            <MoviesMovie v-for="movie in moviesStore.movies" v-bind:key="movie" :movie="movie"/>
        </div>
        
        <Loading :visible="isLoading" />
        
    </div>
</template>

<script>

    import { useMoviesStore } from '@/stores/movies.js'

    export default {
        name: 'Movies Main',
        data() {
            return {
                isLoading: false,
                moviesStore: useMoviesStore(),
                querySearch: '',
                typingTimeout: null
            }
        }, 
        async mounted() {
            this.isLoading = true
            await this.moviesStore.getMovies(false)
            this.isLoading = false

            this.scroll()
        },
        unmounted() {
            this.moviesStore.resetMovies()
            this.moviesStore.resetPage()
            this.moviesStore.resetPageCount()
        },
        methods: {
            scroll () {
                window.onscroll = async () => {

                    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight > document.documentElement.offsetHeight - 1

                    if (bottomOfWindow) {
                        if(this.moviesStore.isScrollable()){
                            
                            if(this.moviesStore.pageCount > this.moviesStore.page){
                                console.log("dentro")
                                this.moviesStore.addPage()

                                this.isLoading = true
                                await this.moviesStore.getMovies(true)
                                this.isLoading = false
                            }
                        }
                        
                    }
                }
            },
            search(str) {
                // Cancella il timeout precedente
                clearTimeout(this.typingTimeout)
                
                this.typingTimeout = setTimeout( async () => {
                    this.moviesStore.setQuerySearch(this.querySearch)
                    await this.moviesStore.getMovies(false)
                }, 500)
            }
        }
    }
</script>

<style scoped>
    input.form-control {
        background-color: #202945;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        color: white;
    }

    .btn {
        background-color: #0f1526;
        color: rgba(255, 255, 255, 0.6);
    }

    .btn:hover {
        background-color: #0f1526;
        color: white;
    }

    @media screen and (max-width: 768px) {
        .project-img {
            width: 25%;
            margin-bottom: 20px;
        }
    }
</style>