import { TransferenciasService } from './../service/transferencias.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];
  total: number = 0;

  constructor(private service: TransferenciasService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
      this.total = transferencias.map((t) => t.valor).reduce((prev, curr) => prev + curr);
    });
  }

}
