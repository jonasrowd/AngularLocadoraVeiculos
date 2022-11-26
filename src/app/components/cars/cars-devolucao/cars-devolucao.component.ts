import { LocacaoService } from './../../locacao/locacao.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Locacao } from '../../locacao/locacao';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'locadora-cars-devolucao',
  templateUrl: './cars-devolucao.component.html',
  styleUrls: ['./cars-devolucao.component.scss']
})
export class CarsDevolucaoComponent implements OnInit {

  locacao: Locacao[];
  displayedColumns = ['carro','cliente','qtdDias','dtIni','total','action'] 
  
  constructor(private locacaoService: LocacaoService, private router: Router) { }

  ngOnInit(): void {
    this.locacaoService.leituraLocacoes().subscribe(locacao => {
      this.locacao = locacao;
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
