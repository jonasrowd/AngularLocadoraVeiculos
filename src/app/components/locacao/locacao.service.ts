import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs';
import { Locacao } from './locacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  cValor:String;

  baseLocacaoURL = "http://localhost:4202/locacao"
  baseLocadosURL = "http://localhost:4202/locacao?dtFim="

  constructor(private http: HttpClient) { }

  alugar(locacao: Locacao):Observable<Locacao> {
    return this.http.post<Locacao>(this.baseLocacaoURL, locacao)
  }

  leituraLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(this.baseLocadosURL)
  }

}
