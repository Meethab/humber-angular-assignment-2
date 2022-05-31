import { ProductData } from './../../models/product-data.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() item!: ProductData;
  productArr: any;

  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.productArr = this.proService.getProducts().subscribe(
      res =>{
        this.productArr = res; 
      });

  }

}
