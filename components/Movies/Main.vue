

<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>Movies</h1>
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
                moviesStore: useMoviesStore() 
            }
        }, 
        async mounted() {
            this.isLoading = true
            await this.moviesStore.getMovies(false)
            this.isLoading = true

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
                            this.moviesStore.addPage()

                            this.isLoading = true
                            await this.moviesStore.getMovies(true)
                            this.isLoading = false
                        }
                        
                    }
                }
            }
        }
    }
</script>

