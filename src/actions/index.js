import axios from 'axios';
const Root_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function(dispatch){
	//submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
	//update state
	//save JWT token
	//redirect to route '/feature'
     console.log("hello");
	//if request is badd...
	//show error to the user

	}
	
}