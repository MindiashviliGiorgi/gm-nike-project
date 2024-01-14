import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleItemComponent } from './pages/single-item/single-item.component';
import { BagPageComponent } from './pages/bag-page/bag-page.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'item/:id',
    component : SingleItemComponent
  },
  {
    path : 'bag',
    component : BagPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
