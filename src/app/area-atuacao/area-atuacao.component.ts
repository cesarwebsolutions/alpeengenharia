import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-area-atuacao',
  templateUrl: './area-atuacao.component.html',
  styleUrls: ['./area-atuacao.component.css']
})
export class AreaAtuacaoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirCard(card:string){
    const dialogRef = this.dialog.open(DialogComponent,  {
      data: card,
      maxHeight: '90vh'
    });
  }

}
