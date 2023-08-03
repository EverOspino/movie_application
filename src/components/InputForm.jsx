import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default InputForm = ({label, value, onChange, placeholder, secureText=false}) => {
    return ( 
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={text => onChange(text) } placeholder={placeholder} placeholderTextColor='#9C9C9C' secureTextEntry={secureText}></TextInput>
        </View>
     );
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        gap: 8,
    },
    label: {
        color:'#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#ffffff10',
        borderRadius: 11,
        fontSize: 16,
        paddingLeft: 20,
        color: '#fff',  
    },
})