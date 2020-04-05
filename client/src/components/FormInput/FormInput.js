import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.sass'

const classNames = require('classnames');

const FormInput = (props) => {

    const {label, input, type, meta: {touched, error}, wrapperClassName, errorClassName, inputDefaultClassName,inputNotValid, inputValid} = props;
  const inputClassName = classNames( styles.input, {
    [inputValid || styles.valid]: touched && !error,
    [inputNotValid || styles.notValid]: touched && error,
  }, inputDefaultClassName );

    return (
        <div className={wrapperClassName}>
            <input {...input} placeholder={label} type={type}
                   className={inputClassName}/>
            {touched && error && <span className={errorClassName}>{error}</span>}
        </div>
    );
};
FormInput.propTypes = {
    wrapperClassName: PropTypes.string,
    errorClassName: PropTypes.string,
    inputDefaultClassName: PropTypes.string,
    inputNotValid: PropTypes.string,
    inputValid: PropTypes.string,


};
export default FormInput;