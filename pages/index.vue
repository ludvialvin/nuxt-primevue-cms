<template>
    <div class="layout-content">
        <div class="dashboard">
            <div class="content">
                <Breadcrumb/>
                <div class="content_wrapper">
                    <img alt="Vue logo" src="~/assets/primevue-logo.png">
                    <HelloWorld msg="Welcome to Your PrimeVue + NuxtJS App"/>
                    <form @submit.prevent="greet">
                        <InputText type="text" v-model="text"/>
                        <Button type="submit" label="Submit"/>
                        <h3>{{message}}</h3>
                    </form>
                </div>
            </div>
        </div>
        <Toast/>
    </div>
</template>

<script>
    import HelloWorld from '~/components/HelloWorld.vue'
    import Breadcrumb from '~/components/Breadcrumb.vue'

	export default {
		data() {
			return {
				message: null,
                text: null
			}
		},
		methods: {
			greet() {
				this.$toast.add({severity: 'info', summary: 'Hello '  + this.text});
                this.message = 'Hello ' + this.text;
			}
		},
		components: {
			HelloWorld, Breadcrumb
        },
        middleware : 'auth'
	}
</script>
