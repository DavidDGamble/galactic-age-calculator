export default class UserInfo {
  constructor(age, gender, smoker) {
    this.age = age;
    this.gender = gender;
    this.smoker = smoker;
  }

  mercury() {
    return Math.floor(this.age / 0.24);
  }
}