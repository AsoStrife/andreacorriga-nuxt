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
            pageSize: 20,
            querySearch: '',
            selectedOption: 'all'
        }
    },
    getters: {
		// getMovies: (state) => state.movies
	},

    actions: {
        async getMovies(loadMore = false) {

            if(!loadMore) {
                this.reset()
            }

            let response = ( await axios.get(constants.strapi.film + this.getQuery())).data
            
            this.movies = loadMore ? this.movies.concat(response.data) : response.data

        
            this.pageCount = response.meta.pagination.pageCount
        },
        getQuery() {
            let query = {
                pagination: {
                    page: this.page,
                    pageSize: this.pageSize
                },
                sort: ['title']
            }

            let filters = {
                filters: {}
            }

            if(this.querySearch != ''){
                
                filters.filters.title = {
                    $contains: this.querySearch,
                }
                    
            }
            
            filters.filters = {...filters.filters, ...this.getOwnedFilter() }

            query = { ...query, ...filters }

            return qs.stringify(query, { encodeValuesOnly: true } )
        },
        getOwnedFilter() {
            if(this.selectedOption == 'owned') {
                return { 
                    $or: [
                        {
                            dvd: {
                                $eq: true
                            },
                        },
                        {
                            bluray: {
                                $eq: true
                            }
                        }, {
                            bluray4k: {
                                $eq: true
                            }
                        }
                    ]
                }
            }
            else {
                return {}
            }
        }, 
        addPageCount() {
            this.pageCount++
        },
        addPage() {
            this.page++
        },
        reset() {
            this.resetPageCount()
            this.resetMovies()
            this.resetPage()
            this.resetPageSize()
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
        },
        setQuerySearch(str) {
            this.querySearch = str
        }, 
        setSelectedOption(str) {
            this.selectedOption = str
        }
    }
})