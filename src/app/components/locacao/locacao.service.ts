import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Locacao } from './locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  cValor:String;

  baseLocacaoURL = "https://my-json-server.typicode.com/jonasrowd/dbteste/locacao"
  baseLocadosURL = "https://my-json-server.typicode.com/jonasrowd/dbteste/locacao?dtFim="

  constructor(private http: HttpClient) { }

  alugar(locacao: Locacao):Observable<Locacao> {
    return this.http.post<Locacao>(this.baseLocacaoURL, locacao)
  }

  leituraLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(this.baseLocadosURL)
  }

  readById(id: any): Observable<Locacao> {
    const url = `${this.baseLocacaoURL}/${id}`;
    return this.http.get<Locacao>(url)
  }

  receberLocacao(locacao: Locacao): Observable<Locacao> {
    const url = `${this.baseLocacaoURL}/${locacao.id}`;
    return this.http.put<Locacao>(url, locacao);
  }

}
