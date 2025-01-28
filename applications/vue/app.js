createApp({
  setup() {
    const clicksCounter = ref(0);
    return {
      clicksCounter,
    };
  },
  template: `<div><button @click="clicksCounter++">Click!</button><div>Clicks: {{ clicksCounter }}</div></div>`,
}).mount("#app");
