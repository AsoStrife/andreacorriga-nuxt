<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-md-12">
                <h1>Gallery</h1>
                <p>I'm not someone who takes many photos, so choosing what to include here was a challenge. Rather than
                    a wall of text, I've added a few photos that briefly capture my cats, my interests, and my
                    occasionally unphotogenic face.</p>

            </div>
        </div>
        <div class="row" id="home-gallery">
            <div class="col-4 col-lg-2 col-md-2" v-for="(image, key) in constants.gallery" :key="key">
                <a :href="image.largeURL" :data-pswp-width="image.width" :data-pswp-height="image.height"
                    target="_blank" rel="noreferrer">
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
