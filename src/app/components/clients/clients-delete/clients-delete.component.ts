import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Clientes } from './../clientes.model';
import { ClientsService } from './../clients.service';

@Component({
  selector: 'locadora-clients-delete',
  templateUrl: './clients-delete.component.html',
  styleUrls: ['./clients-delete.component.scss']
})
export class ClientsDeleteComponent implements OnInit {

  clientes!: Clientes

  constructor(private clientsService: ClientsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clientsService.readById(id).subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  deleteClientes(): void {
    this.clientsService.deletaClientes(this.clientes.id).subscribe(() => {
      this.clientsService.mostraErro("Clientesro Excluído com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clientes"]);
  }

}
