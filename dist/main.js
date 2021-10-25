"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// se importan las clases correspondientes
var impuestos_cliente1 = new _impuestos["default"](100000, 25000);
impuestos_cliente1.monto_bruto_anual = 150000;
impuestos_cliente1.deducciones = 30000;
var cliente1 = new _clientes["default"]("Carlos", impuestos_cliente1);
cliente1.nombre = "Juanito";
console.log("Nombre Cliente: ".concat(cliente1.nombre));
console.log("Monto bruto anual: ".concat(impuestos_cliente1.monto_bruto_anual));
console.log("Deducciones: ".concat(impuestos_cliente1.deducciones)); //resultado del calculo

console.log("El impuesto es: ".concat(cliente1.calculaImpuesto(impuestos_cliente1.monto_bruto_anual, impuestos_cliente1.deducciones)));