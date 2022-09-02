"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    setTaxData(taxData) {
        this.taxData = taxData;
    }
}
exports.Employee = Employee;
