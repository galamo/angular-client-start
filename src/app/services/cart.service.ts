import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Array<any>;
  private totalPrice: number = 0
  constructor() {
    this.cart = []
   }

   addProduct(product:any){
    this.cart.push(product)
    console.log(product.price,product)
    this.totalPrice+= product.price 
   }

   getProducts(){
    return this.cart
   }

   getTotalPrice(){
    return this.totalPrice
   }

   removeFromProduct(pr:any){
      const newData =  this.cart.filter(p=>p.id !== pr.id)
      this.cart = newData
   }

}
