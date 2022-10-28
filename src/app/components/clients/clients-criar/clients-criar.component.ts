import { Router } from '@angular/router';
import { ClientsService } from './../clients.service';
import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-clients-criar',
  templateUrl: './clients-criar.component.html',
  styleUrls: ['./clients-criar.component.css']
})
export class ClientsCriarComponent implements OnInit {

  cliente: Clientes = {
    nome: "",
    identificacao: "",
    tipo: "",
    habilitacao: "",
    cep: "",
    endereco: "",
    complemento: "",
    cidade: "",
    estado: "",
    pais: ""
  }

  constructor(private clientsService: ClientsService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(cep: Clientes) {
    return this.clientsService.buscarCep(this.cliente).subscribe(() => {
      this.cliente.cep =cep.cep
    })
  }

  criaCliente(): void {
    this.clientsService.criacaoClientes(this.cliente).subscribe(() => {
      this.clientsService.mostraErro("Cadastro efetuado com sucesso.")
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
