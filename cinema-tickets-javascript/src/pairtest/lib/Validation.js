module.exports.isAccountIdValid = function isAccountIdValied(number) {
  return number > 0;
};

module.exports.maxTwentyTickets = function maxTwentyTickets(number) {
  return number <= 20;
};

module.exports.minOneAdult = function minOneAdult(data) {
  const { adultTickets } = data;
  return adultTickets > 0;
};
