import axios from '../../api/axios';
import { checkFormData } from '../../utilities/formChecks';
import { REGISTER_FORM_RULES } from './registerFormRules';

export async function onRegister(email, password, toastInstance) {
  const data = { email, password };
  try {
    await axios.post('/register/clinic', data);
  } catch (error) {
    if (error?.response?.status === 409)
      toastInstance.error('This email is already registered with a Terra ID.');
    else if (error?.response?.status === 400)
      toastInstance.error('Please fill in all the required information.');
    else
      toastInstance.error(
        'There was an error creating your Terra ID, please try again.',
      );
  }
}

export function validateData(formData, setErrors) {
  const newErrors = checkFormData(formData, REGISTER_FORM_RULES);
  if (Object.keys(newErrors).length > 0) {
    setErrors((prevState) => ({
      ...prevState,
      ...newErrors,
    }));
    return false;
  }
  return true;
}
