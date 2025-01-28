document.querySelector("div")[0].innerHTML = `<div>
    <button>Click!</button>
    <div>Clicks: 0</div>
</div>`;
let count = 0;
const button = document.querySelector("button");
const display = document.querySelector("div")[1];
button.addEventListener("click", () => {
  count++;
  display.textContent = `Clicks: ${count}`;
});
