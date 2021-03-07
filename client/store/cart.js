import axios from 'axios'

//Action type
const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
const EDIT_PRODUCT_QUANTITY = 'EDIT_PRODUCT_QUANTITY'

//Action creator
export const fetchCartItems = (products) => {
  return {
    type: FETCH_CART_ITEMS,
    products,
  }
}

export const addItemToCart = (product) => {
  return {
    type: ADD_ITEM_TO_CART,
    product,
  }
}

export const removeItemFromCart = (product) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    product,
  }
}

export const editProductQuantity = (updatedProduct) => {
  return {
    type: EDIT_PRODUCT_QUANTITY,
    updatedProduct,
  }
}

//Thunk
export const _setCartItems = (products) => {
  return async (dispatch) => {
    try {
      const {data} = axios.get('/api/cart') //needs to be cart/cartId but not sure how to generate cartId for guest
      dispatch(fetchCartItems(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const _addItemToCart = (product) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post('/api/cart', product)
      dispatch(addItemToCart(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const _removeItemFromCart = (product) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`/api/cart/${product.id}`)
      dispatch(removeItemFromCart(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const updateProductQuantity = (cartId, productId, quantity) => {
  return async (dispatch) => {
    try {
      const updatedProduct = (
        await axios.put(`/api/cart/${cartId}/product/${productId}`, quantity)
      ).data
      dispatch(editProductQuantity(updatedProduct))
    } catch (err) {
      console.error(err)
    }
  }
}

//Sub-reducer
const initialState = []
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return action.products
    case ADD_ITEM_TO_CART:
      return [...state, action.product]
    case REMOVE_ITEM_FROM_CART:
      return state.filter((product) => product.id !== action.product.id)
    case EDIT_PRODUCT_QUANTITY:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      )
    default:
      return state
  }
}

//User clicks on 'add to cart'
//handleSubmit function on button dispatches "_addItemToCart" thunk from single product view
//User is redirected to cart
//cart array in store is mapped to props on cart component and renders when new cart items are added or deleted

//User clicks on "dete item from cart"
//delete item from cart function dispatches "_removeItemFromCart" thunk from cart component
//"_removeItemFromCart" thunk is mappedToDispatch on cart component
