import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard, authRoutes } from '@sbsc/auth';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'auth',
    children: authRoutes,
    data: { animation: 'Two' },
  },
  // {
  //   path: 'products',
  //   loadChildren: '@sbsc/products#ProductsModule',
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'products',
    loadChildren: () =>
      import('libs/products/src/lib/products.module').then(
        (module) => module.ProductsModule
      ),
    canActivate: [AuthGuard],
    data: { animation: 'Three' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
