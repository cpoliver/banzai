console.log("Hello, World!");

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("[HMR] Module disposed."));
}
