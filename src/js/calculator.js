export default class UserInfo {
  constructor(age, gender, smoker) {
    this.age = age;
    this.gender = gender;
    this.smoker = smoker;
  }

  mercury() {
    return Math.floor(this.age / 0.24);
  }

  venus() {
    return Math.floor(this.age / 0.62);
  }

  mars() {
    return Math.floor(this.age / 1.88);
  }

  jupiter() {
    return Math.floor(this.age / 11.86);
  }

  lifeExp() {
    
  }
}