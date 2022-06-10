import path from "path";
import { app, BrowserWindow, ipcMain } from "electron";
require("dotenv").config();

// import * as fs from "fs-extra";
import { APPPATH, DatabaseController, logger, SystemError, Controller } from "./exporter";
import { QUERY } from "./EssentialModules/Database/queries";
import { v4 as uuid } from "uuid";

let mainWindow: BrowserWindow;

///Setup Paths
const gotTheLock = app.requestSingleInstanceLock();
if (process.defaultApp) {
  logger.info("Setting current service as default protocol client.");

  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient(process.env.APP_NAME ?? "notDefined", process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient(process.env.APP_NAME ?? "notDefined");
}

if (!gotTheLock) {
  logger.warn("Multiple program windows. Shutting down extra.");
  app.quit();
} else {
  app.on("second-instance", (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    logger.info("User requested multiple windows of the same application");

    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  // Create mainWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    try {
      createWindow(APPPATH.CLIENT_INDEX);
      const controller = Controller.getInstance();
      controller.startListeners();
      logger.info("Application has been started.");
    } catch (error) {
      logger.error(error, { meta: "FATAL_ERROR: UNCAUGHT" });
    }
  });
}

app.on("window-all-closed", () => {
  logger.info("All windows have been closed.");

  try {
    if (process.platform !== "darwin") {
      logger.info("Application will now quit");
      logger.end(app.quit());
    } else {
      logger.info("Application will now quit");
      logger.end(app.quit());
    }
  } catch (error) {
    console.log("error when quiting", error);
    app.quit();
  } finally {
    console.log("finally quiting");
    app.quit();
  }
});

app.on("open-url", (event, url) => {
  //when deeplink is called
  logger.debug("Application received this deeplink url: " + url, { service: "DeepLink", data: event });
  mainWindow.webContents.send("status", { status: "deeplink" });
});

function createWindow(path: string) {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    },
    width: 1400,
    height: 600,
    minHeight: 300,
    minWidth: 300,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path);

  // Open the DevTools.

  if (process.env.NODE_ENV === "dev") {
    mainWindow.webContents.openDevTools();
  }
  logger.info("New Window Created");
}
