import { useState } from 'react';
// import Constants from 'expo-constants';
import BtnApps from '../BtnApps';
import Header from '../Header';
import Form from '../Form';
import Footer from '../Footer';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, StatusBar } from 'react-native';

export default RegisterPage = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formInputs = [
        {label: 'Name', value: name, placeholder: 'Enter your name', onChange: setName, secureText: false},
        {label: 'Email', value: email, placeholder: 'Enter your email', onChange: setEmail, secureText: false},
        {label: 'Password', value: password, placeholder: 'Enter your password', onChange: setPassword, secureText: true},
    ];

    const appsList = [
        {
            id: 'apple',
            onPress: () => Alert.alert('Hola'),
            img: require('../../../assets/apple.png')
        },
        {
            id: 'google',
            onPress: () => Alert.alert('Hola'),
            img: require('../../../assets/google.png')
        },
        ];

    const handleSubmit = () => {
        Alert.alert(email + ' ' + password);
    }

    const handleLink = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <Header title='Sign up' />
            {/* <BtnApps subTitle='Sign up with one of following options' appsList={appsList} /> */}
            <View style={styles.formContainer}>
                <RegisterForm inputs={formInputs} handleSubmit={handleSubmit} />
            </View>
            <Footer content='Already have an account? ' linkText='Login' linkOnPress={handleLink} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1F1C2C',
        paddingHorizontal: 15,
    },
    formContainer: {
        width: '100%',
        paddingVertical: 40,
    },
    footerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 17,
    },
    link: {
        color: '#FFF',
    }
})
