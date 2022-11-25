import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px);
  width: 100%;
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px ${({ theme }) => theme.palette.gray.light};
  padding: 30px;
  width: 500px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
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

export const SpanError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.common.danger};
`;
