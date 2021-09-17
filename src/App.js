import React from 'react';
import Header from './component/component1/Header';
import Container2 from './component/component2/Container2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';
import Sponsor from './component/sponsors/Sponsor';
import Gallery from './component/gallery/Gallery';


function App() {
  return (
    <div className="App">
      <Header/>
      <Container2/>
      <Gallery/>
      <Sponsor />
      <Footer />
    </div>
  );
}

export default App;
