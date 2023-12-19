import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tutorial } from '../model/tutorial-model';

const baseUrl = 'https://63010185e71700618a32d3bb.mockapi.io/tutorial'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  //Get all data
  getAll(): Observable<tutorial[]>{
    return this.http.get<tutorial[]>(baseUrl);
  }

  // Get data by ID
  get(id: any): Observable<tutorial>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Post data
  post(title: string, desc: string){
    const body = {title: title, desc: desc}
    return this.http.post(`${baseUrl}`, body)
  }
  
  // Delete data
  delete(id: any){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
