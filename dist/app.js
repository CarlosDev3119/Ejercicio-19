"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_1 = require("./classes/empleado");
const empleadoImpuestos_1 = require("./classes/empleadoImpuestos");
const empleadoImpuestos = new empleadoImpuestos_1.EmployeeTaxData('123123123', 1000);
const empleado = new empleado_1.Employee('Juan', 'terryxbt@gmail.com');
empleado.setTaxData(empleadoImpuestos);
console.log(empleado.name);
