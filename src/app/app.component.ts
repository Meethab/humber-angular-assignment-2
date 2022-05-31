import { ProductData } from './models/product-data.interface';
import { Component, Input } from '@angular/core';
import { ProductsService } from './services/products.service';
import { OrderData } from './models/order-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-angular-assignment-2';
  
 // @Input() orderitem!: OrderData;

  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
     
  }

}
