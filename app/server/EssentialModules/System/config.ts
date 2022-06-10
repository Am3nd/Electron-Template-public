import { logger } from "@am3nd/kd-logger";
import { ProdLogConfigType } from "@am3nd/kd-logger/dist/types";
import { APPPATH } from "../../exporter";
const os = require("os");
import path from "path";

let deviceMac = "";
try {
  deviceMac = os.networkInterfaces()["Ethernet"][0]["mac"];
} catch (error) {
  deviceMac = process.env.HOST;
}
export const logDataConfig: ProdLogConfigType = {
  env: process.env.NODE_ENV,
  host: deviceMac,
  logFilePath: APPPATH.LOG_FILE_PATH,
  serverAddress: "",
  version: "1.0.0",
  appService: process.env.APP_SERVICE_NAME,
  useGoogleLogs: false,
};

const dataLogger = logger("dev", logDataConfig);

export default dataLogger;
