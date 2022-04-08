import React, { useEffect, useState } from 'react';

import Loading from './components/Loading/Loading';
import Container from './components/Container';
import Navbar from './components/Navbar';

function App(props) {
  const [showLoading, setShowLoading] = useState(true);

  /**
   * On finish loading
   * 
   * @return
   */
  const onFinishLoading = () => {
    setShowLoading(false);
  }

  return showLoading
    ? <Loading
      duration={5000}
      onFinish={onFinishLoading}
    />
    : <div className="d-flex flex-row">
      <Navbar />
      <Container>
        {props.children}
      </Container>
    </div>
}

export default App;
