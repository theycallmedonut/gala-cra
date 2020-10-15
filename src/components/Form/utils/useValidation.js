import { useState, useEffect, useCallback } from 'react';
import * as moment from 'moment';

const TYPE_INPUT = 'input';
const TYPE_SELECT = 'select';
const TYPE_MULTISELECT = 'multiselect';
const TYPE_CHECKBOX = 'checkbox';
const TYPE_DATEPICKER = 'datepicker';
const TYPE_RADIO = 'radio';
const TYPE_SWITCH = 'switch';

function formToKeyValue(form) {
  const result = {};
  Object.keys(form).forEach((field) => {
    if (!form[field]) return;

    result[field] = form[field].value || (form[field].value === false ? false : '');
  });
  return { ...result };
}

const useValidation = (submitAction, initialForm = {}, formData = {}) => {
  // Init form and validation hook

  const [form, setForm] = useState({
    ...formToKeyValue(initialForm),
    ...formData,
  });
  const [errors, setErrors] = useState({});

  // Clear form

  const onClearForm = () => {
    const formValues = {};
    Object.keys(initialForm).forEach((field) => {
      if (initialForm[field]) {
        formValues[field] = '';
      }
    });
    setForm(formValues);
    setErrors({});
  };

  const saveInput = ({ name, value }) => setForm(() => ({ ...form, [name]: value }));

  // Validation -----------------------------------------------------

  const validateInput = ({ name, value, rules = [] }, isNotSetState) => {
    const result = {};
    const testTargets = {
      length: value !== null && value.length ? value.length : 0,
    };

    rules.forEach(({ regexp, text, param, confirmField }) => {
      // Password confirmation field
      const stag = confirmField ? form[confirmField] : regexp;

      // Check input params (length)
      const target = param ? testTargets[param] : value;

      const isError = value === null || !new RegExp(stag).test(target);
      const validateStatus = isError ? 'error' : null; // 'success' 'warning' 'error' 'validating'
      const help = isError ? text : null;

      if (isError) {
        result[name] = { validateStatus, help };
      }
    });

    if (!isNotSetState) {
      setErrors((state) => {
        const newState = { ...state };
        const isEmptyResult = !Object.keys(result).length;
        const isPresentInState = state[name];

        if (isEmptyResult && isPresentInState) delete newState[name];

        return { ...newState, ...result };
      });
    }

    return result;
  };

  const validateForm = () => {
    let result = {};

    Object.entries(form).forEach(([name, value]) => {
      const rules = initialForm[name] && 'rules' in initialForm[name] && initialForm[name].rules;

      if (rules) {
        result = { ...result, ...validateInput({ name, value, rules }, true) };
      }
    });

    setErrors(result);

    return Object.keys(result).length === 0;
  };

  const validateElement = ({ name, value }) => {
    const rules = initialForm[name] && 'rules' in initialForm[name] && initialForm[name].rules;

    if (rules) {
      validateInput({ name, value, rules });
    }
  };

  const submitIfValid = () => {
    if (submitAction && validateForm()) submitAction(form, onClearForm);
  };

  // Input events -----------------------------------------------------

  const initEvent = (event, select, isUnixDate) => {
    if (!event) return false;
    if (event && event.persist) event.persist();

    const getTextType = () => {
      const isDatePicker = typeof select === 'string' && moment.isMoment(event);
      const isSelect = !!select && !moment.isMoment(event);
      const isMultiSelect = isSelect && Array.isArray(event);
      const isCheckbox = !select && (event.target.checked || event.target.defaultChecked);
      const isRadio = event.target && event.target.type === TYPE_RADIO;

      let result;

      if (isDatePicker) {
        result = TYPE_DATEPICKER;
      } else if (isRadio) {
        result = TYPE_RADIO;
      } else if (isCheckbox) {
        result = TYPE_CHECKBOX;
      } else if (isMultiSelect) {
        result = TYPE_MULTISELECT;
      } else if (isSelect) {
        result = TYPE_SELECT;
      } else {
        result = TYPE_INPUT;
      }

      return result;
    };

    const type = getTextType();
    const typeToData = {
      [TYPE_DATEPICKER]: {
        name: select,
        value: isUnixDate ? event.valueOf() : moment(event).format(),
      },
      [TYPE_RADIO]: event.target,
      [TYPE_CHECKBOX]: event.target,
      [TYPE_SELECT]: select && select.props,
      [TYPE_MULTISELECT]: {
        name: TYPE_MULTISELECT === type && select[0] && select[0].props.name,
        value: event,
      },
      [TYPE_INPUT]: event.target,
    };
    const { name, value, checked } = typeToData[type];
    return { name, value, checked, type };
  };

  const onChange = (event, select, isTimeStampFormat) => {
    const { name, value, checked, type } = initEvent(event, select, isTimeStampFormat);
    const valuesByType = {
      [TYPE_DATEPICKER]: { name, value },
      [TYPE_RADIO]: { name, value },
      [TYPE_CHECKBOX]: { name, value: checked },
      [TYPE_SELECT]: { name, value },
      [TYPE_MULTISELECT]: { name, value },
      [TYPE_INPUT]: { name, value },
    };

    saveInput(valuesByType[type]);
    validateElement(valuesByType[type]);
  };

  const onFocus = (event, select) => {
    const { name: currentName } = initEvent(event, select);
    const isSelect = !!select;
    const eventName = isSelect ? select.props.name : currentName;

    if (errors && errors[eventName]) {
      const { name, ...otherErrors } = errors;
      setErrors(otherErrors);
    }
  };

  const onKeyDown = (event) => {
    if (!event) return;

    const isEnterPressed = event.keyCode === 13;
    const isTextarea = event.target.type === 'textarea';

    if (event && isEnterPressed && !isTextarea) {
      submitIfValid();
    }
  };

  const onBlur = (event) => {
    if (!event || !event.target || typeof event === 'number') return;

    validateElement(event.target);
  };

  // Submitting form ---------------------------------------------

  const bindedSubmit = (event) => {
    if (event) event.preventDefault();

    submitIfValid();
  };

  const prepareForm = useCallback(() => {
    if (Object.keys(form)[0] === Object.keys(initialForm)[0]) return;

    setForm({
      ...formToKeyValue(initialForm),
      ...formData,
    });
  }, [initialForm]);

  useEffect(prepareForm, [initialForm]);

  return {
    bindedInputFunctions: { onChange, onFocus, onBlur, onKeyDown },
    bindedSubmit,
    onClearForm,
    errors,
    currentForm: form,
    formLength: Object.keys(form).length,
  };
};

export default useValidation;
