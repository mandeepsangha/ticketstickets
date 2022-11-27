module.exports.isAccountIdValid = function isAccountIdValid(obj) {
  const { accountId } = obj;
  return accountId > 0;
};

module.exports.maxTwentyTickets = function maxTwentyTickets(obj) {
  return obj.ADULT + obj.CHILD + obj.INFANT <= 20;
};

module.exports.minOneAdult = function minOneAdult(obj) {
  return obj.ADULT > 0;
};

module.exports.infantAdultRatio = function infantAdultRatio(obj) {
  return obj.ADULT >= obj.INFANT;
};
