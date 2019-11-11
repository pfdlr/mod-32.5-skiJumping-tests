const assert = require("assert");
const calculateTotalPoints = require("./calculateTotalPoints");

const data = {
  normal: {
    kPoint: 98,
    distance: 111,
    results: [19, 19, 19, 19, 19.5],
    wind: 3.2,
    gate: -14.4
  },
  big: {
    kPoint: 120,
    distance: 134,
    results: [19.0, 20.0, 19.5, 19.0, 18.5],
    wind: 0,
    gate: -5.4
  },
  mammouth: {
    kPoint: 200,
    distance: 225,
    results: [18, 18.5, 18, 18, 19],
    wind: 8.7,
    gate: -9.9
  }
};

describe("calculateTotalPoints", () => {
  it("should return total normal hill points", () => {
    const actual = calculateTotalPoints(data.normal.distance, "normal", data.normal.kPoint, data.normal.results, data.normal.gate, data.normal.wind);

    const expected = 131.8;

    assert.equal(actual, expected);
  });
  it("should return total big hill points", () => {
    const actual = calculateTotalPoints(data.big.distance, "big", data.big.kPoint, data.big.results, data.big.gate, data.big.wind);

    const expected = 137.3;

    assert.equal(actual, expected);
  });

  it("should return total mammouth hill points", () => {
    const actual = calculateTotalPoints(data.mammouth.distance, "mammouth", data.mammouth.kPoint, data.mammouth.results, data.mammouth.gate, data.mammouth.wind);

    const expected = 203.3;

    assert.equal(actual, expected);
  });
});
