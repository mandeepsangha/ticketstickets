const {
  isAccountIdValid,
  maxTwentyTickets,
  minOneAdult,
} = require("../lib/Validation");

describe("testing account id", () => {
  it(`id is less than zero`, () => {
    expect(isAccountIdValid(-100)).toEqual(false);
  });
  it(`id is greater than zero`, () => {
    expect(isAccountIdValid(300)).toEqual(true);
  });
  it(`id is zero`, () => {
    expect(isAccountIdValid(0)).toEqual(false);
  });
});

describe("testing 20 tickets max", () => {
  it(`7 tickets`, () => {
    expect(maxTwentyTickets(7)).toEqual(true);
  });
  it(`777 tickets`, () => {
    expect(maxTwentyTickets(777)).toEqual(false);
  });
  it(`20 tickets`, () => {
    expect(maxTwentyTickets(20)).toEqual(true);
  });
});

describe("require at least one adult ticket", () => {
  it(`1 adult tickets`, () => {
    expect(minOneAdult({ adultTickets: 1, childTickets: 0 })).toBe(true);
  });
  it(`10 adult tickets`, () => {
    expect(minOneAdult({ adultTickets: 10, infantTickets: 7 })).toBe(true);
  });
  it(`0 adult tickets`, () => {
    expect(minOneAdult({ adultTickets: 0, childTickets: 23 })).toBe(false);
  });
});
