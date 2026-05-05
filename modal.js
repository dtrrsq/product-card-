export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector(".close-modal-btn");
    this.setupCloseListener();
  }
  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  setupCloseListener() {
    this.closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
}

const openButton = document.querySelector(".open-modal-btn");
openButton.addEventListener("click", () => {
  regModal.open();
});
