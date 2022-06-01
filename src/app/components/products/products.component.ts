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
  
  productArr: ProductData[] | any;
  filteredProducts: ProductData[] | any;
  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.productArr = this.proService.getProducts().subscribe(
      res =>{
        this.productArr = res; 
        this.filteredProducts = this.productArr;
      });

  }
 
  filteredProductsBySearch(text: string) {
    if (text !== "") {
      this.filteredProducts = this.productArr.filter((product:any) => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseProductName = product.name.toLowerCase();
        return lowerCaseProductName.includes(lowerCaseText);
      })
    } else {
      this.filteredProducts = this.productArr;
    }
  }
  

}
