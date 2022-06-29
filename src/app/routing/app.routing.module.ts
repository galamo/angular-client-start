import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "../components/cart/cart.component";
import { ProductsListComponent } from "../components/products-list/products-list.component";
import { SettingsComponent } from "../components/settings/settings.component";

const routes: Routes = [
     {path:"",component: ProductsListComponent},
     {path:"settings",component: SettingsComponent},
     {path:"cart",component: CartComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}