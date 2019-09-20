const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function arrivalTime(travelInformation) {
      return `${Math.floor(travelInformation['destinationDistance'] / travelInformation['speed'])} hours and ` +
      `${travelInformation['destinationDistance'] % travelInformation['speed']} minutes`
  }

  const travelTime = arrivalTime(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes

