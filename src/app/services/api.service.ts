import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from '../entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllSitters() {
    return this.http.get(environment.apiUrl + "/getall");
  }

  createSitter(sitter: Sitter) {
    sitter.customerId = 'chrk';
    return this.http.post(environment.apiUrl + "/create", sitter, {responseType: 'text'});
  }

  //update 

  //delete
}
