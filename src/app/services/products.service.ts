import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "https://dummyjson.com/products"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public httpClient: HttpClient) { }
  
  getProductsApi(): Promise<any>{
    return this.httpClient.get(url).toPromise()
  }

  getProductsApi2() {
    return this.httpClient.get(url)
  }

  searchProduct(id:number){
    return this.httpClient.get(`${url}/${id}`)
  }


}
