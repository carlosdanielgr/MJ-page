import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.scss',
})
export class ModalFormComponent {
  constructor(private readonly modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }
}
