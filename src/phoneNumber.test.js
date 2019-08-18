const phoneNumber = require('./phoneNumber');

test('One', () => {
  const ph = phoneNumber('+1(858)775-2868');

  expect(ph.originalText).toBe('+1(858)775-2868');
  expect(ph.parsedNumber).toBe('+18587752868');
  expect(ph.formatted.toNorthAmerican()).toBe('(858)775-2868');
  expect(ph.formatted.toInternational()).toBe('+1.858.775.2868');
});

test('Two', () => {
  const ph = phoneNumber('+1(858)775-2868x123');

  expect(ph.originalText).toBe('+1(858)775-2868x123');
  expect(ph.parsedNumber).toBe('+18587752868x123');
  expect(ph.formatted.toNorthAmerican()).toBe('(858)775-2868x123');
  expect(ph.formatted.toInternational()).toBe('+1(858)775-2868x123')
});

test('Three', () => {
  const ph = phoneNumber('+598.123.4567x858');

  expect(ph.originalText).toBe('+598.123.4567x858');
  expect(ph.parsedNumber).toBe('+5981234567x858');
  expect(ph.formatted.toNorthAmerican()).toBeFalsy();
  expect(ph.formatted.toInternational()).toBe('+598.123.456.7x858');
});

test('Four', () => {
  const ph = phoneNumber('+27 1234 5678 ext 4');
});

test('Five', () => {
  const ph = phoneNumber('858-775-2868');

  expect(ph.originalText).toBe('858-755-2868');
  expect(ph.parsedNumber).toBe('+18587752868');
  expect(ph.formatted.toNorthAmerican()).toBe('(858)775-2868');
  expect(ph.formatted.toInternational()).toBe('+1.858.775.2868');
});