const { isAccountIdValid } = require("../lib/Validation");

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
