import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = (props) => {

  const {label, input, type, classes, meta: {touched, error, active}} = props;

  const inputClassName = classNames(classes.input, {
    [classes.notValid]: touched && error,
    [classes.valid]: active && !error,
  });

  return (
    <div className={ classes.container }>
      <input { ...input } placeholder={ label } type={ type }
             className={ inputClassName }/>
      { classes.warning && ( touched &&
        ( error && <span className={ classes.warning }>{ error }</span> ) ) }
    </div>
  );
};
FormInput.propTypes = {
  label:PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.shape({
    input: PropTypes.string.isRequired,
    warning: PropTypes.string.isRequired,
    notValid: PropTypes.string.isRequired,
    valid: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired
  })


};
export default FormInput;