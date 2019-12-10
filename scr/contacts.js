export default class Contacts {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = 'contacts';
    this.render();
  }

  createLink(name, link) {
    let contact = document.createElement("a");
    contact.className = name;
    contact.target = "_blank";
    contact.href = link;
    this.container.appendChild(contact);
  }

  render() {
    this.createLink("fab fa-github fa-3x", "https://github.com/lisaw97");
    this.createLink("fas fa-envelope fa-3x", "mailto: lisawen0614@gmail.com");
    this.createLink(
      "fab fa-linkedin fa-3x",
      "https://www.linkedin.com/in/lisa-wen-006378133/"
    );
  }
}