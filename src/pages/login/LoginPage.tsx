import React from 'react';
import { LoginForm } from '../../components/forms/login-form';
import { PageContainer } from '../../components';

export const LoginPage = () => {
  return (
    <PageContainer data-testid="login-page">
      <LoginForm />
    </PageContainer>
  );
};
