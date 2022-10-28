import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'locadora-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.css']
})
export class ClientsReadComponent implements OnInit {

  clientes: Clientes[] = []

  displayedColumns = ['nome','identificacao','tipo','habilitacao','cep','endereco','complemento','cidade','estado','pais', 'action', 'excluir']

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.leituraClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
