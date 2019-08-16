const phoneNumber = require('./phoneNumber');

test('One', () => {
  const ph = phoneNumber('+1(858)775-2868');

  expect(ph.originalText).toBe('+1(858)775-2868');
  expect(ph.parsedNumber).toBe('+18587752868');
  expect(ph.format.toNorthAmerican()).toBe('(858)775-2868');
  expect(ph.format.toInternational()).toBe('+1.858.775.2868');
});

test('Two', () => {

});

test('Three', () => {

});

test('Four', () => {

});

test('Five', () => {

});