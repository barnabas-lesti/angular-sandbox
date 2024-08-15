import { Component } from "@angular/core";

import { ModalService } from "@app/design-system";

import { Test1Modal } from "./test-1/test-1.modal";

@Component({
  selector: "app-dashboard-page",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard.page.html",
})
export class DashboardPage {
  constructor(private modalService: ModalService) {}

  onRandomButtonClick() {
    this.modalService.openModal(Test1Modal);
  }
}
