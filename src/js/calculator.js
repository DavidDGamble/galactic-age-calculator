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
    let yearsLeft = 0;
    if (this.gender === 'male') {
      yearsLeft = 75 - this.age;
    } else {
      yearsLeft = 80 - this.age;
    }
    if (this.smoker && yearsLeft >= 10) {
      yearsLeft -= 10;
    } else if (this.smoker && yearsLeft < 10 && yearsLeft > 0) {
      yearsLeft = 0;
    } 
    return yearsLeft;
  }

  leftOnMercury() {
    if (this.lifeExp() >= 0) {
      return `You have ${Math.floor(this.lifeExp() / 0.24)} years left on Mercury!`
    } else {
      return `You have lived ${Math.floor((this.lifeExp() * -1) / 0.24)} years past your life expectancy on Mercury!`
    }
  }

  leftOnVenus() {
    if (this.lifeExp() >= 0) {
      return `You have ${Math.floor(this.lifeExp() / 0.62)} years left on Venus!`
    } else {
      return `You have lived ${Math.floor((this.lifeExp() * -1) / 0.62)} years past your life expectancy on Venus!`
    }
  }

  leftOnMars() {
    if (this.lifeExp() >= 0) {
      return `You have ${Math.floor(this.lifeExp() / 1.88)} years left on Mars!`
    } else {
      return `You have lived ${Math.floor((this.lifeExp() * -1) / 1.88)} years past your life expectancy on Mars!`
    }
  }

  leftOnJupiter() {
    if (this.lifeExp() >= 0) {
      return `You have ${Math.floor(this.lifeExp() / 11.86)} years left on Jupiter!`
    } else {
      return `You have lived ${Math.floor((this.lifeExp() * -1) / 11.86)} years past your life expectancy on Jupiter!`
    }
  }
}


