import React from "react";
import { Text, StyleSheet, TouchableNativeFeedback, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default Submit = ({title, handleSubmit}) => {
    return ( 
        <TouchableNativeFeedback onPress={handleSubmit}>
                <LinearGradient 
                    colors={['#FF722A', '#FF722A30']} 
                    style={styles.submit}
                    end={{ x: 0, y: 0 }}
                >
                    <Text style={styles.btnTitle}>{title}</Text>
                </LinearGradient>
            </TouchableNativeFeedback>
     );
}

const styles = StyleSheet.create({
    submit: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        marginTop: 40,
    },
    btnTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})