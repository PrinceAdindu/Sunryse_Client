import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '../../components/inputField/InputField';
import StyledButton from '../../components/styledButton/StyledButton';
import { resetPasswordSchema, ResetPasswordFormData } from './resetPasswordHelper';
import logo from '../../assets/SunryseLogoWideFillBlue.png';
import styles from './ResetPassword.module.scss';
import { useResetPassword } from '../../services/api/auth/resetPassword/useResetPassword';

export default function ResetPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const resetPassword = useResetPassword();
  const { isLoading } = resetPassword;

  const submit: SubmitHandler<ResetPasswordFormData> = async (formData) => {
    const payload = { data: { ...formData } };
    await resetPassword.mutateAsync(payload);
  };

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <h2 className={styles.title}>Reset Password</h2>
      <p className={styles.subtitle}>Enter your new password</p>
    </div>
  );

  if (isLoading) {
    return <Loader type={"white"} />;
  }

  return (
    <div className={styles.card}>
      <Header />
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <Controller
          name="newPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              classname={styles.input}
              title="New Password"
              value={value}
              setValue={onChange}
              error={errors.newPassword?.message}
              type="password"
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              classname={styles.input}
              title="Confirm Password"
              value={value}
              setValue={onChange}
              error={errors.confirmPassword?.message}
              type="password"
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              classname={styles.input}
              title="Password Confirmation"
              value={value}
              setValue={onChange}
              error={errors.passwordConfirmation?.message}
              type="password"
            />
          )}
        />
        <StyledButton
          baseClassname={styles.button}
          text="Reset Password"
          disabled={isSubmitting}
          type={"submit"}
        />
      </form>
    </div>
  );
}
