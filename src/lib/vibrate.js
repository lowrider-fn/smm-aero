
import { addClass, removeClass } from './class_operation';

const vibrate = (el, selector) => {
    const fields = el.querySelectorAll(selector);

    fields.forEach((el) => {
        addClass(el, 'vibration');
        setTimeout(() => {
            removeClass(el, 'vibration');
        }, 500);
    });
};
export default vibrate;

