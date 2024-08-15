import { Component } from "@angular/core";

import { ModalService } from "@app/design-system";

import { TestModal1Component } from "./test-modal-1.component";

@Component({
  selector: "app-dashboard-page",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard.page.html",
})
export class DashboardPage {
  constructor(private modalService: ModalService) {}

  onRandomButtonClick() {
    this.modalService.openModal(TestModal1Component);
  }
}
