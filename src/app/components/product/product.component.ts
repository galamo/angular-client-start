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
  @Output() selectProduct = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(p:any){
    this.selectProduct.emit(p.id as number)
  }
  deleteProduct(p:any){
    this.deleteEvent.emit(p.id as number)
  }
}


