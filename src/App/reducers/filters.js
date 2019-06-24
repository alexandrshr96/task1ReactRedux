import LocalStore from '../Store';

const lcFilter = new LocalStore('filter');

const initFilter = lcFilter.getItem() || 'SHOW_ALL';

const filters = (state = initFilter, action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default filters