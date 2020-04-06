import React, {useState, useReducer} from 'react';
import items from "../../dummyData"
import Basket from "../Basket/index"
import './App.css';
import ShopFront from "../ShopFront"

// [Will soon be] The best plan ever. 
// Make shopping basket 
  // App component - shop front 
  // Basket
      // 
    // inputs 
    // items 
      // 
    // Error component triggered if too many items 

// Make tests 
  // Can't have more than limti items in basket for any one item 
  // Can't have more than sum of all total limits in a basket 
  // Can't have less than 0 items in basket 
  // Total cost should match items * quantity * cost 
  // All tests in basket 
const initialState = {
  beer: 0,
  toiletRoll: 0,
  toothpaste: 0,
  plainFlour: 0
}

const limits = {
  beer: 5,
  toiletRoll: 1,
  toothpaste: 3,
  plainFlour: 15
}

export function reducer(state, action){
  switch(action.type){
    case "addBeer": 
      if (state.beer < limits.beer) return {...state, beer: state.beer + 1};
      break; 
    case "subtractBeer": 
      if (state.beer > 0) return {...state, beer: state.beer - 1 };
      break; 
    default: 
      throw new Error();
  }
}

function App() {
  const [basket, setBasket] = useState(initialState)


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <ShopFront state={basket} changeState={setBasket} shopItems={items} />
      <Basket basketContents={items}/>
      
    </div>
  );
}

export default App;
