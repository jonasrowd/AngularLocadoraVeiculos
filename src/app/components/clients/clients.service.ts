import { EMPTY, Observable } from "rxjs";
import { Clientes } from "./clientes.model";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientsService {
  baseClientesUrl = "http://localhost:4202/clientes";
  baseCepUrl = "https://viacep.com.br/ws"

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

  criacaoClientes(cliente: Clientes): Observable<Clientes> {
    return this._httpClient.post<Clientes>(this.baseClientesUrl, cliente)
  }

  buscarCep(cep:String) {
    const url = `${this.baseCepUrl}/${cep}/json`; 
    return this._httpClient.get(url)
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

}
