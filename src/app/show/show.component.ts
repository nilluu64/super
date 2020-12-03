import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { EmployeeService } from '../main.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {


  @Input() products: any = [];
  private singleProduct;
  private isAdded;


  constructor(
    private renderer: Renderer2,
    private _mainservice:EmployeeService,
    private mySharedService: SharedService

    ) { }

    ngOnInit() {



      this.isAdded = new Array(this.products.length);
      this.isAdded.fill(false, 0, this.products.length);
      console.log('this.isAdded -> ', this.isAdded, this.products);

      this._mainservice.getProducts().subscribe(data => {
      if (data && data> 0) { }
      else {
          this.products.map((item, index) => {
            this.isAdded[index] = false;
          });
        }

      });


    }
    addToCart(event, productId) {

      // If Item is already added then display alert message


      // Change button color to green
      this.products.map((item, index) => {
        if (item.id === productId) {
          this.isAdded[index] = true;
        }
      })

      this.singleProduct = this.products.filter(product => {
        return product.id === productId;
      });

      // this.cartItems.push(this.singleProduct[0]);

      this.mySharedService.addProductToCart(this.singleProduct[0]);
    }

}
