import React, { useState } from 'react';

import 'antd/dist/antd.css';
import './index.css';

import {Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import api from "../../services/api";
import {
    openNotificationWithIconPasswordValidate,
    openNotificationWithIconPasswordValidateRegex,
    openNotificationWithIconSuccess
} from "../Toast";

const Register = () => {
    const [name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const history = useHistory()

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

                if (pass !== true){
                    openNotificationWithIconPasswordValidateRegex('error')
                    throw new Error()
                }
                console.log(data)
                await api.post('/users', data)
                openNotificationWithIconSuccess('success')
                history.push('/signIn')
            }else {
                openNotificationWithIconPasswordValidate('error')
            }
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <Form onFinish={handleRegisterUser}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, insira seu nome de usuário!',
                    },
                ]}
            >
                <Input
                    value={name}
                    onChange={event => setUsername(event.target.value)}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Nome de usuário" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, insira seu nome de E-mail!',
                    },
                ]}
            >
                <Input
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="E-mail"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, insira uma senha confiavel!',
                    },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Senha"
                />
            </Form.Item>
            <Form.Item
                name="repeatPassword"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, repita a senha!',
                    },
                ]}
            >
                <Input.Password
                    value={repeatPassword}
                    onChange={event => setRepeatPassword(event.target.value)}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Repita a senha"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register
