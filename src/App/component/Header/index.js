import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';
import { store } from '../../../index';
import {SemanticHeader,Title,Input} from './style'

class Header extends React.Component{

  handleSubmit(e){
    if (e.keyCode !== 13) {
      return;
    }
    e.preventDefault();
    store.dispatch(addTodo(e.target.value));
  }

  render(){
    return(
      <SemanticHeader className='header'>
        <Title className="header__title">todos</Title>
        <Input className="header__input" placeholder="What needs to be done?"
          //onChange={this.props.update}
          onKeyDown={this.handleSubmit}
          value={this.props.value}
        ></Input>
      </SemanticHeader>
    );
  }
}

export default connect()(Header)