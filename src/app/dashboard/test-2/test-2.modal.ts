import { Component } from "@angular/core";

import { ModalService, ModalShellComponent } from "@app/design-system";

@Component({
  selector: "app-test-2-modal",
  standalone: true,
  imports: [ModalShellComponent],
  templateUrl: "./test-2.modal.html",
})
export class Test2Modal {
  constructor(private modalService: ModalService) {}

  onDismiss() {
    this.modalService.closeModal(this);
  }

  onConfirm() {
    this.modalService.closeModal(this);
  }
}
