// src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useResetPassword from '../hooks/useResetPassword';
import useToast from '../hooks/useToast';
import { useErrorLogger } from '../hooks/useErrorLogger';

const ResetPassword2 = () => {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const resetPasswordMutation = useResetPassword();
  const toast = useToast();
  const logError = useErrorLogger();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      resetPasswordMutation.mutate({ data: { resetToken, newPassword } });
    } catch (error) {
      logError(error);
      toast.error('Error resetting password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword2;
