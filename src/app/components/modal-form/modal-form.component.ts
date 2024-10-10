import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from '../../services/form.service';
import { Form } from '../../shared/form';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.scss',
})
export class ModalFormComponent extends Form {
  constructor(
    private readonly modalService: NgbModal,
    protected override formService: FormService,
    protected override emailService: EmailService
  ) {
    super(formService, emailService);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
