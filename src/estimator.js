const covid19ImpactEstimator = (data) => {
  const input = [
    data : {
      region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: "days",
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
      
    }
  ];

  return {
    data: input,
    impact: {
      currentlyInfected : input.reportedCases * 10,
      infectionsByRequestedTime : currentlyInfected * 512
    },
    severeImpact: {
      currentlyInfected : input.reportedCases * 50,
      infectionsByRequestedTime : currentlyInfected * 512
    }
  };
}
export default covid19ImpactEstimator;
