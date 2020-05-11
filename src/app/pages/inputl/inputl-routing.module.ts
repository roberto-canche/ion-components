import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputlPage } from './inputl.page';

const routes: Routes = [
  {
    path: '',
    component: InputlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputlPageRoutingModule {}
