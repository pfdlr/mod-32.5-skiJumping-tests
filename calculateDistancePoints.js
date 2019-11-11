const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const normalHillPoints = 60 + (2 * (distance - kPoint));
    const bigHillPoints = 60 + (1.8 * (distance - kPoint));
    const mammouthHillPoints = 120 + (1.2 * (distance - kPoint));

if (typeof hillSize === 'string' && hillSize === 'normal' || hillSize === 'big' || hillSize === 'mammouth') {
    if (hillSize === 'normal') {
        return normalHillPoints;
    }
    else if (hillSize === 'big') {
        return bigHillPoints;
    }
    else if (hillSize === 'mammouth') {
        return mammouthHillPoints;
    }
}
else {
    
    console.log('\"hillSize\" must be one of the string: normal, big, mammouth');
}
    
  };

  module.exports = calculateDistancePoints;