import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { Propietario } from '../propietario';
import { PropietariosService } from '../propietarios.service'
@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.scss']
})
export class PropietarioComponent implements OnInit {

  propietarios: Propietario[] = [new Propietario ("juan", 34567889)];

  constructor(private propietariosService: PropietariosService, private dialogo: MatDialog, private snackBar: MatSnackBar ) { }

  eliminarPropietario(propietario:Propietario) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `realmente quieres eliminar a ${propietario.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if(!confirmado) return;
        this.propietariosService
          .deletePropietario(propietario)
          .subscribe(() => {
            this.obtenerPropietario();
            this.snackBar.open('propietario eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit(): void {
    this.obtenerPropietario();
  }

  obtenerPropietario() {
    return this.propietariosService
      .getPropietarios()
      .subscribe((propietarios: Propietario[]) => this.propietarios = propietarios );
  }

}
