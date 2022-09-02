import { EmployeeTaxData } from "./empleadoImpuestos";

export class Employee {
    public name: string;
    private email: string;
    private taxData?: EmployeeTaxData;

    constructor( name: string, email: string) {
        this.name = name;
        this.email = email;

    }

    setTaxData( taxData: EmployeeTaxData) {
        this.taxData = taxData;
    }
}