const check = jest.fn();

const Match = {
  OneOf: jest.fn(),
  Optional: jest.fn(),
  Maybe: jest.fn(),
  Any: ["__any__"],
  Where: jest.fn(),
  ObjectIncluding: jest.fn(),
  ObjectWithValues: jest.fn(),
  Integer: ['__integer__'],
};

module.exports = {
  Match,
  check,
};
