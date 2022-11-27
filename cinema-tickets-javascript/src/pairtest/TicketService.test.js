//import {orderBreakdown} from './Utilities'
const { orderBreakdown, orderPrice, orderSeats} = require("../pairtest/lib/Utilities");

describe("breakdown the order into types of tickets", () => {
  it(`3 child, 1 adult`, () => {
    expect(orderBreakdown(["CHILD", "CHILD", "ADULT", "CHILD"])).toEqual({
      ADULT: 1,
      CHILD: 3,
      INFANT: 0,
    });
  });
});

