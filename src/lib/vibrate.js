
import { addClass, removeClass } from './class_operation';

const vibrate = (el, selector) => {
    const fields = el.querySelectorAll(selector);

    fields.forEach((el) => {
        addClass(el, 'snake');
        setTimeout(() => {
            removeClass(el, 'snake');
        }, 500);
    });
};
export default vibrate;

