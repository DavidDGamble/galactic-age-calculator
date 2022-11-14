import UserInfo from '../src/js/calculator.js';

describe('UserInfo', () => {
  let userInfo;

  beforeEach(() => {
    userInfo = new UserInfo(35, 'male', false);
  });

  test('should create a userInfo object.', () => {
    expect(userInfo.age).toEqual(35);
    expect(userInfo.gender).toEqual('male');
    expect(userInfo.smoker).toEqual(false);
  });
});