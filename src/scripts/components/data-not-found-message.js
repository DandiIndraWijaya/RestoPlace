class DataNotFoundMessage extends HTMLElement {
  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="data__not__found">
      <h3>${this._message}</h3>
      </br>
      <i class="far fa-frown-open fa-7x"></i>
    </div>
    `;
  }
}

customElements.define('data-not-found-message', DataNotFoundMessage);
