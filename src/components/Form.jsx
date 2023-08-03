import React from 'react';
import InputForm from './InputForm';
import Submit from './Submit';
import { View, StyleSheet } from 'react-native';


export default LoginForm = ({handleSubmit, inputs=[]}) => {
    return (
        <View style={styles.form}>
            {inputs.map((input, key) => <InputForm key={key} label={input.label} value={input.password} placeholder={input.placeholder} onChange={input.onChange} secureText={input.secureText} />)}
            <Submit title='Log in' handleSubmit={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        display: 'flex',
        gap: 30,
    },
})