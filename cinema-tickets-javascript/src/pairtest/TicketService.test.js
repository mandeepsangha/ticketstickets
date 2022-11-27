// const {
//   orderBreakdown,
//   orderPrice,
//   orderSeats,
// } = require("../pairtest/lib/Utilities");

// const {
//   isAccountIdValid,
//   maxTwentyTickets,
//   minOneAdult,
//   infantAdultRatio,
// } = require("../pairtest/lib/Validation");

//const {isRequestValid} = require("../pairtest/TicketService");
//import {isRequestValid} from "../pairtest/TicketService";
import TicketService from "../pairtest/TicketService";

let testTicketService = new TicketService();

describe("is input valid", () => {
  it(`1 child, 1 adult`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: 300 }, ["INFANT", "ADULT"])
    ).toEqual(true);
  });
  it(`More Infants than adults`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: 300 }, [
        "INFANT",
        "ADULT",
        "INFANT",
      ])
    ).toEqual(false);
  });
  it(`more than 20 tickets`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: 300 }, [
        "ADULT",
        "ADULT",
        "INFANT",
        "ADULT",
        "ADULT",
        "INFANT",
        "ADULT",
        "ADULT",
        "INFANT",
        "ADULT",
        "ADULT",
        "INFANT",
        "ADULT",
        "ADULT",
        "INFANT",
        "ADULT",
        "ADULT",
        "INFANT",
        "ADULT",
        "INFANT",
        "ADULT",
        "INFANT",
        "ADULT",
        "INFANT",
      ])
    ).toEqual(false);
  });
});
