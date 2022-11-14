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

  test("should return user's life expectancy when user has lived past expactancy.", () => {
    userInfo = new UserInfo(80, 'male', false);
    expect(userInfo.lifeExp()).toEqual(-5);
  });

  test("should return user's life expectancy when life expectancy is less than 10 and is a smoker.", () => {
    userInfo = new UserInfo(70, 'male', true);
    expect(userInfo.lifeExp()).toEqual(0);
  });

  test("should return user's years left on mercury.", () => {
    expect(userInfo.leftOnMercury()).toEqual("You have 166 years left on Mercury!");
  });

  test("should return user's years left on venus.", () => {
    expect(userInfo.leftOnVenus()).toEqual("You have 64 years left on Venus!");
  });

  test("should return user's years left on mars.", () => {
    expect(userInfo.leftOnMars()).toEqual("You have 21 years left on Mars!");
  });

  test("should return user's years left on jupiter.", () => {
    expect(userInfo.leftOnJupiter()).toEqual("You have 3 years left on Jupiter!");
  });

  test("should return user's years left on mercury.", () => {
    userInfo = new UserInfo(80, 'male', false);
    expect(userInfo.leftOnMercury()).toEqual("You have lived 20 years past your life expectancy on Mercury!");
  });

  test("should return user's years left on venus.", () => {
    userInfo = new UserInfo(80, 'male', false);
    expect(userInfo.leftOnVenus()).toEqual("You have lived 8 years past your life expectancy on Venus!");
  });

  test("should return user's years left on mars.", () => {
    userInfo = new UserInfo(80, 'male', false);
    expect(userInfo.leftOnMars()).toEqual("You have lived 2 years past your life expectancy on Mars!");
  });

  test("should return user's years left on jupiter.", () => {
    userInfo = new UserInfo(80, 'male', false);
    expect(userInfo.leftOnJupiter()).toEqual("You have lived 0 years past your life expectancy on Jupiter!");
  });
});