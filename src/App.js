import React, { useEffect, useState } from 'react';

import Loading from './components/Loading/Loading';
import Container from './components/Container';
import Navbar from './components/Navbar';

import { useDispatch } from 'react-redux'
import { closeNavbar } from './components/Navbar/slice';

function App(props) {
  const [showLoading, setShowLoading] = useState(true);
  const dispatch = useDispatch()

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
      duration={3000}
      onFinish={onFinishLoading}
    />
    : <div
      className="d-flex flex-row overflow-hidden position-relative"
      style={{ height: "100vh" }}
      onClick={() => dispatch(closeNavbar())}
    >
      <Navbar />
      <Container>
        {props.children}
      </Container>
    </div>
}

export default App;
