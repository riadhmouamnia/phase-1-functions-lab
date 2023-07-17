// distanceFromHqInBlocks() returns a distance in blocks, calculates distances below 42nd street
function distanceFromHqInBlocks(pickupLocation) {
  const scuberHeadquarters = 42;
  if (pickupLocation >= scuberHeadquarters) {
    return pickupLocation - scuberHeadquarters;
  } else {
    return scuberHeadquarters - pickupLocation;
  }
}

// distanceFromHqInFeet() returns a distance in feet, calculates distances below 42nd street
// each block in Manhattan is 264 feet long
function distanceFromHqInFeet(pickupLocation) {
  const scuberHeadquarters = 42;
  if (pickupLocation >= scuberHeadquarters) {
    return (pickupLocation - scuberHeadquarters) * 264;
  } else {
    return (scuberHeadquarters - pickupLocation) * 264;
  }
}

// distanceTravelledInFeet()
// 1) returns the distance travelled in feet
// 2) returns a distance in feet
// 3) returns distance when destination is below distance
function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

// calculatesFarePrice(start, destination)
// 1) gives customers a free sample
// 2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// 3) charges 25 dollars for a distance over 2000 feet
// 4) does not allow rides over 2500 feet
function calculatesFarePrice(start, destination) {
  if (destination >= start) {
    const feets = (destination - start) * 264;
    if (feets <= 400) {
      return 0;
    } else if (feets > 400 && feets <= 2000) {
      return 2.56;
    } else if (feets > 2000 && feets <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  // when destination is below distance
  else {
    const feets = (start - destination) * 264;
    if (feets <= 400) {
      return 0;
    } else if (feets > 400 && feets <= 2000) {
      return 2.56;
    } else if (feets > 2000 && feets <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
}
