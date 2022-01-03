import React, {useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import styles from './form.styles';

import ButtonWithText from '../../components/buttons/button_with_text';

const Form = ({defaultValues, components, onSubmit, submitText}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({defaultValues});

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return (
    <View>
      {components.length &&
        components.map((item) => {
          const {keyValue, rules, placeholder, formStyle, type} = item;
          const extrPprops = {
            ...(!placeholder ? {} : {placeholder}),
            style: [styles.input, !formStyle ? {} : formStyle],
          };
          return (
            <View key={keyValue}>
              <Controller
                control={control}
                rules={!rules ? {} : rules}
                render={({field: {onChange, onBlur, value}}) => {
                  if (type === 'input') {
                    return <TextInput key={`${keyValue}-input`} {...extrPprops} onBlur={onBlur} onChangeText={onChange} value={value} />;
                  }
                  return null;
                }}
                name={keyValue}
              />
              {errors[keyValue] && rules.required === true && <Text style={styles.error}>This is required.</Text>}
              {errors[keyValue] && rules.maxLength && <Text style={styles.error}>The max length is {rules.maxLength} </Text>}
              {errors[keyValue] && rules.minLength && <Text style={styles.error}>The min length is {rules.minLength} </Text>}
            </View>
          );
        })}
      <ButtonWithText text={submitText || 'Submit'} onPress={handleSubmit(onSubmit)} btnStyle={styles.submit} textStyle={styles.btnText} />
    </View>
  );
};

export default Form;
