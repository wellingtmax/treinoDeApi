import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PotterService {

  constructor(private http: HttpClient) { }

  private FpUrl = 'https://potterapi-fedeperin.vercel.app/pt/spells'

  getPotter(): Observable<any[]> {
    return this.http.get<any[]>(this.FpUrl)
  }


}
