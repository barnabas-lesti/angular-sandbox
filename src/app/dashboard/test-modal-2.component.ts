import { Component } from "@angular/core";

import { ModalContainer, ModalService } from "@app/design-system";

@Component({
  selector: "app-test-modal-2-component",
  standalone: true,
  imports: [ModalContainer],
  templateUrl: "./test-modal-2.component.html",
})
export class TestModal2Component {
  constructor(private modalService: ModalService) {}

  onDismiss() {
    console.debug("dismissed test-modal-2");
    this.modalService.closeModal(this);
  }

  onConfirm() {
    console.debug("confirmed test-modal-2");

    this.modalService.closeModal(this);
  }
}
