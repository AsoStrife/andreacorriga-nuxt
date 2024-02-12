import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import axios from 'axios'
import qs from 'qs'

export const useMoviesStore = defineStore('moviesStore', {

    state: () => {
        return {
            movies: [],
            page: 1,
            pageCount: 1,
            pageSize: 20
        }
    },
    getters: {
		// getMovies: (state) => state.movies
	},

    actions: {
        async getMovies(loadMore = false) {
            
            let response = ( await axios.get(constants.strapi.film + this.getQuery())).data
            
            this.movies = loadMore ? this.movies.concat(response.data) : response.data

            this.pageCount = response.meta.pagination.pageCount
        },
        getQuery() {
            return qs.stringify(
                {
                    pagination: {
                        page: this.page,
                        pageSize: this.pageSize
                    },
                    sort: ['title']
                }, {
                    encodeValuesOnly: true,
                })
        },
        addPageCount() {
            this.pageCount++
        },
        addPage() {
            this.page++
        },
        resetPageCount() {
            this.pageCount = 1
        },
        resetMovies() {
            this.movies = []
        },
        resetPage() {
            this.page = 1
        }, 
        resetPageSize() {
            this.pageSize = 20
        }, 
        isScrollable() {
            return this.page < this.pageCount
        }
    }
})