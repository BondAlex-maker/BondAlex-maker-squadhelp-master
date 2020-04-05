import React from 'react';
import styles from './LoginForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchems';


class LoginForm extends React.Component{




  render () {
    const {handleSubmit, submitting} = this.props;
    return (

        <form onSubmit={ handleSubmit}>
          <Field
            name='email'
            wrapperClassName={styles.inputContainer}
            errorClassName={styles.fieldWarning}
            inputNotValid={styles.notValid}
            inputValid={styles.valid}
            component={ FormInput }
            type='text'
            label='Email Address'
          />
          <Field
            name='password'
            wrapperClassName={styles.inputContainer}
            errorClassName={styles.fieldWarning}
            inputNotValid={styles.notValid}
            inputValid={styles.valid}
            component={ FormInput }
            type='password'
            label='password'
          />
          <button type='submit' disabled={ submitting }
                  className={ styles.submitContainer }>
            <span className={ styles.inscription }>{ 'LOGIN' }</span>
          </button>
        </form>
    );
  }
}


export default reduxForm({
  form: 'login',
  validate: customValidator(Schemes.LoginSchem),
})(LoginForm);