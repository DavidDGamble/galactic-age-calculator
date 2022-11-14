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

  test("should return user's life expectancy when male and nonsmoker.", () => {
    expect(userInfo.lifeExp()).toEqual(40)
  });

  test("should return user's life expectancy when female and nonsmoker.", () => {
    userInfo = new UserInfo(35, 'female', false);
    expect(userInfo.lifeExp()).toEqual(45);
  });

  test("should return user's life expectancy when female and smoker.", () => {
    userInfo = new UserInfo(35, 'female', true);
    expect(userInfo.lifeExp()).toEqual(35);
  });

  test("should return user's years left on mercury.", () => {
    expect(userInfo.leftOnMercury().toEqual(167));
  });
});