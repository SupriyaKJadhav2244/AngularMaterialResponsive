import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient:HttpClient) { }

  getMobDataUrl="./../assets/api/mobData.json";
  getBookUrl="./../assets/api/bookData.json";
  getlaptopDataUrl="./../assets/api/laptopData.json";
  
  getMobData(){
    return this.httpClient.get(this.getMobDataUrl);
  }

  getBookData(){
    return this.httpClient.get(this.getBookUrl);
  }

  getlaptopData(){
    return this.httpClient.get(this.getlaptopDataUrl);
  }

  calc(items:any) {
    let totProds = 0;
    for (let product of items) {
      totProds = totProds + product.inStock;
      // console.log(totProds);
    }
    return totProds;
  }
}
