class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    footer {
      color: #a3a1aa;
      background-color: #f0f0f0;
      border-top: 1px solid #dee2e6;
    }

    .footer-wrapper {
      margin: auto;
      max-width: 1170px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    h2 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 15px;
    }

    .social__links a {
      padding: 12px 8px;
      margin-left: -8px;
      color: #A3A1AA;
    }

    .social__links a:hover {
      opacity: 0.8;
    }

    .list__menu {
      display: flex;
      flex-direction: column;
      padding: 0 1px;
      font-size: 17px;
    }

    .list__menu a {
      text-decoration: none;
      color: #a3a1aa;
      padding: 12px 0;
      margin-top: -19px;
    }

    .list__menu a:hover {
      text-decoration: underline;
    }

    .copyright {
      text-align: center;
      padding: 20px;
      border-top: 1px solid #dee2e6;
    }

    .luwe-text {
      color: #bf1722;
      font-weight: bolder;
    }

    .rene-text {
      color: burlywood;
      font-weight: bolder;
    }

    @media screen and (max-width: 800px) {
      .footer-wrapper {
        text-align: center;
        flex-direction: column;
      }

      .footer-wrapper__nav {
        border-top: 1px solid #dee2e6;
        margin-top: 20px;
      }

      .footer-wrapper__nav h2 {
        margin-top: 20px;
      }

      .list__menu {
        flex-direction: row;
        justify-content: center;
        gap: 15px;
      }
    }
  </style>

  <div class="footer-wrapper">
    <div class="footer-wrapper__info">
      <h2 tabIndex="0">LetungResto</h2>
      <div class="social__links">
        <a href="#"><i class="fab fa-facebook fa-2x" title="Facebook"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x" title="Instagram"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x" title="Twitter"></i></a>
      </div>
    </div>
    <div class="footer-wrapper__nav">
      <h2 tabIndex="0">Menu</h2>
      <div class="list__menu">
        <a href="#/home">Home</a>
        <a href="#/favorite">Favorite</a>
        <a href="https://github.com/rifandykarunia" target="_blank">About</a>
      </div>
    </div>
  </div>
  <p tabIndex="0" class="copyright">Copyright &copy; 2022 - <span class="letung-text">Letung</span><span class="resto-text">Resto</span></p>`;
  }
}
customElements.define('footer-custom', FooterCustom);
