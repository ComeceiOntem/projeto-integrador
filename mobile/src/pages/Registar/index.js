import React, {useState} from 'react';

import api from '../../services/api'

import {View, Button, Text, TextInput, StyleSheet} from 'react-native';


const Register = ({navigation}) => {
    const [name, setUsername] = useState('')
    const [visible, setVisible] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const navigationPage = () => {
        setVisible(false)
        return navigation.navigate('Login')
    }

    const handleRegisterUser = async e => {
        try {
            const data = {
                name,
                email,
                password
            }
            if (repeatPassword === password) {
                const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
                const pass = reg.test(password)

                if (pass !== true) {
                    throw new Error()
                }
                console.log(data)
                await api.post('/users', data)
                navigationPage()
            } else {
            }
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <>
            {visible ? (
                <>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '50%'}}>
                <Text style={{fontsize: '40px',  marginBottom: 20}}>Projeto integrador Joel</Text>
                <TextInput
                    style={{marginBottom: '10px'}}
                    placeholder="Nome de usuário"
                    onChangeText={event => setUsername(event)}

                />
                <TextInput
                    style={{marginBottom: '10px'}}
                    placeholder="Email"
                    onChange={event => setEmail(event.target.value)}
                    textContentType="email"
                />

                <TextInput
                    style={{marginBottom: '10px'}}
                    placeholder="senha"
                    onChange={event => setRepeatPassword(event.target.value)}
                    textContentType={'password'}
                    secureTextEntry={true}
                />

                <TextInput
                    style={{marginBottom: '10px'}}
                    placeholder="Repita senha"
                    onChange={event => setPassword(event.target.value)}
                    textContentType="password"
                    secureTextEntry={true}
                />

                <Button
                    style={{marginTop: '30px'}}
                    title="Registrar"
                    onPress={handleRegisterUser}
                />

            </View>
            <View style={{marginTop: '90%'}}>

                <Button
                    style={{marginTop: '30px'}}
                    title="Ja possui cadastro?"
                    onPress={navigationPage}
                />
            </View>
                </>
                ): null}
        </>

)};

Register.navigationOptions = {
    title: 'Registrar',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register;