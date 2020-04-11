const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severImpact = {};
  let days;
  if (data.periodType === 'days') {
    days = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    days = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    days = data.timeToElapse * 30;
  }

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
