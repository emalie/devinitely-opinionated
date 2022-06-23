import './App.css';
import styled from 'styled-components';

import Home from './pages/Home';

function App() {
  const AppWrapper = styled.div`
    height: 100vh;
    width: auto;
    font-family: 'Lato', sans-serif;
    --color-primary: #F8F8F8;
    --color-secondary: #DAA520;
  `;

  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
