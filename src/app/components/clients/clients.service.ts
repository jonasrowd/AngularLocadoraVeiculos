import { catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { Clientes } from "./clientes.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientsService {
  baseClientesUrl = "http://localhost:4202/clientes";
  baseCepUrl = "https://viacep.com.br/ws"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  mostraErro(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, "Close", {
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
    return this.http.get<Clientes[]>(this.baseClientesUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.pegaError(e))
    );
  }

  criacaoClientes(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.baseClientesUrl, cliente)
  }

  buscarCep(cep: Clientes): Observable<Clientes> {
    const url = `${this.baseCepUrl}/${cep.cep}/json`; 
    return this.http.get<Clientes>(url)
  }

}
