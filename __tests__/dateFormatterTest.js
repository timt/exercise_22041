import {format} from '../src/dateFormatter';

const December = 11; //js Date object month is indexed from 0

describe('Original Test Scenario', () => {
    it('when the system date and the date to format are the same day formats as "TODAY"', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
    });
});

describe('Day Boundary Tests', () => {
    it('when the format date is yesterday formats as "14/12/2018"', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = new Date(2018, December, 14, 12, 50).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('14/12/2018');
    });

    it('when the format date is tomorrow formats as "16/12/2018"', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = new Date(2018, December, 16, 12, 50).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('16/12/2018');
    });
});

describe('Hour Boundary Tests', () => {
    it('when the format date is today at 23:59 formats as "TODAY"', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = new Date(2018, December, 15, 23, 59).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
    });

    it('when the format date is today at 00:00 formats as "TODAY"', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = new Date(2018, December, 15, 0, 0).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
    });
});

describe('Invalid Input Tests', () => {
    it('when the format date is object return invalid date.', () => {
      const systemDateTime = Math;
      const dateTimeToFormat = new Date(2018, December, 15, 23, 59).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
    });

    it('when the current date is object returns Invalid Date.', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = Math;
      expect(format(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
    });

    it('when the format date is string returns Invalid Date.', () => {
      const systemDateTime = "Hello";
      const dateTimeToFormat = new Date(2018, December, 15, 23, 59).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
    });

    it('when the current date is string returns Invalid Date.', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = "Hello";
      expect(format(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
    });

    it('when the format date is null returns Invalid Date.', () => {
      const systemDateTime = null;
      const dateTimeToFormat = new Date(2018, December, 15, 23, 59).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
    });

    it('when the current date is null returns Invalid Date.', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = null;
      expect(format(dateTimeToFormat, systemDateTime)).toBe('Invalid Date');
    });
});

describe('Negative Number Ms Tests', () => {
    it('when both dates are the same but negative returns TODAY.', () => {
      const systemDateTime = -6000;
      const dateTimeToFormat = -6000;
      expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
    });

    it('when the format date is negative returns date before 01/01/1970.', () => {
      const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
      const dateTimeToFormat = -6000;
      expect(format(dateTimeToFormat, systemDateTime)).toBe('31/12/1969');
    });

    it('when the current date is negative but not matching returns 14/12/2018.', () => {
      const systemDateTime = -6000;
      const dateTimeToFormat = new Date(2018, December, 14, 12, 50).getTime();
      expect(format(dateTimeToFormat, systemDateTime)).toBe('14/12/2018');
    });
});


