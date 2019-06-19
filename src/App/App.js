import React from 'react';
import Header from './component/Header/index';
import Main from './component/Main/index';
import Footer from './component/Footer/index';

class App extends React.Component{

  render(){
    return(
      <section className='todo'>
        <Header />
        <Main />
        <Footer />
      </section>
    );
  }
}


export default App;
