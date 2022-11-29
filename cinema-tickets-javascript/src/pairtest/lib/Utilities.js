//import TicketTypeRequest from "../src/lib/TicketTypeRequest";

const { Prices } = require("../lib/Prices");

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
  let adultCombinedPrice = obj.ADULT * Prices.adult;
  let childCombinedPrice = obj.CHILD * Prices.child;
  let infantCombinedPrice = obj.INFANT * Prices.infant;
  let totalPrice =
    adultCombinedPrice + childCombinedPrice + infantCombinedPrice;
  return totalPrice;
};

module.exports.orderSeats = function orderSeats(obj) {
  //iput is an object with number of each ticket type
  let totalSeats = obj.ADULT + obj.CHILD;
  return totalSeats;
};
