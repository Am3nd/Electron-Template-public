import { app } from "electron";
import path from "path";

/*  Here we store all the paths to major files in order
    to support any changes down the path
*/

const DEV_PATHS: pathsType = {
  DB_PATH: path.join(app.getAppPath(), "..", "..", "..", "..", "extraResources", "databaseFiles", "main.db"),
  // CLIENT_INDEX: path.join(app.getAppPath(), "..", "..", "app", "client", "HTML", "index.html"), when using the output directory
  CLIENT_INDEX: path.join(app.getAppPath(), "..", "..", "..", "app", "client", "HTML", "index.html"),
  CLIENT_LOGIN: path.join(app.getAppPath(), "..", "..", "app", "client", "HTML", "login.html"),
  ERROR_WINDOW: path.join(app.getAppPath(), "..", "..", "app", "client", "EssentialPackages", "errorPage.html"),
  LOG_FILE_PATH: "./logs/System.log",
};

const PROD_PATHS: pathsType = {
  DB_PATH: path.join(app.getAppPath(), "..", "..", "extraResources", "main.db"),
  ERROR_WINDOW: path.join(app.getAppPath(), "app", "client", "EssentialPackages", "errorPage.html"),
  CLIENT_INDEX: path.join(app.getAppPath(), "app", "client", "HTML", "index.html"),
  CLIENT_LOGIN: path.join(app.getAppPath(), "app", "client", "HTML", "login.html"),
  LOG_FILE_PATH: "./logs/System.log",
};

export type pathsType = {
  DB_PATH: string;
  ERROR_WINDOW: string;
  CLIENT_INDEX: string;
  CLIENT_LOGIN: string;
  LOG_FILE_PATH: string;
};

export const appPaths = (): pathsType => {
  if (process.env.NODE_ENV == "dev") {
    console.log("the environment is dev, actual:", process.env.NODE_ENV, process.env.NODE_ENV == "dev");
    return DEV_PATHS;
  } else {
    console.log("the environment is prod, actual:", process.env.NODE_ENV, process.env.NODE_ENV == "dev");
    return PROD_PATHS;
  }
};
