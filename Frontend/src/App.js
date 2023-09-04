import React from 'react';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import ApiState from './components/ApisState'

function App() {
  return (
    <React.Fragment>
      <ApiState />
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </React.Fragment>
  );
}

export default App;
