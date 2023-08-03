import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';

export default LogoPage = () => {
    return ( 
        <View style={styles.container}>
            <StatusBar />
            <Image source={require('../../../assets/movie-logo.png')} style={styles.logo} />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1F1C2C',
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
        height: 100,
        width: '100%'
    },
})

