import { useState } from 'react';
// import Constants from 'expo-constants';
import BtnApps from '../BtnApps';
import Header from '../Header';
import Form from '../Form';
import Footer from '../Footer';
import { View, StyleSheet, Alert, StatusBar } from 'react-native';

export default LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formInputs = [
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
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <Header title='Login' />
            {/* <BtnApps subTitle='Log in with one of following options' appsList={appsList} /> */}
            <View style={styles.formContainer}>
                <Form inputs={formInputs} handleSubmit={handleSubmit} />
            </View>
            <Footer content='Don’t have an account? ' linkText='Sign up' linkOnPress={handleLink} />

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

