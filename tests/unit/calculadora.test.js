const calculadora = require("../../models/calculadora.js")

test('Somar 2 + 2 deve retornar 4', () => {
  const resultado = calculadora.somar(2, 2)
  expect(resultado).toBe(4)
})

test('Somar "pedro" + 2 deve retornar "Erro" ', () => {
  const resultado = calculadora.somar('pedro', 2)
  expect(resultado).toBe("Erro")
})

test('Somar 2 + "pedro" deve retornar "Erro" ', () => {
  const resultado = calculadora.somar(2, 'pedro')
  expect(resultado).toBe("Erro")
})

test('Somar "" + "" deve retornar "Erro" ', () => {
  const resultado = calculadora.somar("", "")
  expect(resultado).toBe("Erro")
})

test('Somar null + 2 deve retornar "Erro" ', () => {
  const resultado = calculadora.somar(null, 2)
  expect(resultado).toBe("Erro")
})
