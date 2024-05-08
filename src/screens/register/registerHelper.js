import axios from '../../api/axios';
import { checkFormData } from '../../utilities/formChecks';
import { REGISTER_FORM_RULES } from './registerFormRules';

export async function onRegister(formData, toast, navigate) {
  try {
    await axios.post('/register', { data: formData });
    toast.success('Your account has been created, please login');
    navigate('/login');
  } catch (error) {
    if (error?.response?.status === 409)
      toast.error('This email is already registered with a Terra ID.');
    else if (error?.response?.status === 400)
      toast.error('Please fill in all the required information.');
    else
      toast.error(
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
