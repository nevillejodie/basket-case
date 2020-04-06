import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

import { reducer } from "./index"

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("should add + 1 to beer", () => {
  const expected = {
    beer: 1,
    toiletRoll: 0,
    toothpaste: 0,
    plainFlour: 0
  }
  const actual = reducer({beer: 0,
    toiletRoll: 0,
    toothpaste: 0,
    plainFlour: 0}, {type: "addBeer"})
    expect(actual).toStrictEqual(expected)
})

test("should subtract - 1 from beer", () => {
  const expected = {
    beer: 0,
    toiletRoll: 0,
    toothpaste: 0,
    plainFlour: 0
  }
  const actual = reducer({beer: 1,
    toiletRoll: 0,
    toothpaste: 0,
    plainFlour: 0}, {type: "subtractBeer"})
    expect(actual).toStrictEqual(expected)
})



// test("should not allow items in basket to exceed item limit", () => {
//   // test
//   })

//   test("can't have less than 0 items in basket", () => {
//       //test 
//   })

//   test("total cost should match items * quantity * cost", () => {
//       const expected = 
//       const actual = 
//       expect(actual).toStrictEqual(expected)
//   })

//   test("Can't have more than sum of all total limits in a basket", () => {
//       //test
//   })
