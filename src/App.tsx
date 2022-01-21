import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router';

import { RoutePath, Router } from './router';
import { theme } from './utils/theme';
import { GlobalStyle, InnerStyled, MainStyled } from './styled';
import { Header } from './components/Header';

import type { SigninDataType, SignupDataType } from '@/store';

import { AuthStore } from '@/store';

const App = observer(() => {
  const navigate = useNavigate();
  const {
    isAuth,
    signin,
    logout,
    signup
  } = AuthStore;

  const handleLogout = () => {
    logout();
    navigate(RoutePath.Main);
  };

  const handleSignup = (data: SignupDataType) => {
    signup(data);
    navigate(RoutePath.Profile);
  };

  const handleSignin = (data: SigninDataType) => {
    signin(data);
    navigate(RoutePath.Profile);
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />

      <Header
        isAuth={ isAuth }
        onLogout={ handleLogout }
        onSignup={ handleSignup }
        onSignin={ handleSignin }
      />

      <MainStyled>
        <InnerStyled>
          <Router />
        </InnerStyled> 
      </MainStyled>
    </ThemeProvider>
  );
});

export default App;
