describe('usuarios', () => {
    "use strict"
    var fer
    var homero

    beforeEach(() => {
        fer = new Usuario(1.88, 85)
        homero = new Usuario(1.66, 120)
    })
    it('el IMC de fer esta bien', () => {
            expect(24.05).toBeCloseTo(fer.IMC, 0.01)
        }),
        it('homero tiene flor de IMC', () => {
            expect(43.55).toBeCloseTo(homero.IMC, 0.01)
        }),
        it('fer esta saludable', () => {
            expect(true).toBe(fer.esSaludable())
        }),
        it('homero no esta saludable', () => {
            expect(false).toBe(homero.esSaludable())
        })
})

describe('ingredientes', () => {
    "use strict"

    var unPollo
    var unaMorci
    var ingredienteVacio
    var fer
    var homero

    beforeEach(() => {
        unaMorci = new Ingrediente()
        unaMorci.cantidad = 1
        unaMorci.nombre = "Morcilla"
        unaMorci.calorias = 250

        unPollo = new Ingrediente()
        unPollo.cantidad = 1
        unPollo.nombre = "Pollo"
        unPollo.calorias = 30
        ingredienteVacio = new Ingrediente()
        fer = new Usuario(1.88, 85)
        homero = new Usuario(1.66, 120)
    })
    it('un ingrediente vacio no esta ingresado', () => {
            expect(false).toBe(ingredienteVacio.estaIngresado())
        }),
        it('un pollo esta ingresado', () => {
            console.log(unPollo.toString())
            console.log(unPollo.toJSON(["nombre", "calorias"]))
            expect(true).toBe(unPollo.estaIngresado())
        }),
        it('un pollo no es pesado', () => {
            expect(false).toBe(unPollo.esPesado())
        }),
        it('un pollo es conveniente para homero', () => {
            expect(true).toBe(unPollo.esConvenientePara(homero))
        }),
        it('una morcilla es heavy', () => {
            expect(true).toBe(unaMorci.esPesado())
        }),
        it('una morcilla no es conveniente para homero', () => {
            expect(false).toBe(unaMorci.esConvenientePara(homero))
        }),
        it('una morcilla es conveniente para fer', () => {
            expect(true).toBe(unaMorci.esConvenientePara(fer))
        })
})