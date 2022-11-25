import { HeaderStyled } from './header.styles';

import logo from '../../assets/logo.png';

export const Header = () => (
  <HeaderStyled>
    <img src={logo} alt='Logo React Query' width={50} />
    <h1>React Query</h1>
  </HeaderStyled>
);
