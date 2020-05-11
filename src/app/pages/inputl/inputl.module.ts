import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputlPageRoutingModule } from './inputl-routing.module';

import { InputlPage } from './inputl.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InputlPage]
})
export class InputlPageModule {}