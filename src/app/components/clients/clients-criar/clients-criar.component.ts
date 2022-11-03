import { Router } from '@angular/router';
import { ClientsService } from './../clients.service';
import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'locadora-clients-criar',
  templateUrl: './clients-criar.component.html',
  styleUrls: ['./clients-criar.component.css']
})
export class ClientsCriarComponent implements OnInit {

  // cliente: Clientes = {
  //   nome: "",
  //   identificacao: "",
  //   tipo: "",
  //   habilitacao: "",
  //   cep: "",
  //   endereco: "",
  //   complemento: "",
  //   cidade: "",
  //   estado: "",
  //   pais: ""
  // }

  public cepForm: FormGroup;
  dataCEP: any;
  address: string; 
  district: string; 
  state: string; 
  city: string; 

  constructor(private clientsService: ClientsService, private router: Router,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //formulário para o cep
    this.cepForm = this._formBuilder.group({
      valorCEP: ['', Validators.required],
      address: [''],
      district: [''],
      city: [''],
      state: [''],
    });
  }

  searchCep() {
    if(this.cepForm.value.valorCEP.length === 8) {
      this.clientsService.searchCEP(this.cepForm.value.valorCEP).subscribe((response) => {

        this.dataCEP = response;
  
        this.address = response.address; 
        this.district = response.district;
        this.city = response.city;
        this.state = response.state;
      });  
    }
    
    if(this.cepForm.value.valorCEP.length === 0) {
      this.clearForm();
    }
  }

    clearForm() {
      this.cepForm.reset({
        'valorCEP': '',
        'address': '',
        'district': '',
        'city': '',
        'state': '',
      });
    }
  }


  // consultaCep(valor:String, form:Form) {
  //   this.clientsService.buscarCep(valor).subscribe((retornoWs) => this.populaForm(retornoWs,form))
  // }

  // populaForm(retornoWs:any, form:Form) {
  //   form.setValue({
  //     cep: retornoWs.cep,
  //     logradouro: retornoWs.logradouro,
  //     complemento: retornoWs.complemento,
  //     bairro: retornoWs.bairro,
  //     localidade: retornoWs.localidade,
  //     uf: retornoWs.uf,
  //     ibge: retornoWs.ibge,
  //     gia: retornoWs.gia,
  //     ddd: retornoWs.ddd,
  //     siafi: retornoWs.siafi
  //   })
  // }

  // criaCliente(cliente: Clientes): void {
  //   this.clientsService.criacaoClientes(cliente).subscribe(() => {
  //     this.clientsService.mostraErro("Cadastro efetuado com sucesso.")
  //     this.router.navigate(['/clientes'])
  //   })
  // }

  // cancel(): void {
  //   this.router.navigate(['/clientes'])
  // }

// }
