import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsFactoryService {

  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = 'https://petstore.swagger.io/v2/pet';
  }

  addPet(pet): Observable<any>{
    let params = JSON.stringify(pet);
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post(this.apiUrl, params, {headers: headers});
  }
}
