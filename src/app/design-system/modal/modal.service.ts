import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable, Type } from "@angular/core";

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
    const createdModalRef = createComponent(ModalComponent, {
      environmentInjector: this.injector,
    });

    // Pass data to the component
    // componentRef.instance.message = message;

    document.body.appendChild(createdModalRef.location.nativeElement);
    this.appRef.attachView(createdModalRef.hostView);

    this.openModalRefs = [...this.openModalRefs, createdModalRef];

    document.body.classList.add("overflow-hidden");
  }

  closeModal<T>(openModalInstance: T) {
    const openModalRef = this.openModalRefs.find(({ componentType }) => openModalInstance instanceof componentType);

    openModalRef?.destroy();

    this.openModalRefs = [
      ...this.openModalRefs.filter(({ componentType }) => !(openModalInstance instanceof componentType)),
    ];

    document.body.classList.remove("overflow-hidden");
  }
}
