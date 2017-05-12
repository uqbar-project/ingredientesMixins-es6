class Usuario {
  constructor(altura, peso) {
    this.altura = altura
    this.peso = peso
  }
  get IMC() {
    return this.peso / (this.altura * this.altura)
  }
  esSaludable() {
    return this.IMC >= 20 && this.IMC <= 25
  }
}

class Dosis { //esta es nuestra clase base
    constructor() {
    	this.cantidad = 0
    	this.nombre = ""
    	this.unidadMedida = ""
	}
    estaIngresado() {
        return (this.cantidad > 0) && (this.nombre !== "")
    }
    toString() {
        return this.cantidad + " " + this.unidadMedida + " de " + this.nombre
    }
}

let Comestible = (superclass) => class extends superclass { //mixin comestible
  constructor() {
    super()
    this.calorias = 0
  }
  esConvenientePara(usuario) {
    return !this.esPesado() || usuario.esSaludable()
  }
  esPesado() {
    return this.calorias > 50
  }
}

let ConvertibleAJSON = (superclass) => class extends superclass { //mixin convertibleAJSON
  toJSON(propiedadesVisibles) {
    var dto = { }
    for (var i in propiedadesVisibles) {
      var propiedad = propiedadesVisibles[i]
      if (this.hasOwnProperty(propiedad)) {
        dto[propiedad] = this[propiedad]
      }
    }
    return JSON.stringify(dto)
  }
}

let baseClass = (superclass) => new MixinBuilder(superclass)

class MixinBuilder {  
  constructor(superclass) {
    this.superclass = superclass
  }

  with(...mixins) { 
    return mixins.reduce((c, mixin) => mixin(c), this.superclass)
  }
}

class Ingrediente extends baseClass(Dosis).with(Comestible, ConvertibleAJSON) { }
