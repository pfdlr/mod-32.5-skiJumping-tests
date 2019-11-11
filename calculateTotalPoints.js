const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

// hillSize names /string/: normal, big, mammouth
// styleNotes is array

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  const total = distancePoints + stylePoints + windFactor + gateFactor
    
  return (Math.round(total*10)/10);
  
}

module.exports = calculateTotalPoints;