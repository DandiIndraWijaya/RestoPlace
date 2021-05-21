const hero = document.getElementById('hero');

const Hero = {
  init() {
    hero.innerHTML = `
    <div class="hero__image">
        <div class="hero__paper">
            
        </div>
        <div class="hero__text">
            <h1 tabindex="0" style="font-size:50px">Welcome To RestoPlace</h1>
        </div>
    </div>`;
  },

  remove() {
    hero.innerHTML = '';
  },
};

export default Hero;
