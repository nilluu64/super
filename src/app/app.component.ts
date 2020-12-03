import { Component } from '@angular/core';
import { EmployeeService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // products: any []=[];

   products :any = [];

  



  constructor(
    private myMainService: EmployeeService

  ) { }


  ngOnInit() {
    // Get all product list on component init
    this.myMainService.getProducts().subscribe(data  => {

      console.log("heyyydata",data);

      this.products = data['products'];
    });
  }


}
