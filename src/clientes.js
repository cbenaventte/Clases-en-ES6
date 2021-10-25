// se exporta la clase ya que esta importado desde main.js

export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // formula del impuesto
  calculaImpuesto(monto_bruto_anual, deducciones) {
    return (monto_bruto_anual - deducciones) * 21/100;
  }
}



 


