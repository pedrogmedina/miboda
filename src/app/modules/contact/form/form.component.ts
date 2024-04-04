import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      mensaje: ['', Validators.required], 
    });
  }

  enviarCorreo() {
    if (this.formulario.valid) {
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
    }
  }
}
