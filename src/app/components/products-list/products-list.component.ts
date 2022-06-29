import { Component, OnInit } from '@angular/core';
import { filter, map, debounce , interval} from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public productsList: Array<any>;
  public selectedProductId: number;
  public query: string;
  public by: string;
  public isLoadingProducts: boolean = false
  public errorMessage:string 
  
  constructor(public cartService:CartService, public ps: ProductsService) {
    this.productsList = []
    this.selectedProductId = -1
    this.query = ""
    this.by = "title"
    this.errorMessage = ""
  }

  ngOnInit(): void {
    this.getProductsAsync()
  }
  

  async getProductsAsync2(){
    const resultFromApi = this.ps.getProductsApi2()
    
    resultFromApi.subscribe((item:any)=>{
        this.productsList = item.products
    },(ex)=>{
        this.errorMessage = "Something went wrong"
    },()=>{
        this.isLoadingProducts = false
    })
  }

  async getProductsAsync(){
    try{
        this.isLoadingProducts = true
        const result = await this.ps.getProductsApi()
        this.productsList = result.products
    }catch(ex){
        this.errorMessage = "Something went wrong"
    }finally{
        this.isLoadingProducts = false
    }
  }

  selectProduct(id: number): void {
    this.selectedProductId = id
  }

  addToCart(p: any) {
    this.cartService.addProduct(p)
  }
  
  deleteProduct(id:number){
    const newProducts = this.productsList.filter(p=>p.id !== id)
    this.productsList = newProducts
  }

}

