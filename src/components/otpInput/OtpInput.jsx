import React, { useRef, useState, useEffect } from 'react';
import styles from './OtpInput.module.scss';
const OTPInput = ({ numInputs = 6, getOTPValue = () => {}, otpInputStyle }) => {
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
    getOTPValue(newOtpValues.join(''));
  };

  const handlePaste = (index, event) => {
    let activeInput = index;
    let otp = [...otpValues];
    const pastedData = event.clipboardData
      .getData('text/plain')
      .slice(0, numInputs - index)
      .split('');
    for (let i = 0; i < numInputs; ++i) {
      if (i >= index && pastedData.length > 0) {
        otp[i] = pastedData.shift() ?? '';
        activeInput++;
      }
    }
    focusInput(activeInput - 1);
    setOtpValues(otp);
    // send to its parent component
    getOTPValue(otp.join(''));
  };

  const focusInput = (index) => {
    inputRefs.current[index].focus();
    inputRefs.current[index].select();
  };

  return (
    <>
      {otpValues.map((value, index) => (
        <input
          className={`${styles.input} ${otpInputStyle && otpInputStyle}`}
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
    </>
  );
};

export default OTPInput;
