const participationDateList = require('./fakeapis/ParticipationDateList.json');
const pickupPoints = require('./fakeapis/PickupPoints.json');
const applicationResult = require('./fakeapis/ApplicationResult.json');

module.exports = () => ({
  participationDateList: participationDateList,
  pickupPoints: pickupPoints,
  applicationResult: applicationResult
});
