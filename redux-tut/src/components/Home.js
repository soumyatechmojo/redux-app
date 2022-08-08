import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>

      <div className="Cart-Wrapper">
        <div className="Image-wrapper">
            <img src='https://dummyjson.com/image/i/products/1/thumbnail.jpg' alt='I-Phone 13' />
        </div>
        <div className="text-wrapper item">
            <span>
                <strong>I-Phone 9</strong>
            </span>
            <span>
                Price: 1,13,000
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
