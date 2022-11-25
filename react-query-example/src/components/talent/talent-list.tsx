import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTalents, queryKeys } from '../../services';
import { ContainerStyled, HeaderStyled, LinkStyled, ListItem, ListStyled } from './talent.styles';

export const TalentList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery([queryKeys.talents], getTalents);

  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>Talentos</h1>

        <LinkStyled to='/talents/new'>Novo talento</LinkStyled>
      </HeaderStyled>

      {isLoading && <div>Carregando...</div>}

      {isError && <div>Erro: {JSON.stringify(error)}</div>}

      {!isLoading && !isError && (
        <ListStyled>
          {data.map((talent) => (
            <ListItem onClick={() => navigate(`/talents/${talent.id}`)}>
              <img src={talent.avatarUrl} alt='Avatar' width={100} />
              <h2>{talent.name}</h2>
              <p>{talent.education}</p>
            </ListItem>
          ))}
        </ListStyled>
      )}
    </ContainerStyled>
  );
};
