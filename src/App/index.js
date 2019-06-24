import React from 'react';
import { connect } from 'react-redux';
import Header from './component/Header/index';
import Main from './component/Main/index';
import Footer from './component/Footer/index';
import LocalStore from './Store';


class App extends React.Component{
  constructor(props){
    super(props);
    this.lcStore = new LocalStore('items');
    this.lcFilter = new LocalStore('filter');
  }

  countCompleted = () => {
    const { todoItems } = this.props;
    let counter = 0;
    todoItems.forEach(item => {
      if(item.completed){
        counter++;
      }
    });

    return counter;
  }

  render(){
    return(
      <section className='todo'>
        <Header
          lcStore={this.lcStore}
          lcFilter={this.lcFilter}
        />
        <Main
          lcStore={this.lcStore}
          lcFilter={this.lcFilter}
          countCompleted={this.countCompleted}
        />
        <Footer
          lcStore={this.lcStore}
          lcFilter={this.lcFilter}
          countCompleted={this.countCompleted}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoItems: state.todoItems
  }
}

export default connect(mapStateToProps)(App);
