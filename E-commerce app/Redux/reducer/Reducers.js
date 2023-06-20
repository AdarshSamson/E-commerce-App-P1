import {ADD_ITEM, REMOVE_ITEM,CHECK_ITEM} from '../ActionTypes';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
      item.qty=item.qty+1
    case REMOVE_ITEM:
      const deleteArray = state.filter((item,index) => {
        return index !== action.payload;
        item.qty=item.qty-1;
   

      });

      return deleteArray;
      case CHECK_ITEM:
        return state.data.push(action.payload)
   
    default:
      return state;
  }
};
