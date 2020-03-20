import React from 'react';
//import ComponentTest from './components/componentTest'
import Navigation from './components/templets/navigation'
import Header from './components/templets/header'
import Footer from './components/templets/footer'

import Stock from './pages/stock'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Stock></Stock>
      <Footer></Footer>
    </div>
  );
}

export default App;
