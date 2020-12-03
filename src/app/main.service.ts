import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class EmployeeService {


  constructor(private http:HttpClient) { }

url = '../assets/data/products.json';

  getProducts() {

 return this.http.get(this.url).pipe(map(response => response));

}


}
