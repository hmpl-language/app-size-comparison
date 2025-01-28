document
  .querySelector("#app")
  .append(
    hmpl.compile(
      `<div><button>Click!</button><div>Clicks: {{ src: "/api/clicks", after: "click:button" }}</div></div>`
    )().response
  );
