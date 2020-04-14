import React from 'react';
import {withRouter} from 'react-router';
import styles from './SignInPage.module.css';
import SignInForm from '../../components/LoginForm/LoginForm.js';

const SignInPage = props => {
	return (
			<div className={ styles.container }>
				<SignInForm/>
			</div>
	);
};

export default withRouter(SignInPage);