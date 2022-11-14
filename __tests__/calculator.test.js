import UserInfo from '../src/js/calculator.js';

describe('UserInfo', () => {
  let userInfo;

  beforeEach(() => {
    userInfo = new UserInfo(35, 'male', false);
  });

  test("should create a userInfo object.", () => {
    expect(userInfo.age).toEqual(35);
    expect(userInfo.gender).toEqual('male');
    expect(userInfo.smoker).toEqual(false);
  });

  test("should return user's age in mercury years.", () => {
    expect(userInfo.mercury()).toEqual(145);
  });

  test("should return user's age in venus years.", () => {
    expect(userInfo.venus()).toEqual(56);
  });

  test("should return user's age in mars years.", () => {
    expect(userInfo.mars()).toEqual(18);
  });

  test("should return user's age in jupiter years.", () => {
    expect(userInfo.jupiter()).toEqual(2)
  });

  test("should return user's life expectancy.", () => {
    expect(userInfo.lifeExp().toEqual(40))
  });
});