// se importan las clases correspondientes
import Cliente from './clientes.js';
import Impuestos from './impuestos.js';

let impuestos_cliente1 = new Impuestos(100000, 25000);
impuestos_cliente1.monto_bruto_anual = 150000;
impuestos_cliente1.deducciones = 30000;

let cliente1 = new Cliente("Carlos", impuestos_cliente1);
cliente1.nombre = "Juanito";

console.log(`Nombre Cliente: ${cliente1.nombre}`);
console.log(`Monto bruto anual: ${impuestos_cliente1.monto_bruto_anual}`);
console.log(`Deducciones: ${impuestos_cliente1.deducciones}`);

//resultado del calculo
console.log(`El impuesto es: ${cliente1.calculaImpuesto(impuestos_cliente1.monto_bruto_anual, impuestos_cliente1.deducciones)}`);