import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TransferenciasService } from "../service/transferencias.service";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciasService, private router: Router) {}

  transferir() {
    this.service.adicionar({valor: this.valor, destino: this.destino})
      .subscribe(
        (resultado) => {
          console.log(resultado);
          this.router.navigateByUrl('extrato');
        },
        (erro) => {
          console.error(erro);
          alert('Erro!');
        }
      );
  }

}
