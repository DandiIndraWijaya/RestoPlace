class ErrorMessage extends HTMLElement {
  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="error">
      <div class="message">
        <span>${this._message}</span>
      </div>
      </br>
      <div class="reload">
        <a href="javascript:location.reload();"" class="redo">Reload &#8634;</a>
      </div>
    </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
