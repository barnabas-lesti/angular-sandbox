import { Component } from "@angular/core";

import { ModalService } from "@app/design-system";

@Component({
  selector: "app-dashboard-page",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard.page.html",
})
export class DashboardPage {
  constructor(private modalService: ModalService) {}
  openModal() {
    void this.modalService;
    console.debug("open modal");
  }
}
