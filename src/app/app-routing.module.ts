import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityDescriptionModal } from './table-filter/cityDescription.modal';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [CityDescriptionModal],
})
export class AppRoutingModule {}
