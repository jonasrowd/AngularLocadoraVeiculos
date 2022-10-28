import { Cars } from "./cars.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs/internal/Observable";
import { catchError, map } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CarsService {
  baseCarUrl = "http://localhost:4202/carros";
  baseCarUrlTrue = "http://localhost:4202/carros?disponivel=Sim";
  baseCarUrlFalse = "http://localhost:4202/carros?disponivel=Não";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, "Close", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  createCar(car: Cars): Observable<Cars> {
    return this.http.post<Cars>(this.baseCarUrl, car).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro na aplicação.", true);
    return EMPTY;
  }

  devolveCar(car: Cars): Observable<Cars> {
    return this.http.patch<Cars>(this.baseCarUrl, (car.disponivel = "Sim")).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readCar(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.baseCarUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readCarTrue(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.baseCarUrlTrue).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readCarFalse(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.baseCarUrlFalse).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: any): Observable<Cars> {
    const url = `${this.baseCarUrl}/${id}`;
    return this.http.get<Cars>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  atualizaCar(car: Cars): Observable<Cars> {
    const url = `${this.baseCarUrl}/${car.id}`;
    return this.http.put<Cars>(url, car).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deletaCar(id: any): Observable<Cars> {
    const url = `${this.baseCarUrl}/${id}`;
    return this.http.delete<Cars>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  recebeValor() {}
}
