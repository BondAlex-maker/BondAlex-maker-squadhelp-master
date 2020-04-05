import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import styles from './LoginPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {authActionLogin, clearAuth, clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import _ from "lodash";
import Error from "../../components/Error/Error";

const LoginPage = (props) => {
  const {authClear, error, loginRequest} = props;
  const handleSubmit = (values) => {
    loginRequest(_.pick(values, [
      'email',
      'password',
    ]));
  };

  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.loginContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` } alt="logo"/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/registration'
                  style={ {textDecoration: 'none'} }><span>Sign_up</span></Link>
          </div>
        </div>
        <div className={ styles.loginFormContainer }>
          <div className={ styles.loginForm }>


          { error && <Error data={ error.data } status={ error.status }
                              clearError={ authClear }/> }
          <h2>LOGIN TO YOUR ACCOUNT</h2>

          <LoginForm onSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );

};


const mapStateToProps = (state) => {
  const {auth} = state;
  return {auth};
};


const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
    loginRequest: (data) => dispatch(authActionLogin(data)),
    authClear: () => dispatch(clearAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);