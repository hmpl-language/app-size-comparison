document.querySelector(
  "#app"
).innerHTML = `<div x-data="{ count: 0, l() { fetch('/a').then(r => r.text()).then(d => this.c = d)}}"><button @click="l()">Click!</button><div>Clicks: <span x-text="c"></span></div></div>`;
