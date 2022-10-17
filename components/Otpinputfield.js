import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { OTPInputContainer, TextInputHidden, SplitOTPBoxesContainer, SplitBoxText, SplitBoxes } from "./Style";
import { useRef, useState, useEffect } from 'react';

const Otpinputfield = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();
    const [oneTime, setOneTime] = useState('');

    const boxDigit = (_, index) => {
        const emptyInput = "";
        const digit = code[index] || emptyInput;
        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;
     
        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
     
        const StyledSplitBoxes =
          isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
       
        return (
          <SplitBoxes key={index}>
            <SplitBoxText>{digit}</SplitBoxText>
          </SplitBoxes>
        );
      };
      const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

      const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
      };
      useEffect(() => {
        // update pin ready status
        setIsPinReady(code.length === maximumLength);
        // clean up function
        return () => {
          setIsPinReady(false);
        };
      }, [code]);

 const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  return (
    <OTPInputContainer style={{padding:10}}>
      <SplitOTPBoxesContainer >{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
      <TextInputHidden 
        value={code}
       onChangeText={setCode}
       maxLength={maximumLength}
       ref={inputRef}
       onBlur={handleOnBlur}
       keyboardType="number-pad"
    />
  </OTPInputContainer>
  )
}

export default Otpinputfield

const styles = StyleSheet.create({})