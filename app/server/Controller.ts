//

import { ipcMain } from "electron";
import { SystemAuth, APPPATH, logger } from "./exporter";
export default class Controller {
  private static instance: Controller;
  private systemAuth: SystemAuth;

  private constructor() {
    this.systemAuth = SystemAuth.getInstance(APPPATH);
  }

  public static getInstance(): Controller {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }

  public startListeners() {
    logger.info("Starting all listeners");

    ipcMain.on("userLogin", function (event, { email, password }) {
      console.log("received login request from clientside");
      Controller.instance.systemAuth.login(email, password);
    });

    ipcMain.on("userSignup", function (event, { email, password }) {
      console.log("received signup request from clientside");
      Controller.instance.systemAuth.signup({ email, password, fname: "Abdi", lname: "Ahmed" });
    });
  }
}
