import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';


const Home = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           Logado
        </View>
    )

};

Home.navigationOptions = {
    title: 'Home',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;