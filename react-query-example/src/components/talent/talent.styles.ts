import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerStyled = styled.div`
  padding: 2% 5% 0;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: 0.8px solid ${({ theme }) => theme.palette.primary.dark};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    opacity: 0.8;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 20px;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px ${({ theme }) => theme.palette.gray.light};
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: 30px;
  width: 300px;

  &:hover {
    opacity: 0.8;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
`;

export const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputStyled = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 0.8px solid ${({ theme }) => theme.palette.gray.main};
  outline-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  border: 0.8px solid ${({ theme }) => theme.palette.primary.dark};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonSecondaryStyled = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  border: 0.8px solid ${({ theme }) => theme.palette.primary.dark};
  background-color: ${({ theme }) => theme.palette.gray.light};
  color: ${({ theme }) => theme.palette.primary.dark};

  &:hover {
    opacity: 0.8;
  }
`;

export const SpanError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.common.danger};
`;

export const ContainerFooterStyled = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;
