
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Find Your Best <br> Food Here</h1>
          <p class="hero-desc">
            we want to help you to find the food you <br> never meet before
          </p>
        </div>
      </div>
        `;
  }
}

customElements.define('hero-bar', Hero);
