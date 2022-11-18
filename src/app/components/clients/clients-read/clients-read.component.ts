import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'locadora-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.scss']
})
export class ClientsReadComponent implements OnInit {

  clientes: Clientes[] = []

  displayedColumns = ['nome','telefone','dataCEP','address','district','state','city','action', 'excluir']

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.leituraClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
