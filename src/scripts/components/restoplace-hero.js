/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="hero" class="hero">
            <picture>
                <source media="(max-width: 600px)" srcset="/images/heros/hero-image_2-small.jpg">
                <img 
                    src='/images/heros/hero-image_2.jpg' alt="RestoPlace Hero Image"></img>
            </picture>
            <div class="hero__text">
                <span tabindex="0">Welcome To RestoPlace</span>
            </div>
      </div>
      `;
  }
}

// render() {
//   this.innerHTML = `
//     <div id="hero" class="hero">
//       <div class="hero__image">
//           <div class="hero__paper">

//           </div>
//           <div class="hero__text">
//               <h1 tabindex="0" style="font-size:50px">Welcome To RestoPlace</h1>
//           </div>
//       </div>
//     </div>
//     `;
// }

customElements.define('restoplace-hero', Hero);
