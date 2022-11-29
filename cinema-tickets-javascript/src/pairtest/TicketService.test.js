import TicketService from "../pairtest/TicketService";
import TicketPaymentService from "../thirdparty/paymentgateway/TicketPaymentService";
import SeatReservationService from "../thirdparty/seatbooking/SeatReservationService";

let testTicketService = new TicketService();
let testTicketPaymentService = new TicketPaymentService();
let testSeatReservationService = new SeatReservationService();

describe("is input valid", () => {
  it(`valid 1 child, 1 adult`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: 300 }, ["INFANT", "ADULT"])
    ).toEqual(true);
  });
  it(`invalid accountId is a string not a number`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: "300" }, [
        "INFANT",
        "ADULT",
      ])
    ).toEqual(false);
  });
  it(`invalid More Infants than Adults`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: 7 }, [
        "INFANT",
        "ADULT",
        "INFANT",
      ])
    ).toEqual(false);
  });
  it(`invalid more than 20 tickets`, () => {
    expect(
      testTicketService.isRequestValid({ accountId: 2 }, [
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


describe("is input valid", () => {
  it(`purchaseTickets orderBreakdown`, () => {
    expect(
      testTicketService.purchaseTickets(100, ["INFANT", "ADULT"])
    ).toEqual({INFANT:1, ADULT:1, CHILD:0});
  });
});