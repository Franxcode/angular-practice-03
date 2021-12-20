import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;
  public nombreInput: string;
  public apellidoInput: string;
  public index: number;
  public modoEdicion: number;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    // this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
    // if (this.modoEdicion != null && this.modoEdicion === 1) {
    //   let persona: Persona = this.personasService.encontrarPersona(this.index);
    //   this.nombreInput = persona.nombre;
    //   this.apellidoInput = persona.apellido;
    // }
  }
  onGuardarPersona(): void {
    let persona = new Persona(this.nombreInput, this.apellidoInput);

    if (this.index) {
      this.personasService.modificarPersona(this.index, persona);
    } else {
      this.personasService.agregarPersona(persona);
    }
    // if (this.modoEdicion != null && this.modoEdicion === 1) {
    //   this.personasService.modificarPersona(this.index, persona);
    // } else {
    //   this.personasService.agregarPersona(persona);
    // }
    // this.personaCreada.emit(persona);
    this.nombreInput = '';
    this.apellidoInput = '';
    this.router.navigate(['personas']);
  }
  eliminarPersona(): void {
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
