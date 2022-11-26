import { Router } from '@angular/router';
import { Cars } from './../cars.model';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'locadora-cars-read',
  templateUrl: './cars-read.component.html',
  styleUrls: ['./cars-read.component.scss']
})
export class CarsReadComponent implements OnInit {

  cars: Cars[]; 
  carTrue: Cars[];
  displayedColumns = ['marca','modelo','ano','diaria','categoria','disponivel','action','excluir']

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.carsService.readCar().subscribe(cars => {
      this.cars = cars
    })

    this.carsService.readCarTrue().subscribe(carTrue => {
      this.carTrue = carTrue
    })
  }

  navigateToCarsCreate(): void {
    this.router.navigate(['cars/create'])
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
          text: 'Cadastro de Veículos',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        this.table(this.carTrue, ['marca','modelo','ano','diaria','categoria','disponivel'])
      ],
      styles: {
      }
    };
      pdfMake.createPdf(docDefinition).open();  
  } 

}
