import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Clientes } from './clientes.model';

@Injectable({
  providedIn: "root",
})
export class ClientsService {

  pdfMake: any;

  baseClientesUrl = "https://my-json-server.typicode.com/jonasrowd/dbteste/clientes";
  baseClientesUrlTrue = "https://my-json-server.typicode.com/jonasrowd/dbteste/clientes?disponivel=Sim";

  private baseURL: string = 'https://cep.awesomeapi.com.br/';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 3;

  constructor(private _snackBar: MatSnackBar, private _httpClient: HttpClient) {}

  mostraErro(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, "Close", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro na aplicação.", true);
    return EMPTY;
  }

  pegaError(e: any): Observable<any> {
    this.mostraErro("Ocorreu um erro na aplicação.", true);
    return EMPTY;
  }

  leituraClientes(): Observable<Clientes[]> {
    return this._httpClient.get<Clientes[]>(this.baseClientesUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.pegaError(e))
    );
  }

  leituraClientesTrue(): Observable<Clientes[]> {
    return this._httpClient.get<Clientes[]>(this.baseClientesUrlTrue).pipe(
      map((obj) => obj),
      catchError((e) => this.pegaError(e))
    );
  }

  criacaoClientes(cliente: Clientes): Observable<Clientes> {
    return this._httpClient.post<Clientes>(this.baseClientesUrl, cliente)
  }

  public searchCEP(cep: string): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}json/${cep}`)
      .pipe(
        tap((data: any) => 
        data,
      ),
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        if(error.status === 400) {
          this.openSnackBar400();
        } else if(error.status === 404) {
          this.openSnackBar404();
        }
        return EMPTY; 
      })
    );
  }

  public openSnackBar400() {
    this._snackBar.open('CEP inválido. Verifique e tente novamente.', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }

  public openSnackBar404() {
    this._snackBar.open('CEP não encontrado. Verifique e tente novamente.', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }

    submitCliente(cliente: Clientes): Observable<Clientes> {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
  
      return this._httpClient
        .post<Clientes>(this.baseClientesUrl, cliente, httpOptions);
    }

    showMessage(msg: string, isError: boolean = false): void {
      this._snackBar.open(msg, "Close", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"],
      });
    }

    readById(id: any): Observable<Clientes> {
      const url = `${this.baseClientesUrl}/${id}`;
      return this._httpClient.get<Clientes>(url)
    }

    alterarClientes(cliente: Clientes): Observable<Clientes> {
      const url = `${this.baseClientesUrl}/${cliente.id}`;
      return this._httpClient.put<Clientes>(url, cliente)
    }
  
    deletaClientes(id: any): Observable<Clientes> {
      const url = `${this.baseClientesUrl}/${id}`;
      return this._httpClient.delete<Clientes>(url)
    }

}
