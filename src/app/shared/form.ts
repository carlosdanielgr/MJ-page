import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';

export class Form {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    somethingToTell: new FormControl('', Validators.required),
  });

  constructor(protected readonly formService: FormService) {}

  sendForm() {
    if (this.form.invalid) return;
    const { name, phone, email, somethingToTell } = this.form.value;
    const body = {
      Nombre: name,
      Telefono: phone,
      Correo: email,
      '¿ALGO QUE QUIERAS CONTARME?': somethingToTell,
    };
    this.formService.postForm(body).subscribe({
      next: () => {
        this.form.reset();
      },
    });
  }
}
