import { Component} from '@angular/core';

declare const getRandomNumbers:any;
declare const getPageNumbers:any;

@Component({
    selector: 'app-product',
    template: `
        <div>Random Numbers: {{rNum}}</div>

        <div>All Departments</div>
        <li *ngFor="let dept of departments">
            {{dept}}
        </li>
        <div>All Employees</div>
        <li *ngFor="let empl of employees">
            {{empl.name}},
            {{empl.department}}
        </li>
        <div>All Pages</div>
        <div *ngFor="let x of pNum | paginate: {itemsPerPage:itemsToDisplay, currentPage:page}">
            {{x}}
        </div>

        <pagination-controls (pageChange)="pageChanged($event)"></pagination-controls>
    `,
    styles: ['div {font-weight:bolder; color:darkgreen;}', 'li  {font-weight:bolder; color:red;}']
})

export class ProductComponent{
    showDiv=true;
    rNum = <[]>getRandomNumbers();
    pNum = <[]>getPageNumbers().sort((x:number,y:number)=> {
        return x-y
    });
    //pagination
    page: number = 1;
    itemsToDisplay: number = 10;
    pageChanged(event : any){
        this.page = event
    }
    departments = ['Mountain Bicycles', 'Road Bikes', 'Hybrid Bikes', 'Bicycle Pumps']
    employees = [
        {
            name: 'Fernando',
            employeeId: 1234,
            department: "IT"
        },
        {
            name: 'Thomas',
            employeeId: 4567,
            department: "Sales"
        },
        {
            name: 'XYZ',
            employeeId: 8910,
            department: "IT"
        }
    ]
};