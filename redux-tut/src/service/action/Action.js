import AddToCart from "../reducers/Constant"

const addToCart = (data) => {
  return {
    
    type : AddToCart,
    data:data
  }
}

export default addToCart