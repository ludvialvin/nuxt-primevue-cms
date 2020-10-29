<template>
	<div class="container-login100">
		<div class="wrap-login100">
			<form method="post" @submit.prevent="login">
				<span class="login100-form-title p-b-48">
					<i class="pi pi-apple"></i>
				</span>
				<div class="p-float-label p-mb-2 input-b-bottom">
					<InputText id="username" type="text" class="input100" v-model="username" />
					<label for="username">Username</label>
					<span class="input100-bottom"></span>
				</div>
				<div class="p-float-label p-mb-2 input-b-bottom">
					<InputText id="password" type="password" class="input100" v-model="password" />
					<label for="password">Password</label>
				</div>
				<div class="container-login100-form-btn">
					<div class="wrap-login100-form-btn">
						<div class="login100-form-bgbtn"></div>
						<button class="login100-form-btn">
							Login
						</button>
					</div>
				</div>
			</form>
			<Toast/>
		</div>
  	</div>
</template>
<script>
import axios from 'axios'

export default {
	middleware : 'guest',
 	data()
	{
		return {
			username: '',
			password: ''
		}
 	},
 	methods : {
   		async login() {
			try {
				await this.$axios.post('/secure/auth/login', {
					username: this.username,
					password: this.password
				}).then((resp) => {
					if(resp.data.status === 'success'){
						this.$auth.setToken('local', 'Bearer ' + resp.data.access_token)
						this.$auth.setRefreshToken('local', resp.data.refresh_token)
						this.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)
						this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)
						this.$axios.post('/backend/v1/users', {
							username: this.username
						}).then((resp) => {
							this.$auth.setUser(resp.data[0]);
							this.$router.push('/')
						})
					}else{
						this.$toast.add({severity: 'info', summary: resp.data.message});
					}
				})
			} catch (e) {
				console.log(e)
				//e.response.data.message
				this.$toast.add({severity: 'info', summary: 'Gateway Timeout'});
			}
		}
 	}
}
</script>

<style>
.container-login100 {
	width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #f2f2f2;
}
.wrap-login100 {
	width: 390px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
}
.login100-form-title{
	display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
}
.p-b-48 {
    padding-bottom: 48px;
}
.login100-form-title i {
    font-size: 60px;
}
.validate-input {
    position: relative;
}
.wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
}
.container-login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
}
.wrap-login100-form-btn {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
}
.login100-form-bgbtn {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    background: #a64bf4;
    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
    top: 0;
    left: -100%;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
.login100-form-btn {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
	height: 50px;
	background: -webkit-linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
	background: linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);
	outline: none !important;
    border: none;
	background: transparent;
	cursor: pointer;
}
.input100 {
    font-family: Poppins-Regular;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: transparent;
	padding: 0 5px;
	outline: none;
    border: none;
}
.input-b-bottom {
	border-bottom: 2px solid #adadad;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgb(173, 173, 173);
}
.focus-input100::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #6a7dfe;
    background: -webkit-linear-gradient(to right, #21d4fd, #b721ff);
    background: -o-linear-gradient(to right, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to right, #21d4fd, #b721ff);
    background: linear-gradient(to right, #21d4fd, #b721ff);
}
.focus-input100::after {
    font-family: Poppins-Regular;
    font-size: 15px;
    color: #999999;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
body {
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
</style>
