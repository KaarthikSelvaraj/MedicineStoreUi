import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drugs } from './drugs';
import { HttpClient} from '@angular/common/http'

 
@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  url: string = 'https://localhost:44316/api';

  constructor(private httpClient: HttpClient) { }

  getAllDrugs(): Observable<Drugs[]>{

    return this.httpClient.get<Drugs[]>(this.url +'/Books');

  }
}
