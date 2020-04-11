const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severImpact = {};
  let days;



  if (periodType === 'days') {
    days = timeToElapse;
  } else if (periodType === 'weeks') {
    days = timeToElapse * 7;
  }
  if (data.periodType === 'months') {
    days = timeToElapse * 30;
  }


//   switch (periodType) {
//     case 'months':
//       timeInDays = timeToElapse * 30;
//       break;
//     case 'weeks':
//       timeInDays = timeToElapse * 7;
//       break;
//     default:
//       timeInDays = timeToElapse;
//   }
//   return timeInDays;
// };

  impact.currentlyInfected = data.reportedCases * 10;
  severImpact.currentlyInfected = data.reportedCases * 50;
  const value = Math.trunc(days / 3);

  impact.infectionsByRequestedTime = Math.trunc(
    impact.currentlyInfected * 2 ** value
  );
  severImpact.infectionsByRequestedTime = Math.trunc(
    severImpact.currentlyInfected * 2 ** value
  );

  return {
    data,
    estimator: {
      impact,
      severImpact
    }
  };
};
export default covid19ImpactEstimator;
