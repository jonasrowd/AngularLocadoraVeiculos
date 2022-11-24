import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlugadosComponent } from './components/alugados/alugados.component';
import { CarsAlteracaoComponent } from './components/cars/cars-alteracao/cars-alteracao.component';
import { CarsCreateComponent } from './components/cars/cars-create/cars-create.component';
import { CarsDeleteComponent } from './components/cars/cars-delete/cars-delete.component';
import { CarsCarrinhoComponent } from './components/cars/cars-devolucao/cars-carrinho/cars-carrinho.component';
import { CarsDevolucaoComponent } from './components/cars/cars-devolucao/cars-devolucao.component';
import { ClientsAlteracaoComponent } from './components/clients/clients-alteracao/clients-alteracao.component';
import { ClientsCriarComponent } from './components/clients/clients-criar/clients-criar.component';
import { LocacaoComponent } from './components/locacao/locacao.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { CarsComponent } from './views/cars/cars.component';
import { ClientComponent } from './views/client/client.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cars",
    component: CarsComponent,
  },
  {
    path: "cars/create",
    component: CarsCreateComponent,
  },
  {
    path: "cars/devolucao",
    component: CarsDevolucaoComponent,
  },
  {
    path: "cars/alteracao/:id",
    component: CarsAlteracaoComponent,
  },
  {
    path: "cars/delete/:id",
    component: CarsDeleteComponent,
  },
  {
    path: "cars/devolucao/:id",
    component: CarsCarrinhoComponent,
  },
  {
    path: "clientes",
    component: ClientComponent,
  },
  {
    path: "clientes/criar",
    component: ClientsCriarComponent,
  },
  {
    path: "locacao",
    component: LocacaoComponent
  },
  {
    path: "alugados",
    component: AlugadosComponent
  },
  {
    path: "relatorios",
    component: RelatoriosComponent
  },
  {
    path:"clientes/alteracao/:id",
    component: ClientsAlteracaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
