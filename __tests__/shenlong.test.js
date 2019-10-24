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
  it("Should not invoke Shenlong without 7 dragon balls", () => {
    expect(Shenlong.invokeShenlong()).toEqual("Você precisa ter as 7 esferas para invocar o Shenlong")
  })
  it("Should not invoke shenlong without magic words", () => {
    Shenlong.changeDragonBallsList(['1 estrela', '2 estrelas', '3 estrelas', '4 estrelas', '5 estrelas', '6 estrelas', '7 estrelas'])
    expect(Shenlong.invokeShenlong()).toEqual("Você precisa dizer as palavras mágicas")
  })
  it("Should not invoke shenlong", () => {
    const magicWords = "Apareça Shenlong e realize o meu desejo"
    Shenlong.changeDragonBallsList(['1 estrela', '2 estrelas', '3 estrelas', '4 estrelas', '5 estrelas', '6 estrelas', '7 estrelas'])
    expect(Shenlong.invokeShenlong(magicWords)).toEqual("Você tem direito a 3 pedidos")
  })
})