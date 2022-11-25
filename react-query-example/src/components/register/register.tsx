import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { register } from '../../services';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthParams } from '../../types';
import { FormAuth } from '../form-auth';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success('Usuário criado com sucesso!');
      navigate('/login');
    },
    onError: (err: any) => toast.error(`Erro: ${err.message}`),
  });

  const handleSubmit = (formValues: AuthParams): void => {
    mutate(formValues);
  };

  return (
    <FormAuth
      title='Cadastro'
      linkUrl='/login'
      linkDescription='Voltar'
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
    />
  );
};
