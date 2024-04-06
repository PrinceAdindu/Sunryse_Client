import { FORM_RULES_FUNCS } from '../../utilities/formChecks';

export const REGISTER_FORM_RULES = {
  email: {
    type: 'string',
    required: true,
    checks: [
      (formData) => FORM_RULES_FUNCS.requiredCheck(formData.email),
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
      (formData) => FORM_RULES_FUNCS.minLengthCheck(formData.passwordConf, 8),
    ],
  },
  passwordConf: {
    type: 'string',
    required: true,
    checks: [
      (formData) => FORM_RULES_FUNCS.requiredCheck(formData.passwordConf),
      (formData) => FORM_RULES_FUNCS.minLengthCheck(formData.passwordConf, 8),
      (formData) =>
        FORM_RULES_FUNCS.equalsCheck(formData.passwordConf, formData.password),
    ],
  },
};
