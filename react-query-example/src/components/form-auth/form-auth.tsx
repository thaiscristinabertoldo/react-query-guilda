import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthParams } from '../../types';
import {
  ButtonStyled,
  CardStyled,
  ContainerStyled,
  FormGroupStyled,
  FormStyled,
  InputStyled,
  SpanError,
} from './form-auth.styles';

const defaultFormValues: AuthParams = {
  email: '',
  password: '',
};

type Params = {
  title: string;
  linkUrl: string;
  linkDescription: string;
  onSubmit: (values: AuthParams) => void;
  isSubmitting: boolean;
};

export const FormAuth: React.FC<Params> = ({
  title,
  linkUrl,
  linkDescription,
  onSubmit,
  isSubmitting,
}) => {
  const [formValues, setFormValues] = useState<AuthParams>(defaultFormValues);
  const [formErrors, setFormErrors] = useState<AuthParams>(defaultFormValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const validateFormValues = (): boolean => {
    let email = '';
    let password = '';

    if (!formValues.email) {
      email = 'Informe o e-mail';
    }

    if (!formValues.password) {
      password = 'Informe a senha';
    }

    setFormErrors({ email, password });

    return !email || !password;
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (validateFormValues()) {
      onSubmit(formValues);
    }
  };

  return (
    <ContainerStyled>
      <CardStyled>
        <h1>{title}</h1>

        <FormStyled onSubmit={handleSubmit}>
          <FormGroupStyled>
            <label>E-mail:</label>
            <InputStyled
              name='email'
              type='email'
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <SpanError>{formErrors.email}</SpanError>}
          </FormGroupStyled>

          <FormGroupStyled>
            <label>Senha:</label>
            <InputStyled
              name='password'
              type='password'
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <SpanError>{formErrors.password}</SpanError>}
          </FormGroupStyled>

          <ButtonStyled type='submit' disabled={isSubmitting}>
            Enviar
          </ButtonStyled>
        </FormStyled>

        <Link to={linkUrl}>{linkDescription}</Link>
      </CardStyled>
    </ContainerStyled>
  );
};
