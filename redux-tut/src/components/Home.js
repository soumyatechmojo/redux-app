import React from 'react'

const Home = () => {
  return (
    <div>

      <div className='add-to-cart'>
        <img src='https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg' alt='cart-button'/>
      </div>
      <h1>Shopping Cart</h1>

      <div className="Cart-Wrapper">
        <div className="Image-wrapper">
            <img src='https://dummyjson.com/image/i/products/1/thumbnail.jpg' alt='I-Phone 13' />
        </div>
        <div className="text-wrapper item">
            <span>
                <strong>I-Phone 9</strong>
            </span>
            <span>
                Price: $500
            </span>

        </div>
        <div className="button-wrapper">
            <button>
                Add To Cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
