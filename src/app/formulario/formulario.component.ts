import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  public nombreInput: string = '';
  public apellidoInput: string = '';

  agregarPersona(): void {
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona);
    this.nombreInput = '';
    this.apellidoInput = '';
  }
}
