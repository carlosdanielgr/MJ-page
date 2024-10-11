import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { EmailService } from '../services/email.service';

export class Form {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    somethingToTell: new FormControl('', Validators.required),
  });

  loading = false;

  constructor(
    protected readonly formService: FormService,
    protected readonly emailService: EmailService
  ) {}

  sendForm() {
    if (this.form.invalid) return;
    this.loading = true;
    const { name, phone, email, somethingToTell } = this.form.value;
    const body = {
      Nombre: name,
      Telefono: phone,
      Correo: email,
      Comentarios: somethingToTell,
    };
    this.formService.postForm(body).subscribe({
      next: () => {
        this.form.reset();
        localStorage.setItem('form', 'true');
        this.loading = false;
        this.sendEmail(email as string);
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  sendEmail(email: string) {
    this.emailService
      .sendEmail({
        subject: '¡Gracias por registrarte a nuestra Master Class de Yoga !',
        to: email as string,
      })
      .subscribe();
  }
}
