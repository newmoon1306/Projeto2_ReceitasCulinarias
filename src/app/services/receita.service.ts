import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private apiUrl = 'http://localhost:3000/receitas';
  
  constructor(private http: HttpClient) { }
  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiUrl);
  }
   // Método para pegar uma receita específica por ID
   getReceitaById(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.apiUrl}/${id}`);
  }
}
