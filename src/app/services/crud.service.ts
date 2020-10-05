import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Images } from '../models/fotos.models';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
    public getFotos(): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
  }
    
}
