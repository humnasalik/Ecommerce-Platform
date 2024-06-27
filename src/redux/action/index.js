// action.js
export const addCart = (product) => ({
    type: 'ADDITEM',
    payload: product,
  });
  
  export const deleteCart = (product) => ({
    type: 'DELITEM',
    payload: product,
  });
  
  export const resetCart = () => ({
    type: 'RESET_CART',
  });

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});

  