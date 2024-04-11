import { checkFormData } from '../../../utilities/formChecks';
import { NEW_SERVICE_FORM_RULES } from './newServiceFormRules';

export async function createService(data, axios, toast, navigate) {
  console.log(data);
  try {
    const res = await axios.post('/clinic/service', { data: data });
    navigate('/services');
    return res.data;
  } catch (error) {
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error(
        'There was an error creating your service, please try again later.',
      );
  }
}
export function sanitizeData(formData) {
  const sanitizedFormData = { ...formData };
  if (formData.availabilityType !== 'custom') {
    sanitizedFormData.customAvailability = '';
  }
  if (formData.policy !== 'notice') {
    sanitizedFormData.notice = '';
    sanitizedFormData.lateFee = '';
  }
  return sanitizedFormData;
}

export function validateData(formData, setErrors) {
  const newErrors = checkFormData(formData, NEW_SERVICE_FORM_RULES);

  if (Object.keys(newErrors).length > 0) {
    setErrors((prevState) => ({
      ...prevState,
      ...newErrors,
    }));
    return false;
  }

  return true;
}
