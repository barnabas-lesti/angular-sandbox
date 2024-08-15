import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal-shell-component",
  standalone: true,
  imports: [],
  templateUrl: "./modal-shell.component.html",
})
export class ModalShellComponent {
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
