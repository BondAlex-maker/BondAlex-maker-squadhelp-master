import React from 'react';
import {withRouter} from 'react-router';
import SignUpForm from '../../components/forms/SignUpForm';
import styles from './SignUpPage.module.scss';

const SignUpPage = (props) => {

	return (
			<div className={ styles.container }>
				<SignUpForm/>
			</div>
	);

};

export default withRouter(SignUpPage);