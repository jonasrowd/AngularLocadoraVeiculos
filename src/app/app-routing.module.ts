import { LoginComponent } from './components/login/login.component';
import { ClientsCriarComponent } from './components/clients/clients-criar/clients-criar.component';
import { ClientsReadComponent } from './components/clients/clients-read/clients-read.component';
import { ClientComponent } from "./views/client/client.component";
import { CarsCarrinhoComponent } from "./components/cars/cars-devolucao/cars-carrinho/cars-carrinho.component";
import { CarsDeleteComponent } from "./components/cars/cars-delete/cars-delete.component";
import { CarsAlteracaoComponent } from "./components/cars/cars-alteracao/cars-alteracao.component";
import { CarsDevolucaoComponent } from "./components/cars/cars-devolucao/cars-devolucao.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CarsComponent } from "./views/cars/cars.component";
import { CarsCreateComponent } from "./components/cars/cars-create/cars-create.component";

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
    path: "cars/carrinho/:id",
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
    path: "login",
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
