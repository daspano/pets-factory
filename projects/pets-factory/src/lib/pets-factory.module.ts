import { NgModule } from '@angular/core';
import { PetsFactoryComponent } from './pets-factory.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PetsFactoryComponent],
  imports: [
    CommonModule
  ],
  exports: [PetsFactoryComponent]
})
export class PetsFactoryModule { }
