import { LocacaoService } from './../locacao/locacao.service';
import { Component, OnInit } from '@angular/core';
import { Locacao } from '../locacao/locacao';

@Component({
  selector: 'locadora-alugados',
  templateUrl: './alugados.component.html',
  styleUrls: ['./alugados.component.scss']
})
export class AlugadosComponent implements OnInit {

  locacao: Locacao[];
  displayedColumns = ['carro','cliente','qtdDias','dtIni','total'] 
  
  constructor(private locacaoService: LocacaoService) { }

  ngOnInit(): void {
    this.locacaoService.leituraLocacoes().subscribe(locacao => {
      this.locacao = locacao;
    })
  }

}
