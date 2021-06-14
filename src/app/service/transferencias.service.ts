import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/app/models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  // https://github.com/typicode/json-server
  private url: string = 'http://localhost:3000/transferencias';

  // Precisa habilitar no app.module.ts
  constructor(private httpClient: HttpClient) {}

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    transferencia.data = new Date();
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

}
