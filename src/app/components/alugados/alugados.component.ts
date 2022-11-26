import { Router } from '@angular/router';
import { LocacaoService } from './../locacao/locacao.service';
import { Component, OnInit } from '@angular/core';
import { Locacao } from '../locacao/locacao';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'locadora-alugados',
  templateUrl: './alugados.component.html',
  styleUrls: ['./alugados.component.scss']
})
export class AlugadosComponent implements OnInit {

  locacao: Locacao[];
  displayedColumns = ['carro','cliente','qtdDias','dtIni','total'] 
  
  constructor(private locacaoService: LocacaoService, private router: Router) { }

  ngOnInit(): void {
    this.locacaoService.leituraLocacoes().subscribe(locacao => {
      this.locacao = locacao;
    })
  }

  navigateToClientsAluguel(): void {
    this.router.navigate(['locacao'])
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
          text: 'Veículos Alugados',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        this.table(this.locacao, ['carro','cliente','qtdDias','dtIni','total'])
      ],
      styles: {
      }
    };
    pdfMake.createPdf(docDefinition).open();  
  } 
}
