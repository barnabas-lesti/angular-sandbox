import { Component } from "@angular/core";

import { ModalService, ModalShellComponent } from "@app/design-system";

import { Test2Modal } from "../test-2/test-2.modal";

@Component({
  selector: "app-test-1-modal",
  standalone: true,
  imports: [ModalShellComponent],
  templateUrl: "./test-1.modal.html",
})
export class Test1Modal {
  constructor(private modalService: ModalService) {}

  onDismiss() {
    this.modalService.closeModal(this);
  }

  onConfirm() {
    this.modalService.closeModal(this);
  }

  openTestModal2() {
    this.modalService.openModal(Test2Modal);
  }
}
