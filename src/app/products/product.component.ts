import { Component} from '@angular/core';

declare const getRandomNumbers:any;

@Component({
    selector: 'app-product',
    template: `<h2>Product List</h2> 
                <div *ngIf='showDiv'>Product 1</div>
                <div>{{rNum}}</div>
    `,
    styles: ['div {font-weight:bolder; color:darkgreen;}']
})

export class ProductComponent{
    showDiv=true;
    rNum = <[]>getRandomNumbers();
};