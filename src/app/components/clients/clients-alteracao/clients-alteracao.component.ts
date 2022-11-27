import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Clientes } from './../clientes.model';
import { ClientsService } from './../clients.service';

@Component({
  selector: 'locadora-clients-alteracao',
  templateUrl: './clients-alteracao.component.html',
  styleUrls: ['./clients-alteracao.component.scss']
})
export class ClientsAlteracaoComponent implements OnInit {

  clientes: Clientes;
  cepForm: FormGroup;


  constructor(private clientsService: ClientsService, 
    private router: Router, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clientsService.readById(id).subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  alteraClientes(): void {
    this.clientsService.alterarClientes(this.clientes).subscribe(() => {
      this.clientsService.mostraErro("Cliente atualizado com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

  searchCep() {
    if(this.cepForm.value.dataCEP.length === 8) {
      this.clientsService.searchCEP(this.cepForm.value.dataCEP).subscribe((response) => {

        this.clientes.dataCEP = response.cep;
        this.clientes.address = response.address; 
        this.clientes.district = response.district;
        this.clientes.city = response.city;
        this.clientes.state = response.state;
      });  
    }
    
    if(this.cepForm.value.dataCEP.length === 0) {
      this.cepForm.reset();
    }
  }


}
