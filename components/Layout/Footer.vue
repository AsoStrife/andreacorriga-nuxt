<template>
    <footer class="footer text-center">
		<div class="container">
			<small class="copyright">
                Andrea Corriga (@Asostrife) &bull; 

                <a href="https://strifelab.com" title="Strifelab - Siti web, App Mobile, SEO a Cagliari ed in Sardegna" target="_blank">Made by Strifelab</a> &bull; 

                <router-link to="/privacy_policy" title="Privacy Policy">Privacy Policy</router-link> 
            </small>
		</div>
	</footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
.footer {
    padding: 20px 0 20px 0;
}

.footer a {
    color: rgba(255, 255, 255, 0.6);
}

</style>