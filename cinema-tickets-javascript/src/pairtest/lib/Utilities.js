//import TicketTypeRequest from "./lib/TicketTypeRequest";

const { Prices } = require("../lib/Prices");

// const {getTicketType} = TicketTypeRequest;

module.exports.orderBreakdown = function orderBreakdown(arr) {
  //input is an array where each element represents one ticket of the type selected
  let obj = { ADULT: 0, CHILD: 0, INFANT: 0 };
  obj.ADULT = arr.filter((x) => x === "ADULT").length;
  obj.CHILD = arr.filter((x) => x === "CHILD").length;
  obj.INFANT = arr.filter((x) => x === "INFANT").length;
  return obj;
};

module.exports.orderPrice = function orderPrice(obj) {
  //input is an object with number of each ticket type
  adultCombinedPrice = obj.ADULT * Prices.adult;
  childCombinedPrice = obj.CHILD * Prices.child;
  infantCombinedPrice = obj.INFANT * Prices.infant;
  return (totalPrice =
    adultCombinedPrice + childCombinedPrice + infantCombinedPrice);
};

module.exports.orderSeats = function orderSeats(obj) {
  //iput is an object with number of each ticket type
  return (totalSeats = obj.ADULT + obj.CHILD);
};
