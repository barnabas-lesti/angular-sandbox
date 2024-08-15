import { Component } from "@angular/core";

import { ModalContainer, ModalService } from "@app/design-system";

import { TestModal2Component } from "./test-modal-2.component";

@Component({
  selector: "app-test-modal-1-component",
  standalone: true,
  imports: [ModalContainer],
  templateUrl: "./test-modal-1.component.html",
})
export class TestModal1Component {
  constructor(private modalService: ModalService) {}

  onDismiss() {
    console.debug("dismissed test-modal-1");
    this.modalService.closeModal(this);
  }

  onConfirm() {
    console.debug("confirmed test-modal-1");

    this.modalService.closeModal(this);
  }

  openTestModal2() {
    this.modalService.openModal(TestModal2Component);
  }
}
