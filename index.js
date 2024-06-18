const { app, BrowserWindow } = require("electron");
const { windowSize } = require("./config");

let win;

app.on("ready", function () {
  win = new BrowserWindow({
    width: windowSize.width,
    height: windowSize.height,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  win.loadURL(`file://${__dirname}/index.html`);
});
