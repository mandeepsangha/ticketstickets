import TicketTypeRequest from "./lib/TicketTypeRequest.js";
import InvalidPurchaseException from "./lib/InvalidPurchaseException.js";
import TicketPaymentService from "../thirdparty/paymentgateway/TicketPaymentService.js";
import SeatReservationService from "../thirdparty/seatbooking/SeatReservationService.js";

const {
  isAccountIdValid,
  maxTwentyTickets,
  minOneAdult,
  infantAdultRatio,
} = require("../pairtest/lib/Validation");

const {
  orderBreakdown,
  orderPrice,
  orderSeats,
} = require("../pairtest/lib/Utilities");

//export default

export default class TicketService {
  #ticketPaymentService;

  #seatReservationService;

  /**
   * Should only have private methods other than the one below.
   */

  //Private
  constructor() {
    this.#ticketPaymentService = new TicketPaymentService();
    this.#seatReservationService = new SeatReservationService();
  }

  isRequestValid(accountId, array) {
    let obj = orderBreakdown(array);
    let validity =
      isAccountIdValid(accountId) &&
      maxTwentyTickets(obj) &&
      minOneAdult(obj) &&
      infantAdultRatio(obj);
    return validity;
  }

  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException

    const tickets = orderBreakdown(...ticketTypeRequests);

    if ( isRequestValid(accountId, tickets)){

    ticketPaymentService.makePayment(accountId, orderPrice(tickets));
    seatReservationService.reservation(accountId, orderSeats(tickets));
    
    }

  }
}
