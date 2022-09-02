import { Employee } from "./classes/empleado";
import { EmployeeTaxData } from "./classes/empleadoImpuestos";

const empleadoImpuestos = new EmployeeTaxData( '123123123',1000);

const empleado = new Employee( 'Juan', 'terryxbt@gmail.com');

empleado.setTaxData(empleadoImpuestos);

console.log(empleado.name);
