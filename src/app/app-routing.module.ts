import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleItemComponent } from './pages/single-item/single-item.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'item/:id',
    component : SingleItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
