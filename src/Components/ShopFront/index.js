import React, {useState} from 'react'
import css from "./shopfront.module.css"

const ShopFront = ({shopItems, state, changeState}) => {
  const [dropdownVal, setDropdownVal] = useState(0)

  function changeItems(e){
    changeState({...state, [e.name]:e.target.value})
  }

  function changeDropdown(e){
    // setDropdownVal
    return;
  }

    return (
        <div className={css.div1}>
          {shopItems.map(item => <li>
          <p>{item.name}</p>
          <img src={item.img} />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <select name={item.id}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          </select>
          <button>Add to basket</button>
          </li>)}
        </div>
    )
}

export default ShopFront