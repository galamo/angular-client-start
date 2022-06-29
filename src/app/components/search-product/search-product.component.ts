import { Component, OnInit } from '@angular/core';
import { debounceTime, map, Observable, Subject, switchMap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  public productId: number | undefined
  public productId2: number | undefined
  public product:any
  public isLoadingSearch:boolean
  cproduct$!: Observable<any>;
  private searchTerms = new Subject<number | undefined>();
  constructor(public productsService: ProductsService) { 
    this.isLoadingSearch = false;
  }

  ngOnInit(): void {
    console.log("on init")
    this.cproduct$ = this.searchTerms.pipe(
        debounceTime(200),
        switchMap((term: number | undefined) => {
            console.log(term)
            return 1 as any;
        }),
      );
  }

  search2(term: number | undefined): void {
    this.searchTerms.next(term);
  }

  search(id?:number | undefined){
    if(!id) {
        this.product = null
    }
    else{
        this.isLoadingSearch = true
        this.productsService.searchProduct(id).subscribe(item=>{
            this.product = item
        },()=>{
            alert("something went wrong")
            this.isLoadingSearch = false
            this.product = null
        },()=>{
            this.isLoadingSearch = false
        })
    }
  }


}
