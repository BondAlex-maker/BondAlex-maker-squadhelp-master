import React from 'react';
import styles from './RegistrationForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput
    from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchems';

class RegistrationForm extends React.Component {



    render() {
        const {handleSubmit, submitting} = this.props;

        return (

            <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <Field
                        name='firstName'
                        wrapperClassName={styles.inputContainer}
                        errorClassName={styles.fieldWarning}
                        inputDefaultClassName={styles.input}
                        inputNotValid={styles.notValid}
                        inputValid={styles.valid}
                        component={FormInput}
                        type='text'
                        label='First name'
                    />
                    <Field
                        name='lastName'

                        wrapperClassName={styles.inputContainer}
                        errorClassName={styles.fieldWarning}
                        inputDefaultClassName={styles.input}
                        inputNotValid={styles.notValid}
                        inputValid={styles.valid}
                        component={FormInput}
                        type='text'
                        label='Last name'
                    />
                </div>
                <div className={styles.row}>
                    <Field
                        name='displayName'

                        wrapperClassName={styles.inputContainer}
                        errorClassName={styles.fieldWarning}
                        inputDefaultClassName={styles.input}
                        inputNotValid={styles.notValid}
                        inputValid={styles.valid}
                        component={FormInput}
                        type='text'
                        label='Display Name'
                    />
                    <Field
                        name='email'
                        wrapperClassName={styles.inputContainer}
                        errorClassName={styles.fieldWarning}
                        inputDefaultClassName={styles.input}
                        inputNotValid={styles.notValid}
                        inputValid={styles.valid}
                        component={FormInput}
                        type='text'
                        label='Email Address'
                    />
                </div>
                <div className={styles.row}>
                    <Field
                        name='password'
                        wrapperClassName={styles.inputContainer}
                        errorClassName={styles.fieldWarning}
                        inputDefaultClassName={styles.input}
                        inputNotValid={styles.notValid}
                        inputValid={styles.valid}
                        component={FormInput}
                        type='password'
                        label='Password'
                    />
                    <Field
                        name='confirmPassword'
                        wrapperClassName={styles.inputContainer}
                        errorClassName={styles.fieldWarning}
                        inputDefaultClassName={styles.input}
                        inputNotValid={styles.notValid}
                        inputValid={styles.valid}
                        component={FormInput}
                        type='password'
                        label='Password confirmation'
                    />
                </div>
                <div className={styles.choseRoleContainer}>
                    <Field name='role' type='radio' value={CONSTANTS.CUSTOMER}
                           strRole='Join As a Buyer'
                           infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                           component={RoleInput} id={CONSTANTS.CUSTOMER}/>
                    <Field name='role' type='radio' value={CONSTANTS.CREATOR}
                           strRole='Join As a Creative'
                           infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                           component={RoleInput} id={CONSTANTS.CREATOR}/>
                </div>
                <div className={styles.termsOfService}>
                    <Field
                        name='agreeOfTerms'
                        classes={{
                            container: styles.termsOfService,
                            warning: styles.fieldWarning,
                        }}
                        id='termsOfService'
                        component={AgreeTermOfServiceInput}
                        type='checkbox'
                    />

                </div>
                <button type='submit' disabled={submitting}
                        className={styles.submitContainer}>
                    <span className={styles.inscription}>Create Account</span>
                </button>
            </form>
        );
    }
}


export default reduxForm({
    form: 'login',
    validate: customValidator(Schemes.RegistrationSchem),
})(RegistrationForm);