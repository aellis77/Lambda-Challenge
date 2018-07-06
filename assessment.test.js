const {
  helloWorld,
  lambdaSchool,
  longestString,
  computeUserAverageAge,
} = require('./assessment'); 

describe('Lambda School Precourse Assessment', () => {
  describe('helloWorld', () => {
    it('should return a string', () => {
      expect(typeof helloWorld()).toBe('string');
    });
    it('should return the string \'Hello World!\'', () => {
      expect(helloWorld()).toBe('Hello World!');
    });
  }); 

  describe('lambdaSchool', () => {
    it('should return \'Lambda\' for a number divisible by 3', () => {
      expect(lambdaSchool(12)).toBe('Lambda');
      expect(lambdaSchool(63)).toBe('Lambda');
      expect(lambdaSchool(999)).toBe('Lambda');
    });
    it('should return \'School\' for a number divisible by 5', () => {
      expect(lambdaSchool(10)).toBe('School');
      expect(lambdaSchool(155)).toBe('School');
      expect(lambdaSchool(1000)).toBe('School');
    });
    it('should return \'Lambda School\' for a number divisible by 3 and 5', () => {
      expect(lambdaSchool(15)).toBe('Lambda School');
      expect(lambdaSchool(30)).toBe('Lambda School');
      expect(lambdaSchool(180)).toBe('Lambda School');
    });
    it('should return the number for a number not divisble by 3 or 5 or 3 and 5', () => {
      expect(lambdaSchool(1)).toBe(1);
      expect(lambdaSchool(49)).toBe(49);
      expect(lambdaSchool(179)).toBe(179);
      expect(typeof lambdaSchool(1)).toBe('number');
    });
    // note: this is done this way due to the way the coder implemented the requirement.
    // this is a good example for coder and module tester independence (which is not true here)
    it('should return none of the known outputs if not a positive integer', () => {
      expect(lambdaSchool(0)).not.toBe('Lambda');
      expect(lambdaSchool(0)).not.toBe('School');
      expect(lambdaSchool(0)).not.toBe('Lambda School');
      expect(lambdaSchool(0)).not.toBe(0);
    }); 
    // a case that more fully meets the requirement (in my opinion - that would fail for me) 
     it('should return \'undefined\' if not a positive integer', () => {
      expect(lambdaSchool(0)).toBe(undefined);
    }); 
  }); 

  describe('longestString', () => {
    it('should return the longest string in the array', () => {
      expect(longestString(['array', 'object', 'function'])).toBe('function');
      expect(longestString(['C++', 'JavaScript', 'Python'])).toBe('JavaScript');
    });
    it('should return the first longest string if there is a tie', () => {
      expect(longestString(['C++', 'CSS', 'JWT'])).toBe('C++');
    });
    it('should return blank if no strings exist in array', () => {
      expect(longestString([])).toBe('');
    });
  }); 

  describe('computeUserAverageAge', () => {
    const authors = [{
      name: 'Frank Herbert',
      age: 65,
    }, {
      name: 'Douglas Adams',
      age: 49,
    }, {
      name: 'Isaac Asimov',
      age: 72,
    }];
    const computerScientists = [{
      name: 'Brendan Eich',
      age: 56,
    }, {
      name: 'Linus Torvalds',
      age: 48,
    }, {
      name: 'Margaret Hamilton',
      age: 81,
    }];
    it('should return the average age of the users', () => {
      expect(computeUserAverageAge(authors)).toBe(62);
    });
    it('should round the average before returning it', () => {
      expect(computeUserAverageAge(computerScientists)).toBe(62);
    });
    it('should return 0 if array size is [], or [{}] (based on the return a number clause)', () => {
      expect(computeUserAverageAge([])).toBe(0);
      expect(computeUserAverageAge([{}])).toBe(0);
    });
  });
});

