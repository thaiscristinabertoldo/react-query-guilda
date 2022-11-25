import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { login } from '../../services';
import { AuthParams } from '../../types';
import { FormAuth } from '../form-auth';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/talents');
    },
    onError: (err: any) => toast.error(`Erro: ${err.message}`),
  });

  const handleSubmit = (formValues: AuthParams): void => {
    mutate(formValues);
  };

  return (
    <FormAuth
      title='Acessar'
      linkDescription='Cadastre-se'
      linkUrl='/register'
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
    />
  );
};
