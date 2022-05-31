import { ProductData } from './../../models/product-data.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: ProductData;

  //@Output() productAdded = new EventEmitter();
  
  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.item.name);
  }

  addToCart() {
    this.proService.cartItems.push(this.item)
    //this.proService.setMsg(this.item)
    //this.productAdded.emit(item);
  }

}
