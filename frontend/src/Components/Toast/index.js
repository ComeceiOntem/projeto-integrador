import {notification} from "antd";

export const openNotificationWithIconError = type => {
    notification[type]({
        message: 'Falha no Login',
        description: 'Verifique seu e-mail/senha',

    });
};

export const openNotificationWithIconSuccess = type => {
    notification[type]({
        message: 'Usuario Cadastrado',
        description: 'O usuario foi cadastrado, logue na pagina de login',

    });
};

export const openNotificationWithIconPasswordValidate = type => {
    notification[type]({
        message: 'Falha no Cadastro',
        description: 'senhas diferentes',

    });
};

export const openNotificationWithIconPasswordValidateRegex = type => {
    notification[type]({
        message: 'Falha no Cadastro',
        description: 'a senha deve conter pelo menos 1 caractere maiusculo',

    });
};


