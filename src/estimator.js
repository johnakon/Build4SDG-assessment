export const convertToDays = (periodType, timeToElapse) => {
  let timeInDays;
  switch (periodType) {
    case 'months':
      timeInDays = timeToElapse * 30;
      break;
    case 'weeks':
      timeInDays = timeToElapse * 7;
      break;
    default:
      timeInDays = timeToElapse;
  }
  return timeInDays;
};

const commonFunction = (currentlyInfected, data) => {
  const { periodType, timeToElapse } = data;

  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime =
    currentlyInfected * 2 ** Math.trunc(timeInDays / 3);
  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  // const hospitalBedAvailable = totalHospitalBeds * 0.35;
  // const hospitalBedsByRequestedTime = Math.trunc(hospitalBedAvailable - severeCasesByRequestedTime);
  // const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  // const casesForVentilatorsByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  // const avgDollarXIncomePopXtime = avgDailyIncomePopulation * avgDailyIncomeInUSD;
  // const dollarOut = (infectionsByRequestedTime * avgDollarXIncomePopXtime) / timeInDays;
  // const dollarsInFlight = Math.floor(dollarOut);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime
    //   hospitalBedsByRequestedTime,
    //   casesForICUByRequestedTime,
    //   casesForVentilatorsByRequestedTime,
    //   dollarsInFlight
  };
};

export const impactCases = (data) => {
  const { reportedCases } = data;
  const currentlyInfected = reportedCases * 10;
  return commonFunction(currentlyInfected, data);
};

export const severeImpactCases = (data) => {
  const { reportedCases } = data;
  const currentlyInfected = reportedCases * 50;
  return commonFunction(currentlyInfected, data);
};

const covid19ImpactEstimator = (data) =>
  //   const impact = {};
  //   const severImpact = {};

  //   let days;
  //   if (data.periodType === 'days') {
  //     days = data.timeToElapse;
  //   } else if (data.periodType === 'weeks') {
  //     days = data.timeToElapse * 7;
  //   }
  //   if (data.periodType === 'months') {
  //     days = data.timeToElapse * 30;
  //   }

  //   impact.currentlyInfected = data.reportedCases * 10;
  //   severImpact.currentlyInfected = data.reportedCases * 50;

  //   const value = Math.trunc(days / 3);

  //   impact.infectionsByRequestedTime = Math.trunc(
  //     impact.currentlyInfected * 2 ** value
  //   );
  //   severImpact.infectionsByRequestedTime = Math.trunc(
  //     severImpact.currentlyInfected * 2 ** value
  //   );

  //   return {
  //     data,
  //     estimator: {
  //       impact,
  //       severImpact
  //     }
  //   };

  ({
    data,
    impact: impactCases(data),
    severeImpact: severeImpactCases(data)
  });

export default covid19ImpactEstimator;
