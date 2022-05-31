import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() title = '';
  
  productArr: any;  

  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.productArr = this.proService.getProducts().subscribe(
      res =>{
        this.productArr = res; 
        
      });
  }
  filteredProducts: any;
   
  onSearch(text: string) {
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
