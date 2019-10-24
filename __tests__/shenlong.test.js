const { Shenlong } = require("../main")
describe("Shenlong test", () => {
  beforeEach(() => Shenlong.clearDragonBallList())
  it("Should return my amount dragon balls", () => {
    expect(Shenlong.getAmountOfDragonBalls()).toBe(0)
  })
  it("Should return if Shenlong is visible", () => {
    expect(Shenlong.getVisible()).toBe(false)
  })
  it("Should return my dragon balls list", () => {
    expect(Shenlong.getDragonBallsList()).toEqual([])
  })
  it("Should change my dragon ball list", () => {
    Shenlong.changeDragonBallsList(['4 estrelas'])
    expect(Shenlong.getDragonBallsList()).toEqual(['4 estrelas'])
  })
  it("Should change my dragon ball list with an Array", () => {
    const expected = ['4 estrelas', '1 estrela', '6 estrelas']
    Shenlong.changeDragonBallsList(['4 estrelas', '1 estrela', '6 estrelas'])
    expect(Shenlong.getDragonBallsList()).toEqual(expected)
  })
})