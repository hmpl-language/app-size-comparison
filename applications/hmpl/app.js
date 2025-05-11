document
  .querySelector("#app")
  .append(
    hmpl.compile(
      `<div><button>Click!</button><div>Clicks: {{#r src="/api/clicks" after="click:button"}}{{/r}}</div></div>`
    )().response
  );
