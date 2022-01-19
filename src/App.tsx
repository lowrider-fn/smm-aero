import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router';

import { RoutePath, Router } from './router';
import { theme } from './utils/theme';
import { GlobalStyle, InnerStyled, MainStyled } from './styled';
import { Header } from './components/Header';

import type { SigninDataType, SignupDataType } from '@/store';

import { AuthStore } from '@/store';

const App = observer(() => {
  const history = useHistory();
  const {
    isAuth,
    signin,
    logout,
    signup
  } = AuthStore;

  const handleLogout = () => {
    logout();
    history.push(RoutePath.Main);
  };

  const handleSignup = (data: SignupDataType) => {
    signup(data);
    history.push(RoutePath.Profile);
  };

  const handleSignin = (data: SigninDataType) => {
    signin(data);
    history.push(RoutePath.Profile);
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
