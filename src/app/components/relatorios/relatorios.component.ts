import { ClientsService } from './../clients/clients.service';
import { Locacao } from './../locacao/locacao';
import { Cars } from './../cars/cars.model';
import { Clientes } from './../clients/clientes.model';
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'locadora-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  clientes: Clientes[] = [];
  locacao: Locacao[] = [];
  carros: Cars[] = [];

  constructor(private clientsService: ClientsService) { 
  }

  ngOnInit(): void {
    this.clientsService.leituraClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

    createPdf() {
    let docDefinition = {  
      header:  'Cabeçalho PDF C#Corner' ,  
      content:  'Amostra de PDF gerado com Angular e PDFMake para C#Corner Blog'  
    };  
  
    pdfMake.createPdf(docDefinition).open();  
  } 

}
