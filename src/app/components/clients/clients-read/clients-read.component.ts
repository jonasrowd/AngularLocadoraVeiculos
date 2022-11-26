import { Router } from '@angular/router';
import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'locadora-clients-read',
  templateUrl: './clients-read.component.html',
  styleUrls: ['./clients-read.component.scss']
})
export class ClientsReadComponent implements OnInit {

  clientes: Clientes[];
  displayedColumns = ['nome','telefone','dataCEP','address','district','state','city','disponivel','action', 'excluir']
  
  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.clientsService.leituraClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  navigateToClientsCreate(): void {
    this.router.navigate(['clientes/criar'])
  }

  buildTableBody(data, columns) {
    var body = [];
    body.push(columns);
    data.forEach(function(row) {
        var dataRow = [];
        columns.forEach(function(column) {
            dataRow.push(row[column].toString());
        })
        body.push(dataRow);
    });
    return body;
  }

  table(data, columns) {
    return {
        table: {
            headerRows: 1,
            body: this.buildTableBody(data, columns)
        }
    };
  }

  createPdf() {
    let docDefinition = {  
      content:  [
        {
          text: 'Cadastro de Clientes',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        this.table(this.clientes, ['nome','telefone','dataCEP','address','district','state','city', 'disponivel'])
      ],
      styles: {
      }
    };
      pdfMake.createPdf(docDefinition).open();  
  } 

}
