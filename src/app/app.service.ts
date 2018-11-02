import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class appService {
 
  private heroesUrl = 'api/heroes';  // URL to web api
 
  constructor(private http: HttpClient) { }
 

}