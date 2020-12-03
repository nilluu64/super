import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartProductCount: number = 0;

  constructor(private mySharedService: SharedService) { }

  ngOnInit(): void {

    this.mySharedService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })

  }

}
