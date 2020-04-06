import React from 'react'

const Basket = ({basketContents}) => {
    return (
        <div>
            <h1>Shopping basket contents</h1>
            <ul>{basketContents.map(item => <li>{item.name}<button onClick={() => setBasket(beer+1)} >+</button> </li>)}</ul>
           
        </div>
    )
}

export default Basket;