import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal-container",
  standalone: true,
  imports: [],
  templateUrl: "./modal.container.html",
})
export class ModalContainer {
  @Input() title?: string;

  @Output() confirm = new EventEmitter<void>();
  @Output() dismiss = new EventEmitter<void>();

  constructor() {}

  onCloseClick() {
    this.dismiss.emit();
  }

  onDiscardClick() {
    this.dismiss.emit();
  }

  onConfirmClick() {
    this.confirm.emit();
  }

  onOverlayClick() {
    this.dismiss.emit();
  }
}
