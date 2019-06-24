import LocalStore from '../Store';

const lcStore = new LocalStore('items');

const initItems = lcStore.getItem() || [];

const todoItems = (state = initItems, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'TOGGLE_TODO':
      return  state.map(item =>
        item.id === action.id ?
          {...item, completed: !item.completed}
            : item
      )

    case 'DELETE_TODO':
        return state.filter(item => item.id !== action.id)

    case 'EDIT_TODO':
      return state.map(item =>
        item.id === action.id ?
          {...item, text: action.text}
            : item
      )

    case 'TOGGLE_ALL_TODO':
      return (state.every(item => item.completed === true) ?
        state.map(item => ({...item, completed: false}))
          : state.map(item => ({...item, completed: true})));

    case 'REMOVE_COMPLETED_TODO':
      return state.filter(item => !item.completed)

    default :
      return state
  }
}

export default todoItems