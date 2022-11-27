//import {orderBreakdown} from './Utilities'
const { orderBreakdown, orderPrice } = require("./Utilities");

describe("breakdown the order into types of tickets", () => {
  it(`3 child, 1 adult`, () => {
    expect(orderBreakdown(["CHILD", "CHILD", "ADULT", "CHILD"])).toEqual({
      ADULT: 1,
      CHILD: 3,
      INFANT: 0,
    });
  });
  it(` checking order of elements in array and 1 adult, 1 infant`, () => {
    expect(orderBreakdown(["ADULT", "INFANT"])).toEqual({
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

describe("takes breakdown and applies prices correctly and outputs total price fo the order", () => {
  it(`3 child, 1 adult`, () => {
    expect(
      orderPrice({
        ADULT: 1,
        CHILD: 3,
        INFANT: 0,
      })
    ).toEqual(50);
  });
  it(`2 of each`, () => {
    expect(
      orderPrice({
        ADULT: 2,
        CHILD: 2,
        INFANT: 2,
      })
    ).toEqual(60);
  });
  it(`0 tickets`, () => {
    expect(
      orderPrice({
        ADULT: 0,
        CHILD: 0,
        INFANT: 0,
      })
    ).toEqual(0);
  });
});
