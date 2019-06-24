import React from 'react';
import './style.css';

class TodoItem extends React.Component{

  createEditInput = ({blur, edit, item, editing}) => {
    if(editing === item.id){
      return <input
        className='edit show'
        onBlur={blur}
        onKeyDown={edit}
        id={item.id}
        autoFocus
    ></input>
    }
  }

  render(){
    const { item, toggle, remove, showEdit, editing, blur, edit } = this.props;
    const obj = {
      blur,
      edit,
      item,
      editing
    }
    const input = this.createEditInput(obj);

    return(
      <li className='todo-list__item'>
        <div className='todo-list__item-content' id={item.id}>
          <input type='checkbox' id='todo-list__item-check' className='todo-list__item-check'></input>
          <label
            className= {item.completed ? 'todo-list__item-check-label check' : 'todo-list__item-check-label'}
            htmlFor='todo-list__item-check'
            onClick={()=>toggle(item.id)}
          ></label>
          <span
            className='todo-list__item-text'
            onDoubleClick={()=>showEdit(item.id)}
          >{item.text}</span>
          <button
            className='todo-list__item-close'
            onClick={()=>remove(item.id)}
          >X</button>
        </div>
        {input}
      </li>
    );
  }
}

export default TodoItem