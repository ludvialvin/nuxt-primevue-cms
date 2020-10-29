const strategy = 'local';
const interval = 1801000;

export default ({app, store, $axios, $auth, $router}) => {
	function refreshingToken (){
		var myInterval = setInterval(function () {
	        if ($auth.$state.loggedIn) {
	        	const currRefreshToken = app.$auth.getRefreshToken(strategy)
		        try {
		        	clearInterval(myInterval);
			    	$axios.post('secure/auth/refresh', { 'refreshToken': currRefreshToken })
			    	.then((resp) => {
						if(resp.data.status === 'success'){
							$auth.setToken('local', 'Bearer ' + resp.data.access_token)
							$auth.setRefreshToken('local', resp.data.refresh_token)
							$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)
							$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)
							refreshingToken()
						}
					})
			    } catch (error) {
			      //$auth.logout()
			      //$router.push('/login')
			      throw new Error(error)
			    }
	        }     
	    }, interval);
	}
	refreshingToken()
}	