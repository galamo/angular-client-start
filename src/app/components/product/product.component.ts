import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productObjInput: any   
  @Input() selectedProductId: number = -1
  @Input() indexInput: number = 0  
  @Output() deleteEvent = new EventEmitter<number>(); 
  @Output() selectProduct = new EventEmitter<any>();
  @Output() doGeneralAction = new EventEmitter<any>();
  @Input() doGeneralActionText: string = "" 
  public showCoupon:boolean 
  public DiscountText:string
  constructor() {
    this.showCoupon = false;
    this.DiscountText = "Get Discount"
   }

  ngOnInit(): void {
  }
showCouponAction(){
    this.showCoupon = !this.showCoupon
    this.DiscountText = this.showCoupon ? "Full Price" : "Get Discount"
}
  addToCart(p:any){
    this.selectProduct.emit(p)
  }
  deleteProduct(p:any){
    this.deleteEvent.emit(p.id as number)
  }
  doAction(p:any){
        this.doGeneralAction.emit(p)
  }
}


