//import TicketTypeRequest from "./lib/TicketTypeRequest.js";
//import InvalidPurchaseException from "./lib/InvalidPurchaseException.js";

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
  /**
   * Should only have private methods other than the one below.
   */

  isRequestValid(accountId, array) {
    let obj = orderBreakdown(array);
    let validity =
      isAccountIdValid(accountId) &&

      
      maxTwentyTickets(obj) &&
      minOneAdult(obj)
    && infantAdultRatio(obj)
    return validity;
  }

  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
  }
}
