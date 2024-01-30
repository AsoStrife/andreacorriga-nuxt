<template>
    <div class="row" :id="galleryID">
        <div class="col-4 col-lg-2 col-md-2" v-for="(image, key) in imagesData" :key="key">
            <a
                :href="image.largeURL"
                :data-pswp-width="image.width"
                :data-pswp-height="image.height"
                target="_blank"
                rel="noreferrer"
            >
                <img :src="image.thumbnailURL" alt="" class="img-thumbnail img-fluid d-block mb-4" />
                <span class="pswp-caption-content"> <span v-html="image.caption" /> </span>
            </a>
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
        props: {
            galleryID: String,
            images: Array,
        },
        setup(props) {
            return {
                imagesData: props.images,
            };
        },
        mounted() {
            if (!this.lightbox) {
                this.lightbox = new PhotoSwipeLightbox({
                    gallery: '#' + this.$props.galleryID,
                    children: 'a',
                    pswpModule: PhotoSwipe,
                });
                

                const captionPlugin = new PhotoSwipeDynamicCaption(this.lightbox, {
                    type: 'aside',
                });

                this.lightbox.init();
            }
        },
        unmounted() {
            if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
            }
        },
            methods: {},
        };
</script>
