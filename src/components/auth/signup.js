import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
	render() {
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

		return (
		  <form>
		    <fieldset className="form-group">
		      <label>Email:</label>
		      <input
            </fieldset>
		  </form>
		);
	}
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm']
}) Signup;