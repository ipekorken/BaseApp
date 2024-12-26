import {useOrientation, useTheme} from '@/hooks';
import React from 'react';
import {Platform, TextInput, View} from 'react-native';
import {getStyles} from './styles';
import {MaterialIcon} from '@/assets';
import CustomText from '../Text';

const CustomInput = ({
  //////////////input rules//////////////
  phone,
  //////////////input props//////////////
  placeholder,
  input,
  setInput,
  inputRef,
  multi,
  maxLength,
  returnKeyType, //next, done
  keyboardType,
  secureTextEntry,
  onSubmitEditing,
  isDisabled,
  isFocusabled,
  autoCapitalize,
  ///////////////input style//////////////
  bg,
  focusBg,
  borderColor,
  focusBorderColor,
  textColor,
  fs,
  fw,
  fstyle,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  textAlign,
  alignSelf,
  customWidht,
  customHeight,
  customRadius,
  ////////////extra component////////////
  isInputRight,
  inputRight,
  isInputAlert,
  inputAlertData,
}) => {
  const {ww, wh, isPortrait} = useOrientation();
  const colors = useTheme();
  const styles = getStyles(wh, ww, isPortrait, colors);

  function handleInput(txt) {
    if (phone && txt?.startsWith('0') && txt?.length > 1) {
      setInput(txt.substring(1));
    } else {
      setInput(txt);
    }
  }

  return (
    <View style={[styles.inputTextView, {alignSelf: alignSelf}]}>
      <TextInput
        style={[styles.inputText, {textAlign: textAlign}]}
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={colors?.text?.placeholder}
        defaultValue={input}
        onChangeText={txt => handleInput(txt)}
        fontSize={fs}
        fontWeight={fw}
        color={colors?.text?.primary}
        borderWidth={0.5}
        borderColor={borderColor}
        focusable={isFocusabled}
        isDisabled={isDisabled}
        multiline={multi}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        textContentType="oneTimeCode"
        autoComplete="off"
      />

      {isInputRight && <View>{inputRight()}</View>}
      {isInputAlert && (
        <View
          mt={1}
          px={2}
          maxW={335}
          flexDirection={'row'}
          alignItems={'center'}>
          <MaterialIcon
            name={'information-outline'}
            color={colors?.alert?.danger}
            size={20}
          />
          {inputAlertData?.map((i, k) => {
            return (
              <CustomText
                key={k}
                textType={'editable'}
                text={i}
                color={colors?.alert?.danger}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CustomInput;
