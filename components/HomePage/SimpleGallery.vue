<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-md-12">
                <h1>Gallery</h1>
                <p>I'm not a guy who takes a lot of shots, so finding the right photos to put here has been a challenge. Reading
                    a wall of text can be boring, so I'll leave here a couple of photos that can briefly sum up my love for my
                    cats, my passions and can show you my unphotogenic face.</p>

            </div>
        </div>
        <div class="row" id="home-gallery">
            <div class="col-4 col-lg-2 col-md-2" v-for="(image, key) in constants.gallery" :key="key">
                <a :href="image.largeURL" :data-pswp-width="image.width" :data-pswp-height="image.height" target="_blank"
                    rel="noreferrer">
                    <img :src="image.thumbnailURL" alt="" class="img-thumbnail img-fluid d-block mb-4" />
                    <span class="pswp-caption-content"> <span v-html="image.caption" /> </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// https://photoswipe.com/getting-started/
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

export default {
    name: 'SimpleGallery',
    components: {
        PhotoSwipeDynamicCaption
    },
    setup(props) {
        return {
            imagesData: props.images,
        };
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#home-gallery',
                children: 'a',
                pswpModule: PhotoSwipe,
            })


            const captionPlugin = new PhotoSwipeDynamicCaption(this.lightbox, {
                type: 'aside',
            })

            this.lightbox.init()
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy()
            this.lightbox = null
        }
    },
    methods: {},
};
</script>
