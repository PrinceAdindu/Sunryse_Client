import { FORM_RULES_FUNCS } from '../../utilities/formChecks';

export const REGISTER_FORM_RULES = {
  email: {
    type: 'string',
    required: true,
    checks: [
      (formData) =>
        FORM_RULES_FUNCS.regexCheck(
          formData.email,
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        ),
    ],
  },
  password: {
    type: 'string',
    required: true,
    checks: [
      (formData) => FORM_RULES_FUNCS.requiredCheck(formData.passwordConf),
      (formData) => FORM_RULES_FUNCS.minLengthCheck(formData.availability, 8),
    ],
  },
  passwordConf: {
    type: 'string',
    required: true,
    checks: [
      (formData) => FORM_RULES_FUNCS.requiredCheck(formData.passwordConf),
      (formData) =>
        FORM_RULES_FUNCS.equals(formData.passwordConf, formData.password),
      (formData) => FORM_RULES_FUNCS.minLengthCheck(formData.availability, 8),
    ],
  },
};
