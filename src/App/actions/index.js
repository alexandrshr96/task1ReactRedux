export const addTodo = text => ({
  type: 'ADD_TODO',
  id: new Date().getTime(),
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const editTodo = ({id, text}) => ({
  type: 'EDIT_TODO',
  id,
  text
})

export const toggleAllTodo = () => ({
  type: 'TOGGLE_ALL_TODO'
})

export const removeCompletedTodo = () => ({
  type: 'REMOVE_COMPLETED_TODO'
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})