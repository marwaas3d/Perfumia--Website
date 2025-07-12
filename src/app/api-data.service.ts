import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) {}


  
    getData():Observable<any>{
      return this._HttpClient.get(`https://exqokdmjrvkaivkgnwiq.supabase.co/rest/v1/products`, {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
        'Content-Type': 'application/json'
        }
      })
    }



}
