import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        config: {
            id: 'G-2YXJPV5HWX3',
        },
    }, nuxtApp.$router)
})