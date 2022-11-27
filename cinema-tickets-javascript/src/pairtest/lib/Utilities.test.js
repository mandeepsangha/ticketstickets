//import {orderBreakdown} from './Utilities'
const { orderBreakdown } = require("./Utilities");

describe("breakdown the order into types of tickets", () => {
  it(`3 child, 1 adult`, () => {
    expect(orderBreakdown(["CHILD", "CHILD", "ADULT", "CHILD"])).toEqual({
      ADULT: 1,
      CHILD: 3,
      INFANT: 0,
    });
  });
  it(` checking order of elements in array and 1 adult, 1 infant`, () => {
    expect(orderBreakdown([ "ADULT", "INFANT" ])).toEqual({
      ADULT: 1,
      CHILD: 0,
      INFANT: 1,
    });
  });
  it(`checking only 1 type of ticket ordered:4 adults `, () => {
    expect(orderBreakdown(["ADULT", "ADULT", "ADULT", "ADULT"])).toEqual({
      ADULT: 4,
      CHILD: 0,
      INFANT: 0,
    });
  });
});
