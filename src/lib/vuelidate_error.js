import {
    helpers,
} from 'vuelidate/lib/validators';

const vErr = {
    errEmail: {
        required : 'Введите E-mail',
        email    : 'Введите коректный E-mail',
        maxLength: 'Введите не более 60 символов',

    },
    errPwd: {
        required : 'Введите пароль',
        minLength: 'Введите не менее 6 символов',
        maxLength: 'Введите не более 32 символов',
        pwd      : 'Обязательно наличие цифр и символов',
    },
    errChb: {
        text: 'Необходимо согласие',
    },
    transport: msgs => helpers.withParams(msgs, () => true),
};

export default vErr;

