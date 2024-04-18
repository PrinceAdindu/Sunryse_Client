import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import styles from './OtpInput.module.scss';

OTPInput.propTypes = {
  numInputs: PropTypes.number,
  setValue: PropTypes.func.isRequired,
  otpInputStyle: PropTypes.string,
};
export default function OTPInput({
  numInputs = 6,
  setValue = () => {},
  otpInputStyle = ' ',
}) {
  const [otpValues, setOtpValues] = useState(Array(numInputs).fill(''));
  const inputRefs = useRef([]);

  // when initialy the component mounted focus the first input field
  useEffect(() => {
    focusInput(0);
  }, []);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    handleOtpChange(index, value);
    if (index < numInputs - 1) {
      focusInput(index + 1);
    }
  };
  const handleKeyDown = (index, event) => {
    if (event.code === 'Backspace') {
      handleOtpChange(index, '');
      if (index > 0 && index < numInputs) {
        focusInput(index - 1);
      }
      event.preventDefault();
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);
    setValue(newOtpValues.join(''));
  };

  const handlePaste = (index, event) => {
    let activeInput;
    let otp = [...otpValues];
    const pastedData = event.clipboardData
      .getData('text/plain')
      .slice(0, numInputs - index)
      .split('');
    pastedData.forEach((num, i) => {
      otp[index + i] = num;
    });
    // Prevents activeInput from exceeding input limit.
    activeInput = Math.min(index + pastedData.length, numInputs - 1);
    focusInput(activeInput);
    setOtpValues(otp);
    // send to its parent component
    setValue(otp.join(''));

    event.preventDefault();
  };

  const focusInput = (index) => {
    inputRefs.current[index].focus();
    inputRefs.current[index].select();
  };

  return (
    <div className={styles.flexItems}>
      {otpValues.map((value, index) => (
        <input
          className={`${styles.input} ${otpInputStyle}`}
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onPaste={(event) => handlePaste(index, event)}
          onFocus={(event) => event.target.select()}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onChange={(event) => handleInputChange(index, event)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
}
