import { NgModule } from '@angular/core';
import { PetsFactoryComponent } from './pets-factory.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [PetsFactoryComponent],
  imports: [
    HttpClientModule
  ],
  exports: [PetsFactoryComponent]
})
export class PetsFactoryModule { }
