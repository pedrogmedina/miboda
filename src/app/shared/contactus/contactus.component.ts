import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})

export class ContactusComponent implements OnInit {
  contactForm: any = [];
  errorenvio: string = '';
  enviocorrecto: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private contactService: ContactService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.contactForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      privacity: ['', [Validators.required]],
      date: [new Date(), [Validators.required]],
    });
    
    

  }

  public async onSubmitContactForm() {
    try {
      const response = await this.contactService.sendMessage(this.contactForm.value);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: '¡Gracias por enviarnos un mensaje!',
        description:  'Tu mensaje ha llegado con éxito a nuestra bandeja de entrada, te enviaremos una respuesta lo antes posible.',
        buttonText: 'Continuar navegando'
      };
      this.dialog.open(DialogComponent, dialogConfig);
    } catch(error) {
      console.error('Error al enviar los datos:', error);
      this.errorenvio = 'Hubo un error al enviar los datos';
    }
  }
}
