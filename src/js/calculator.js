export default class UserInfo {
  constructor(age, gender, smoker) {
    this.age = age;
    this.gender = gender;
    this.smoker = smoker;
  }

  mercury(age) {
    return Math.floor(this.age / 0.24);
  }

  venus(age) {
    return Math.floor(this.age / 0.62);
  }

  mars(age) {
    return Math.floor(this.age / 1.88);
  }

  jupiter(age) {
    return Math.floor(this.age / 11.86);
  }

  lifeExp() {
    let yearsLeft = 0;
    if (this.gender === 'male') {
      yearsLeft = 75 - this.age;
    } else {
      yearsLeft = 80 - this.age;
    }
    if (this.smoker) {
      yearsLeft -= 10 
    }
    return yearsLeft;
  }

  leftOnMercury() {
    return Math.floor(this.lifeExp() / 0.24)
  }
}