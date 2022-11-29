import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlugadosComponent } from './components/alugados/alugados.component';
import { CarsAlteracaoComponent } from './components/cars/cars-alteracao/cars-alteracao.component';
import { CarsCreateComponent } from './components/cars/cars-create/cars-create.component';
import { CarsDeleteComponent } from './components/cars/cars-delete/cars-delete.component';
import { CarsCarrinhoComponent } from './components/cars/cars-devolucao/cars-carrinho/cars-carrinho.component';
import { CarsDevolucaoComponent } from './components/cars/cars-devolucao/cars-devolucao.component';
import { CarsReadComponent } from './components/cars/cars-read/cars-read.component';
import { ClientsAlteracaoComponent } from './components/clients/clients-alteracao/clients-alteracao.component';
import { ClientsCriarComponent } from './components/clients/clients-criar/clients-criar.component';
import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { ClientsReadComponent } from './components/clients/clients-read/clients-read.component';
import { LocacaoComponent } from './components/locacao/locacao.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MovDirective } from './directives/mov.directive';
import { CarsComponent } from './views/cars/cars.component';
import { ClientComponent } from './views/client/client.component';
import { HomeComponent } from './views/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';

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
    LocacaoComponent,
    AlugadosComponent,
    ClientsAlteracaoComponent,
    ClientsDeleteComponent
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
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
