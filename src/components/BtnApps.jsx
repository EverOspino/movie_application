import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

export default BtnApps = ({subTitle, appsList}) => {
    return ( 
        <View>
            <View style={styles.subTitle}>
                <Text style={styles.subText}>{subTitle}</Text>
            </View>
            <View style={styles.loginOptionsContainer}>
                {appsList.map(app => <BtnApp key={app.id} btnOnPress={app.onPress} img={app.img}  />)}
            </View>
        </View>
     );
}

const BtnApp = ( {btnOnPress, img} ) => {
    return (
        <TouchableNativeFeedback style={styles.btnLoginOption} onPress={btnOnPress}>
            <View style={styles.btnLoginOption}>
                <Image source={img} />
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    subText: {
        color: '#9C9C9C',
    },
    subTitle: {
        height: 100,
        display: 'flex',
        justifyContent: 'center',
    },
    loginOptionsContainer: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnLoginOption: {
        width: '47%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF10',
        borderRadius: 11,
    },

})