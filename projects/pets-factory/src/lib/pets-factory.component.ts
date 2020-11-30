import { Component, Input, OnInit } from '@angular/core';
import { PetsFactoryService } from './pets-factory.service';
import { IPet } from './models/pet.model';
import { stringify } from 'querystring';

@Component({
  selector: 'lib-pets-factory',
  template: ``
})
export class PetsFactoryComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  public pet: IPet;

  constructor(
    private petsFactoryService: PetsFactoryService
  ) {
    this.pet = {
      id: null,
      name: '',
      status: ''
    };
  }
  ngOnInit(): void {
    this.addNewPet();
  }

  addNewPet(){
    this.pet.id = new Date().getTime();
    this.pet.name = this.name;
    this.pet.status = this.status;
    this.petsFactoryService.addPet(this.pet).subscribe(
      res => this.pet = res.pet
    );
  }

}
