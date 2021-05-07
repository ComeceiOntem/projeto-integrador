import React, {useState} from 'react';

import api from '../../services/api'

import {View, Button, Text, TextInput, StyleSheet} from 'react-native';


const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)

    const navigationPage = () => {
        setVisible(false)
        return navigation.navigate('Home')
    }

    const handleRegisterUser = async e => {
        try {
            const data = {
                email,
                password
            }
            console.log(data)

            const res = await api.post('/sessions', data)
            if (res.data.token){
                navigationPage()
            }
            console.log('TESTE', res)
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <>
            {visible ? (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontsize: '40px',  marginBottom: 20}}>Projeto integrador Joel</Text>
                    <TextInput
                        style={{marginBottom: '10px'}}
                        placeholder="Email"
                        onChangeText={event => setEmail(event)}

                    />
                    <TextInput
                        style={{marginBottom: '10px'}}
                        placeholder="Senha"
                        onChange={event => setPassword(event.target.value)}
                        textContentType={'password'}
                        secureTextEntry={true}
                    />

                    <Button
                        style={{marginTop: '30px'}}
                        title="Logar"
                        onPress={handleRegisterUser}
                    />
                </View>
            ):null}
        </>
)

};

Login.navigationOptions = {
    title: 'Login',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;