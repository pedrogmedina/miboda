import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  invitadoForm: any = [];
  formstep: string = '1 - Invitados';
  formstepdescripcion: string = 'Rellena los datos de los invitados y acompanante.';
  public hasHijos! : boolean;
  personalesData: any;
  personalesbloque: boolean = true;
  direccionbloque: boolean = false;
  mensajebloque: boolean = false;
  disabled: any;
  mensajeerror : string = '';
  mensajeerrorfinal: string = '';

  constructor(
    private contactService: ContactService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.invitadoForm =  this.formBuilder.group({
      personales: this.formBuilder.group({
        nombre:['', [Validators.required]],
        apellidos:['', [Validators.required]],
        acompananteNombre:[''],
        acompananteApellido:[''],
        correo:['', [Validators.required,  Validators.email]],
        telefono:['', [Validators.required]],
      }),
      direccion: this.formBuilder.group({
        calle:['', [Validators.required]],
        poblacion:['', [Validators.required]],
        provincia:['', [Validators.required]],
        codPostal:['', [Validators.required]],
        pais:['España', [Validators.required]],
      }),
      mensaje: this.formBuilder.group({
        mensaje:[''],
      }),
    });

    this.invitadoForm.valueChanges.subscribe( (res: any) => {
      this.personalesData = res.personalesData;
      this.hasHijos = res.hijos;
    });
    
  }

  OnClickBloqueForm(bloque : string) {
    switch(bloque) { 
      case 'personales':
        if (this.invitadoForm.get('personales').valid) {
          this.personalesbloque = false;
          this.direccionbloque = true;
          this.formstep = '2 - Contacto';
          this.formstepdescripcion = 'En caso de que no podamos daros la invitación en mano, usaremos estos datos para enviarla por correo ordinario.';
        } if (this.invitadoForm.get('personales').invalid) {
          this.mensajeerror = 'Por favor rellene correctamente todos los campos';
        }
      break;
      case 'direccion':
        if(this.invitadoForm.get('direccion').valid) { 
          this.direccionbloque = false;
          this.mensajebloque = true;
          this.formstep = '3 - Confirmar';
          this.formstepdescripcion = 'Déjanos un mensaje o un saludo si lo deseas';
        }
      break;
      case 'volver':
        this.personalesbloque = true;
        this.direccionbloque = false;
        this.formstep = '1 - Contacto';
        this.formstepdescripcion = 'Rellena los datos de los invitados y acompanante.';
      break;
      default:
      break;
    }
  }

  /* enviarCorreo() { */
    /* if (this.formulario.valid) {
      const datosFormulario = this.formulario.value;
      this.contactService.enviarCorreo(datosFormulario.nombre, datosFormulario.correo, datosFormulario.mensaje).subscribe( (res: any) => {
        if (res.status === 200) {
          this.formulario.reset();
          this.router.navigate(['/formulario/success']);
        } else {
          alert('Hubo un error al enviar el correo');
          console.log(res);
        }
      }); 
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    } */
  /* } */

  public async onSubmitInvitado() {
    try {

      const response = await this.contactService.createInvitado(this.invitadoForm.value);
      console.log('Datos enviados correctamente:', response);
      this.router.navigate(['/formulario/success']);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      this.mensajeerrorfinal = 'Hubo un error al enviar los datos';
    }
  }
}
