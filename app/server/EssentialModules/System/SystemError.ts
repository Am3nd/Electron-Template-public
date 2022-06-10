import { app, BrowserWindow, ipcMain } from "electron";
import { APPPATH } from "../../exporter";

export default class SystemError {
  static errorWindow: BrowserWindow;
  private static instance: any;
  private static forceQuit: boolean;

  private constructor(errorString: string) {
    SystemError.createErrorWindow();

    ipcMain.on("close", (event, data) => {
      if (data.value) {
        SystemError.errorWindow.close();
        if (SystemError.forceQuit) {
          app.quit();
        }
      }
    });
    SystemError.errorWindow.webContents.send("errorValue", { value: errorString });
  }

  public static getInstance(errorString: string, forceQuit: boolean = false): SystemError {
    if (!SystemError.instance) {
      SystemError.instance = new SystemError(errorString);
    } else {
      if (!SystemError.errorWindow) {
        SystemError.createErrorWindow();
      }
      SystemError.forceQuit = forceQuit;

      SystemError.errorWindow.webContents.send("errorValue", { value: errorString });
    }
    return SystemError.instance;
  }

  private static createErrorWindow() {
    // Create the browser window.
    SystemError.errorWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      width: 500,
      height: 200,
      minHeight: 200,
      minWidth: 500,
      autoHideMenuBar: true,
      resizable: false,
      alwaysOnTop: true,
      frame: false,
    });

    SystemError.errorWindow.on("closed", function () {
      SystemError.errorWindow = null;
    });
    // and load the index.html of the app.
    SystemError.errorWindow.loadFile(APPPATH.ERROR_WINDOW);
  }
}
