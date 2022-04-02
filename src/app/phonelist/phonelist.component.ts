import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {
  productList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(): void {
    this.getAllProducts().subscribe((data: any) => {
      this.productList = data;
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
  }
  
  getAllProducts(): any {
    const products = this.http.get('assets/phones/phones.json');
    return products;
  }
}
