class Shenlong{
  constructor(){
    this.isVisible = false
    this.dragonBalls = []
  }

  getAmountOfDragonBalls(){
    return this.dragonBalls.length
  }

  getVisible(){
    return this.isVisible
  }

  getDragonBallsList(){
    return this.dragonBalls
  }

  changeDragonBallsList(balls){
    // const currentDragonBalls = this.dragonBalls
    // const changedList = [...currentDragonBalls, ...balls]
    // this.dragonBalls = changedList
    this.dragonBalls.push(...balls)
  } 

  clearDragonBallList(){
    this.dragonBalls = []
  }
}

module.exports.Shenlong = new Shenlong