import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Form } from '../../shared/form';
import { FormService } from '../../services/form.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent extends Form {
  constructor(
    protected override formService: FormService,
    protected override emailService: EmailService
  ) {
    super(formService, emailService);
  }
}
