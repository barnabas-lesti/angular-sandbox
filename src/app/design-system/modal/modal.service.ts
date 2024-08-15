import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable, Type } from "@angular/core";

import { MODAL_OPEN_BODY_CLASS } from "./modal.const";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private openModalRefs: ComponentRef<unknown>[] = [];

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector,
  ) {}

  openModal<T>(ModalComponent: Type<T>) {
    // Create componentRef from Component:
    const createdModalRef = createComponent(ModalComponent, {
      environmentInjector: this.injector,
    });

    // Pass data to the component
    // componentRef.instance.message = message;

    // Inject componentRef in DOM and Angular context:
    document.body.appendChild(createdModalRef.location.nativeElement);
    this.appRef.attachView(createdModalRef.hostView);

    // Hide latest modal:
    this.openModalRefs[this.openModalRefs.length - 1]?.location.nativeElement.classList.add("hidden");

    // Push new modal to collection:
    this.openModalRefs = [...this.openModalRefs, createdModalRef];

    // Add required body class if not already present:
    document.body.classList.add(MODAL_OPEN_BODY_CLASS);
  }

  closeModal<T>(openModalInstance: T) {
    // Get instance componentRef:
    const openModalRef = this.openModalRefs.find(({ componentType }) => openModalInstance instanceof componentType);

    // Destroy componentRef:
    openModalRef?.destroy();

    // Remove componentRef from opened modals array:
    this.openModalRefs = [
      ...this.openModalRefs.filter(({ componentType }) => !(openModalInstance instanceof componentType)),
    ];

    // Make new latest modal visible:
    this.openModalRefs[this.openModalRefs.length - 1]?.location.nativeElement.classList.remove("hidden");

    // Remove body class if no more open modals:
    if (this.openModalRefs.length < 1) {
      document.body.classList.remove(MODAL_OPEN_BODY_CLASS);
    }
  }
}
