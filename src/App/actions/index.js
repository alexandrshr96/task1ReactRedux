const id = new Date();
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: id.getTime(),
  text
})