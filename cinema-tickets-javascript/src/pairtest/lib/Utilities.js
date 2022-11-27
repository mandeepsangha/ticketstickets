//import TicketTypeRequest from "./lib/TicketTypeRequest";

const { Prices } = require("../lib/Prices");

// const {getTicketType} = TicketTypeRequest;

module.exports.orderBreakdown = function orderBreakdown(arr) {
  let obj = { ADULT: 0, CHILD: 0, INFANT: 0 };

  obj.ADULT = arr.filter((x) => x === "ADULT").length;
  obj.CHILD = arr.filter((x) => x === "CHILD").length;
  obj.INFANT  = arr.filter((x) => x === "INFANT").length;

  return obj;
};

module.exports.orderPrice = function orderPrice(obj) {
 
  adultCombinedPrice = obj.ADULT * Prices.adult;
  childCombinedPrice = obj.CHILD * Prices.child;
  infantCombinedPrice = obj.INFANT * Prices.infant;

  totalPrice = adultCombinedPrice + childCombinedPrice + infantCombinedPrice;

  return totalPrice;
};

module.exports.orderSeats = function orderSeats(object) {};
