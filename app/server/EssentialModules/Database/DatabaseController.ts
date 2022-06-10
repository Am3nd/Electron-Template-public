// import { validate } from "uuid"
import * as sqlite3 from "sqlite3";
// import { logger } from "../../exporter";

export default class DatabaseController {
  private dbConn: any;
  private static instance: DatabaseController;

  private constructor(dbFilePath: string) {
    //// Database initialization
    this.dbConn = new sqlite3.Database(dbFilePath, (err: any) => {
      if (err) {
        return console.error(err.message);
      }
    });
  }

  public static getInstance(dbFilePath: string): DatabaseController {
    if (!DatabaseController.instance) {
      DatabaseController.instance = new DatabaseController(dbFilePath);
    }
    return DatabaseController.instance;
  }

  public runQueryWithData(query: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const formattedData: any = [];

      Object.keys(data)
        .sort()
        .forEach(function (v, i) {
          formattedData.push(data[v]);
        });

      this.dbConn.run(query, formattedData, function (err: any) {
        if (err) {
          // logger.error("Data: " + JSON.stringify(data), err, { meta: { service: "DatabaseController-SQL", function: "runQueryWithData: " + query } });
          reject(err);
        } else {
          resolve("success");
        }
      });
    });
  }

  public runQueryWithMultipleData(query: string, data: any[]) {
    return new Promise((resolve, reject) => {
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        const formattedData: any = [];
        Object.keys(data[i])
          .sort()
          .forEach(function (v, ji) {
            formattedData.push(data[i][v]);
          });
        this.dbConn.all(query, formattedData, (err: any, rows: []) => {
          if (err) {
            // logger.error("Data: " + JSON.stringify(data), err, { service: "DatabaseController-SQL", function: "runQueryWithData: " + query });

            if (err.errno == 19) {
              reject("alreadyExists" + err);
            }
            reject(err);
          } else {
            resolve("success");
          }
        });
      }
    });
  }
  public runQuery(query: string) {
    return new Promise((resolve, reject) => {
      let data: [] = [];

      this.dbConn.all(query, [], (err: any, rows: []) => {
        // process rows here

        if (err) {
          // logger.error("Data: n/a", err, { service: "DatabaseController-SQL", function: "runQueryWithData: " + query });
          reject(err);
        } else {
          if (rows != undefined) {
            rows.forEach((row) => {
              data.push(row);
            });
          }
        }

        resolve(data);
      });
    });
  }
}
