import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const AppWrapper = styled.div`
  height: 100%;
  width: auto;
  font-family: 'Lato', sans-serif;
  --color-primary: #292C2C;
  --color-secondary: #F8F8F8;
  --color-tertiary: #DAA520;
  --background-primary: #AEA7A3;
  --background-secondary: #454B4B;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
