(() => {
  const refs = {
    //Атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    //Атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    //Атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();