// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'msapplication-TileColor', content: '#163a5f' },
                { name: 'msapplication-TileImage', content: '/img/favicon/ms-icon-144x144.png' },
                { name: 'theme-color', content: '#ffffff' }
            ],
            link: [
                { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
                { rel: 'stylesheet', type: 'text/css', href: '/css/base.css' },
                { rel: 'stylesheet', type: 'text/css', href: '/css/animate.css' },
                { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/favicon/apple-icon-57x57.png' },
                { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/favicon/apple-icon-60x60.png' },
                { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/favicon/apple-icon-72x72.png' },
                { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/favicon/apple-icon-76x76.png' },
                { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/favicon/apple-icon-114x114.png' },
                { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/favicon/apple-icon-120x120.png' },
                { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/favicon/apple-icon-144x144.png' },
                { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/favicon/apple-icon-152x152.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicon/apple-icon-180x180.png' },
                { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicon/android-icon-192x192.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon/favicon-96x96.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon/favicon-16x16.png' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'manifest', href: '/img/favicon/manifest.json' }
            ],
            script: [
                { src: '/js/jquery.min.js' },
                { src: '/js/bootstrap.min.js' },
                { src: '/js/fontawesome-all.min.js' },
                {
                    "src": 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                    "data-ad-client": 'ca-pub-0339695948238346',
                    "async": true,
                    "crossorigin": "anonymous"
                },
                // { src: '/js/adsense.js' },
            ]
        }
    },
    modules: [
        'nuxt-simple-sitemap'
    ],    
    plugins: [
        '@/plugins/vue-gtag',
        "@/plugins/usePinia"
    ],
    ssr: true,
    site: {
        url: 'https://andreacorriga.com',
    },
    runtimeConfig: {
        public: {
            gtagId: 'G-2YXJPV5HWX',
        }
    }
})