module.exports = {
    apps: [
        {
            name: 'andreacorriga-nuxt',
            port: '3002',
            // exec_mode: 'cluster',
            // instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}