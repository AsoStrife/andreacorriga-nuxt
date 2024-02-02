<template>
    <div class="page-nav-space-holder">
        <div id="page-nav-wrapper" class="page-nav-wrapper text-center">

            <div class="container d-none d-xl-block d-lg-block d-md-block">
                <ul id="page-nav" class="nav page-nav list-inline">
                    <span v-for="r in routes" :key="r.name">
                        <li class="nav-item">
                            <router-link :class="getLinkClass(r.path)" :to="r.path" :title="r.name">{{r.name}}</router-link> 
                        </li>
                    </span>
                </ul>
            </div>

            <nav class="navbar navbar-expand-lg navbar-dark d-block d-sm-none d-sm-block d-md-none">
                <a class="navbar-brand" href="#"></a>
                <button class="btn d-md-inline-block btn-block btn-navbar" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>  Show Menu
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <span v-for="r in routes" :key="r.name">
                            <li class="nav-item">
                                <router-link class="nav-link mobile-nav-link" data-toggle="collapse" data-target="#navbarText" :to="r.path" :title="r.name">
                                    {{r.name}}
                                </router-link>
                            </li>
                        </span>
                    </ul>
                </div>
            </nav>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageVue',
        data() {
            return {
                routes: constants.routes.filter(r => r.mainNav),
                router: useRouter()
            }
        },
        methods: {
            getLinkClass(currentPath){
                return currentPath == this.router.currentRoute.fullPath ? "nav-link active" : "nav-link"
            }
        }
    }
</script>

<style scoped>
/** Menù **/
.page-nav-space-holder {
    height: 80px;
}
.page-nav-wrapper {
    background: #202945;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    z-index: 1000;
    font-size: 1.25rem;
    font-family: 'Kiona';
    margin-bottom: 20px;
    position: relative;
}


.page-nav-wrapper a {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
}
.page-nav-wrapper .page-nav {
    margin: 0 auto;
    display: inline-block;
}
.page-nav-wrapper .page-nav li {
    margin-right: 30px;
    display: inline-block;
    background: 0 0;
}
.page-nav-wrapper .page-nav li:active,
.page-nav-wrapper .page-nav li:hover {
    background: 0 0;
}
.page-nav-wrapper .page-nav li a {
    color: rgba(255, 255, 255, 0.6);
    padding: inherit;
}
.page-nav-wrapper .page-nav li a:hover {
    color: #fff;
}
.page-nav-wrapper .page-nav li a:active,
.page-nav-wrapper .page-nav li a:focus,
.page-nav-wrapper .page-nav li a:hover {
    background: 0 0;
}
.page-nav-wrapper .page-nav li a.active {
    color: #fff;
    background: 0 0;
}

</style>