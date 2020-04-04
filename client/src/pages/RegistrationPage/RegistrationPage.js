import React from 'react';
import Logo from '../../components/Logo';
import RegistrationForm
    from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authActionRegister, clearAuth, clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Articles from "../../components/Articles/Articles";
import Error from "../../components/Error/Error";
import _ from 'lodash'

const RegistrationPage = (props) => {
    const {initialValues, authClear, error, signUpUser} = props;
    const handleSubmit = (values) => {
        signUpUser(_.pick(values, [
            'firstName',
            'lastName',
            'displayName',
            'email',
            'password',
            'role',
        ]));
    };


    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`}/>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login'
                              style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <div className={styles.signUpFormContainer}>
                    {error && <Error data={error.data} status={error.status}
                                     clearError={authClear}/>}
                    <div className={styles.headerFormContainer}>
                        <h2>
                            CREATE AN ACCOUNT
                        </h2>
                        <h4>
                            We always keep your name and email address private.
                        </h4>
                    </div>

                    <RegistrationForm onSubmit={handleSubmit} initialValues={{
                        role: CONSTANTS.CUSTOMER,
                    }}/>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.articlesMainContainer}>
                    <Articles/>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => state.auth;

const mapDispatchToProps = dispatch => ({
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
        authClear: () => dispatch(clearAuth()),
        signUpUser: data => dispatch(authActionRegister(data)),

    });

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);