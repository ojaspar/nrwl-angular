import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { authRoutes } from '@sbsc/auth';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'auth', children: authRoutes },
  {
    path: 'products',
    loadChildren: '@sbsc/products#ProductsModule',
  },
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('@sbsc/products').then((module) => module.ProductsModule),
  // },
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
