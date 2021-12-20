import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];
  public nombreInput: string = '';
  public apellidoInput: string = '';

  agregarPersona(): void {
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona);
    this.nombreInput = '';
    this.apellidoInput = '';
  }
}
