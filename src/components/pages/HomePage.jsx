import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesPage from './MoviesPage';
import SearchPage from './SearchPage';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default HomePage = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'User') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                    } else if (route.name === 'Movies') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'ios-search' : 'ios-search-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: { position: 'absolute', backgroundColor: '#C4C4C450', borderRadius: 100, bottom: 15, marginHorizontal: 15 },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Movies" component={MoviesPage} />
            <Tab.Screen name="Search" component={SearchPage} />

        </Tab.Navigator>
    );
}

