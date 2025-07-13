import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable} from 'rxjs';

interface DragonBallResponse {
  items: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DballService {

  private apiUrl = 'https://dragonball-api.com/api/characters'

  constructor(private http: HttpClient) { }

  listaHero(): Observable<any[]> {
    return this.http.get<DragonBallResponse>(this.apiUrl).pipe(
      map(d => d.items)
    );
  }

}
