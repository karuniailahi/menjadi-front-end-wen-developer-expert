class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton" aria-label="navigation-menu">☰</button>
        </div>
        <div class="app-bar__brand">
          <a href="/">
          <h1>LetungResto</h1>
          </a>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="#/favorite"><i class="fas fa-heart"></i> Favorite</a></li>
            <li><a href="https://github.com/rifandykarunia" target="_blank"><i class="fas fa-user"></i> About</a></li>
            <li ><button tabindex="0" aria-label="button for toggle light or dark mode" type="button" id="dark-mode" class="light">
              <i class="fas fa-moon"> </i> </button> </li>
          </ul>
        </nav>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
