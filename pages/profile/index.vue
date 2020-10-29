<template>
    <div class="layout-content">
        <div class="dashboard">
            <div class="content">
                <Breadcrumb/>
                <img alt="Vue logo" src="~/assets/primevue-logo.png">
                <h2>asdasds</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '~/components/Breadcrumb.vue'

	export default {
        middleware : 'auth',
        components: {
			Breadcrumb
        }
	}
</script>

<style>
</style>
