const {
  isAccountIdValid,
  maxTwentyTickets,
  minOneAdult,
} = require("../lib/Validation");

describe("testing account id", () => {
  it(`id is less than zero`, () => {
    expect(isAccountIdValid({ accountId: -100 })).toEqual(false);
  });
  it(`id is greater than zero`, () => {
    expect(isAccountIdValid({ accountId: 300 })).toEqual(true);
  });
  it(`id is zero`, () => {
    expect(isAccountIdValid({ accountId: 0 })).toEqual(false);
  });
});

describe("testing 20 tickets max", () => {
  it(`7 tickets`, () => {
    expect(
      maxTwentyTickets({
        ADULT: 4,
        CHILD: 3,
        INFANT: 0,
      })
    ).toEqual(true);
  });
  it(`777 tickets`, () => {
    expect(
      maxTwentyTickets({
        ADULT: 777,
        CHILD: 0,
        INFANT: 0,
      })
    ).toEqual(false);
  });
  it(`20 tickets`, () => {
    expect(
      maxTwentyTickets({
        ADULT: 6,
        CHILD: 7,
        INFANT: 7,
      })
    ).toEqual(true);
  });
});

describe("require at least one adult ticket", () => {
  it(`1 adult tickets`, () => {
    expect(
      minOneAdult({
        ADULT: 1,
        CHILD: 7,
        INFANT: 7,
      })
    ).toBe(true);
  });
  it(`10 adult tickets`, () => {
    expect(
      minOneAdult({
        ADULT: 10,
        CHILD: 1,
        INFANT: 1,
      })
    ).toBe(true);
  });
  it(`0 adult tickets`, () => {
    expect(
      minOneAdult({
        ADULT: 0,
        CHILD: 1,
        INFANT: 1,
      })
    ).toBe(false);
  });
});
