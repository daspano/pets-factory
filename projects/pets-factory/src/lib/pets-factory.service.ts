import { Injectable } from '@angular/core';
import { IPet } from './models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsFactoryService {

  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://petstore.swagger.io/v2/';
  }

  addPet(pet: IPet): Promise<IPet>{
    return new Promise ((resolve, reject) => {
      fetch(this.apiUrl + 'pet', {
        method: 'POST',
        body: JSON.stringify(pet),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((response) => {
        resolve(pet);
      })
      .catch((error) => {
        reject('error');
      });
    });
  }
}
