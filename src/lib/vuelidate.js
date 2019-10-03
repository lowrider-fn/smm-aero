import {
    helpers,
    required,
    email,
    minLength,
    maxLength,
} from 'vuelidate/lib/validators';

const vuelidate = {
    email,
    required,
    minLength,
    maxLength,
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
    transport: (msgs, call) => helpers.withParams(msgs, () => (call ? call() : true)),

    checked: val => !!val,

    errKeys(v) {
        const isNotHave = (el, substr) => !el.includes(substr);
        return Object.keys(v).filter(el => isNotHave(el, '$') && isNotHave(el, 'err') && isNotHave(el, 'required'));
    },

    errText(v) {
        const { required, $params } = v;
        let text;
        if (!required) {
            return $params.err.required;
        }
        this.errKeys(v).forEach((key) => {
            if (!v[key]) {
                text = $params.err[key];
            }
        });
        return text;
    },
};

export default vuelidate;

