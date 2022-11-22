import { Cars } from './../cars/cars.model';
import { Clientes } from './../clients/clientes.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocacaoService } from './locacao.service';
import { CarsService } from './../cars/cars.service';
import { ClientsService } from './../clients/clients.service';
import { Component, OnInit, ViewChild, OnChanges, SimpleChanges  } from '@angular/core';
import { Locacao } from './locacao';

@Component({
  selector: 'locadora-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  @ViewChild('lform') locacaoFormDirective;

  locacaoCliente = new FormControl('');
  locacaoCarro = new FormControl('');

  valorDiaria: any;

  carros: Cars[];
  clientes: Clientes[];
  locacaoForm: FormGroup;

  locacao: Locacao = {
    id: '',
    idCliente: '',
    idCarro: '',
    cliente: '',
    carro: '',
    qtdDias: 0,
    dtIni: '',
    dtFim: '',
    multa: '',
    total: ''
  }

  cliente: Clientes = {
    nome: '',
    telefone: '',
    dataCEP: '',
    address: '',
    district: '',
    state: '',
    city: ''
  }

  carro: Cars = {
    id: '',
    marca: '',
    modelo: '',
    ano: '',
    diaria: '',
    categoria: '',
    disponivel: ''
  };

  enviado = false;
  errMsg: string;

  formErrors = {
    'cliente': '',
    'carro': '',
    'qtdDias': ''
  };

  validationMessages = {
    'cliente': {
      'required': 'Cliente is required.'
    },
    'carro': {
      'required': 'Veículo is required.'
    },
    'qtdDias': {
      'required': 'Data de início is required.'
    }
  };

  constructor(private clientsService: ClientsService,
    private carsService:CarsService,
    private locacaoService: LocacaoService,
    private router: Router,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.createForm();

    this.clientsService.leituraClientes().subscribe(clientes => {
      this.clientes = clientes
    })

    this.carsService.readCarTrue().subscribe(carro => {
      this.carros = carro
    })

    this.locacaoForm.get("cliente").valueChanges.subscribe(selectedValue => {
      if(selectedValue != '') {
        this.procuraCliente(selectedValue)
      }
    })
  
  
    this.locacaoForm.get("carro").valueChanges.subscribe(selectedValue => {
      this.procuraVeiculo(selectedValue);
    }) 
  }

  createForm() {

    this.locacaoForm = this.formbuilder.group({
      idCliente:  [''],
      idCarro:    [''],
      dtIni:      [''],
      dtFim:      [''],
      cliente:    ['', [Validators.required]],
      carro:      ['', [Validators.required]],
      qtdDias:    [''],
      multa:      [''],
      total:      ['']
    });

    this.locacaoForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.locacaoForm) { return; }
    const form = this.locacaoForm;
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

  onSubmit() {

    // this.locacao = this.locacaoForm.value;

    console.log(this.locacao);

    this.locacao.dtIni = new Date().toLocaleDateString();

    this.locacaoService.alugar(this.locacao)
      .subscribe(() => {
        this.clientsService.showMessage('Cadastro Concluído!')
      });

      this.clearForm();
      
      this.router.navigate(['alugados'])

  }
  
  clearForm() {
    this.locacao.idCliente  = '',
    this.locacao.idCarro    = '',
    this.locacao.cliente    = '',
    this.locacao.carro      = '',
    this.locacao.dtIni      = '',
    this.locacao.dtFim      = '',
    this.locacao.qtdDias    = 0,
    this.locacao.multa      = '',
    this.locacao.total      = ''
  }

  cancel(): void {

    this.router.navigate(['/'])

  }

  procuraVeiculo(data?: any) {

    this.valorDiaria = data.diaria

    if (data == ''){ return;}
    else {

      this.locacao.idCarro = data.id
      this.locacao.total = data.diaria
      this.locacao.carro = data.marca + '/' + data.modelo  + '/' + data.ano
      this.locacaoForm.get("carro").setValue(data.marca + '/' + data.modelo  + '/' + data.ano, { emitEvent: false });

      };

      console.log(data);

      return this.valorDiaria;
  }

  procuraCliente(data?: any): void {
    if (data == '') {return;}
    else{
      this.locacao.idCliente = data.id
      this.locacao.cliente = data.nome
      this.locacaoForm.get("cliente").setValue(data.nome, { emitEvent: false });
    }
    console.log(data);
  }


  calcTotal(qtdDias: any): void {
    console.log(this.valorDiaria);

    this.locacao.total = qtdDias * this.valorDiaria;
  }

}
