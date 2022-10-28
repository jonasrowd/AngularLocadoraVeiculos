import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from "./views/home/home.component";
import { CarsComponent } from "./views/cars/cars.component";
import { MovDirective } from "./directives/mov.directive";
import { CarsCreateComponent } from "./components/cars/cars-create/cars-create.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CarsReadComponent } from "./components/cars/cars-read/cars-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { CarsDevolucaoComponent } from './components/cars/cars-devolucao/cars-devolucao.component';
import { CarsAlteracaoComponent } from './components/cars/cars-alteracao/cars-alteracao.component';
import { CarsDeleteComponent } from './components/cars/cars-delete/cars-delete.component';
import { CarsCarrinhoComponent } from './components/cars/cars-devolucao/cars-carrinho/cars-carrinho.component';
import { ClientComponent } from './views/client/client.component';
import { ClientsReadComponent } from './components/clients/clients-read/clients-read.component';
import { ClientsCriarComponent } from './components/clients/clients-criar/clients-criar.component';
import { LoginComponent } from './components/login/login.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CarsComponent,
    MovDirective,
    CarsCreateComponent,
    CarsReadComponent,
    CarsDevolucaoComponent,
    CarsAlteracaoComponent,
    CarsDeleteComponent,
    CarsCarrinhoComponent,
    ClientComponent,
    ClientsReadComponent,
    ClientsCriarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
