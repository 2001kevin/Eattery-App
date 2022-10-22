
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer >
        <p>Copyright &copy; 2022 - Eattery. All Rights Reserved</p>
     </footer>
        `;
  }
}

customElements.define('footer-bar', Footer);
