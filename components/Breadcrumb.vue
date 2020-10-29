<template>
    <Breadcrumb :home="home" :model="bcItems" />
</template>

<script>
	export default {
		data() {
			//console.log(this.$nuxt.$route)
			const itemsList = {label: 'Dashboard', to: '/'};

			if(this.$nuxt.$route.fullPath != '/'){
				this.$store.commit('removeBreadcrumb')
				this.$store.commit('addBreadcrumb', itemsList)
				this.$store.commit('addBreadcrumb', {label: this.$nuxt.$route.name, to: this.$nuxt.$route.fullPath})
			}else{
				this.$store.commit('removeBreadcrumb')
				this.$store.commit('addBreadcrumb', itemsList)
			}
			return {
                home: {icon: 'pi pi-home', to: '/'},
				bcItems: this.$store.state.listBreadcrumb
			}
		}
	}
</script>