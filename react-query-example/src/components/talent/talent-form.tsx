import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { createTalent, editTalent, getTalent, queryClient, queryKeys } from '../../services';
import { TalentParam } from '../../types';
import {
  ButtonSecondaryStyled,
  ButtonStyled,
  ContainerFooterStyled,
  ContainerStyled,
  FormGroupStyled,
  FormStyled,
  InputStyled,
  SpanError,
} from './talent.styles';

const defaultFormValues: TalentParam = {
  name: '',
  avatarUrl: '',
  education: '',
};

export const TalentForm: React.FC = () => {
  const [formValues, setFormValues] = useState<TalentParam>(defaultFormValues);
  const [formErrors, setFormErrors] = useState<TalentParam>(defaultFormValues);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const talentId = parseInt(id ?? '');
  const isEdit = !!talentId;

  const { isFetching, isError, error } = useQuery(
    [queryKeys.talent, talentId],
    () => getTalent({ talentId }),
    {
      enabled: isEdit,
      onSuccess: (data) => {
        setFormValues(data);
      },
    }
  );

  const { mutate: talentMutation } = useMutation(isEdit ? editTalent : createTalent, {
    onError: (err: any) => toast.error(`Erro: ${err.message}`),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.talents]);
      toast.success(`Talento ${isEdit ? 'editado' : 'criado'} com sucesso!`);
      navigate('/talents');
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const validateFormValues = (): boolean => {
    let name = '';
    let avatarUrl = '';
    let education = '';

    if (!formValues.name) {
      name = 'Informe o nome';
    }

    if (!formValues.avatarUrl) {
      avatarUrl = 'Informe o avatar';
    }

    if (!formValues.education) {
      education = 'Informe a escolaridade';
    }

    setFormErrors({ name, avatarUrl, education });

    return !name || !education || !avatarUrl;
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (validateFormValues()) {
      talentMutation(formValues);
    }
  };

  return (
    <ContainerStyled>
      <h1>{talentId ? 'Editar' : 'Novo'}</h1>

      {isFetching && <div>Carregando...</div>}

      {isError && <div>Erro: {JSON.stringify(error)}</div>}

      {!isFetching && !isError && (
        <FormStyled onSubmit={handleSubmit}>
          <FormGroupStyled>
            <label>Nome:</label>
            <InputStyled name='name' value={formValues.name} onChange={handleChange} />
            {formErrors.name && <SpanError>{formErrors.name}</SpanError>}
          </FormGroupStyled>

          <FormGroupStyled>
            <label>Escolaridade:</label>
            <InputStyled name='education' value={formValues.education} onChange={handleChange} />
            {formErrors.education && <SpanError>{formErrors.education}</SpanError>}
          </FormGroupStyled>

          <FormGroupStyled>
            <label>Avatar Url:</label>
            <InputStyled
              name='avatarUrl'
              type='url'
              value={formValues.avatarUrl}
              onChange={handleChange}
            />
            {formErrors.avatarUrl && <SpanError>{formErrors.avatarUrl}</SpanError>}
          </FormGroupStyled>

          <ContainerFooterStyled>
            <ButtonSecondaryStyled
              type='button'
              disabled={isFetching}
              onClick={() => navigate('/talents')}
            >
              Cancelar
            </ButtonSecondaryStyled>

            <ButtonStyled type='submit' disabled={isFetching}>
              Salvar
            </ButtonStyled>
          </ContainerFooterStyled>
        </FormStyled>
      )}
    </ContainerStyled>
  );
};
