import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/product/product-routing.module').then(
        (m) => m.ProductRoutingModule
      ),
  },
  {
    path: 'brands',
    loadChildren: () =>
      import('./modules/brands/brands-routing.module').then(
        (m) => m.BrandsRoutingModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories-routing.module').then(
        (m) => m.CategoriesRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
