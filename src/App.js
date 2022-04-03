import React from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';

import HomePage from './pages/Home';

function App() {
  return <div className="d-flex flex-row">
    <Navbar />
    <Container>
      <HomePage />
    </Container>
  </div>
}

export default App;
