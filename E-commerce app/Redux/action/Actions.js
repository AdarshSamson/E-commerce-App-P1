import {ADD_ITEM, REMOVE_ITEM,CHECK_ITEM} from '../ActionTypes';

export const addItemToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});

export const removeItemFromCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});

export const checkitem=data=>({
  type:CHECK_ITEM,
  payload:data,
})
