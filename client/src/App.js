import './App.css';
import styled from 'styled-components';

import Home from './pages/Home';

const AppWrapper = styled.div`
  height: 100vh;
  width: auto;
  font-family: 'Lato', sans-serif;
  background-color: #F4F4F4;
  --color-primary: #292C2C;
  --color-secondary: #F8F8F8;
  --color-tertiary: #DAA520;
  --background-primary: #AEA7A3;
`;

function App() {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
