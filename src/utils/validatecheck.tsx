import {removeWhitespace} from './validate';

export const onValidateCheck = ({
  validateCheck,
  setValue,
  setError,
  defaultValue,
  ErrorMessage,
}) => {
  const validateValue = removeWhitespace(defaultValue);
  if (validateCheck(validateValue)) {
    setError(null);
    setValue(validateValue);
  } else if (validateValue.length == 0) {
    setError(null);
  } else {
    setError(ErrorMessage);
  }
};
