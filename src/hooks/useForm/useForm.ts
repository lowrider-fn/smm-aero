import isEqual from 'lodash.isequal';
import { useState } from 'react';

import type { DataType, ValidationType } from './types';

export function useForm<F extends DataType<F, E>, E>(initialForm: F, initialValidation: ValidationType<E>) {
  const [form, setForm] = useState({ ...initialForm });
  const [validation, setValidation] = useState({ ...initialValidation });

  const validationContext = { context: { form, validation } };

  const isValid = <V,>(value: V, name: keyof E) => validation[name].schema.isValidSync(value, validationContext);

  const changeValidation = (name: keyof E, hasErr = false, errText = '') => {
    setValidation((validation) => ({ ...validation, [name]: { ...validation[name], ...{ hasErr, errText } } }));
  };

  const validate = <V,>(value: V, name: keyof E) => {
    const validationObject = validation[name];

    const { dependences, schema } = validationObject;

    schema.validate(value, validationContext)
      .then(() => {
        changeValidation(name);
      })
      .catch((err) => {
        if (value || !isValid(value, name)) {
          changeValidation(name, true, err.errors[0]);
        } else {
          changeValidation(name);
        }
      })
      .finally(() => {
        dependences?.forEach((dep) => validate(form[dep], dep));
      });
  };

  const validateForm = () => {
    Object.entries(form).forEach(([name, value]) => {
      validate(value, <keyof E>name);
    });
  };

  const changeFormField = (value: F[keyof E], name: keyof E) => {
    setForm((form) => ({ ...form, [name]: value }));

    validate(value, name);
  };

  const resetForm = () => {
    setForm({ ...initialForm });
    Object.keys(validation).forEach((name) => changeValidation(<keyof E>name));
  };

  return {
    form,
    validation,
    isDirty    : isEqual(form, initialForm),
    isValidForm: Object.entries(form).every(([key, val]) => isValid(val, <keyof E>key)),
    changeFormField,
    resetForm,
    validateForm
  };
}
