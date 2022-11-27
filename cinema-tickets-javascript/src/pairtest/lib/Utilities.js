//import TicketTypeRequest from "./lib/TicketTypeRequest";

// const { TicketTypeRequest } = require("../lib/TicketTypeRequest");

// const {getTicketType} = TicketTypeRequest;

module.exports.orderBreakdown = function orderBreakdown(arr) {


  let obj = {"ADULT":0, "CHILD":0,"INFANT":0};

  adultCount = arr.filter(x => x === "ADULT").length;
  childCount = arr.filter(x => x === "CHILD").length;
  infantCount = arr.filter(x => x === "INFANT").length;

  obj.ADULT = adultCount
  obj.CHILD = childCount
  obj.INFANT = infantCount

return obj;
  
  // for (const num of arr) {
  //   counts[num] = counts[num] ? counts[num] + 1 : 1;
  // }

  // return counts;

};

module.exports.orderPrice = function orderPrice(object) {};

module.exports.orderSeats = function orderSeats(object) {};
