import { formatTime } from '../formatters';

describe('formatTime', () => {
  it('should return correct result', () => {
    const testData = [
      [0, '00:00'],
      [5, '00:05'],
      [15, '00:15'],
      [60, '01:00'],
      [3598, '59:58'],
      [2.6, '00:02'],
    ];
    testData.forEach(data => expect(formatTime(data[0])).toEqual(data[1]));
  });
});
