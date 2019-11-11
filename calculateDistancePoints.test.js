const assert = require("assert");
const calculateDistancePoints = require ("./calculateDistancePoints");

describe('calculateDistancePoints', () => {
    it('should return points for normal hill', () => {
        const actual = calculateDistancePoints(103.5, 'normal', 98);
        const expected = 71;
        const message = 'Check \`hillSize\` name or type of data';
        assert.equal(actual, expected, message);
    });
    it('should return points for big hill', () => {
        const actual = calculateDistancePoints(103.5, 'big', 98);
        const expected = 69.9;
        const message = 'Check \`hillSize\` name or type of data';
        assert.equal(actual, expected, message);
    });
    it('should return points for mammouth hill', () => {
        const actual = calculateDistancePoints(225, 'mammouth', 200);
        const expected = 150;
        const message = 'Check \`hillSize\` name or type of data';
        assert.equal(actual, expected, message);
    });
    
});
