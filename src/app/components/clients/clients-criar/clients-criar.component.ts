import { Router } from '@angular/router';
import { ClientsService } from './../clients.service';
import { Clientes } from './../clientes.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'locadora-clients-criar',
  templateUrl: './clients-criar.component.html',
  styleUrls: ['./clients-criar.component.scss']
})
export class ClientsCriarComponent implements OnInit {

  @ViewChild('cform') cepFormDirective;

  cepForm: FormGroup;
  clientes: Clientes ={ 
    nome: '',
    telefone: '',
    dataCEP: '',
    address: '',
    district: '',
    state: '',
    city: ''
  };
  submitted = null;
  errMess: string;

  formErrors = {
    'nome': '',
    'teleopne': '',
    'dataCEP': ''
  };

  validationMessages = {
    'nome': {
      'required':      'Name is required.'
    },
    'telefone': {
      'required':      'Last Name is required.'
    },
    'dataCEP': {
      'required':      'Cep is required.'
    }
  };

  constructor(private clientsService: ClientsService, private router: Router,private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.cepForm = this.formbuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      dataCEP: ['', Validators.required],
      address: [''],
      district: [''],
      city: [''],
      state: [''],
    });

    this.cepForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

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

  onSubmit() {
    this.clientes = this.cepForm.value;
    console.log(this.clientes);
    this.clientsService.submitCliente(this.clientes)
      .subscribe(() => {
        this.clientsService.showMessage('Cadastro Concluído!')
      });
    this.clearForm();
  }

  clearForm() {
    this.clientes.nome= '',
    this.clientes.telefone= '',
    this.clientes.dataCEP= '',
    this.clientes.address= '',
    this.clientes.district= '',
    this.clientes.city= '',
    this.clientes.state= ''
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

  onValueChanged(data?: any) {
    if (!this.cepForm) { return; }
    const form = this.cepForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
