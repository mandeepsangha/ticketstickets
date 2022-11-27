import TicketTypeRequest from "./lib/TicketTypeRequest.js";
import InvalidPurchaseException from "./lib/InvalidPurchaseException.js";

const {
  isAccountIdValid,
  maxTwentyTickets,
  minOneAdult,
} = require("../lib/Validation");
const { orderBreakdown, orderPrice, orderSeats } = require("./Utilities");

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

isRequestValid


  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
  }
}
