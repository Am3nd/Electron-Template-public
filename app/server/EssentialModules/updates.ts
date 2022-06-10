import { autoUpdater } from "electron-updater";

// autoUpdater.setFeedURL({ provider: "github", repo: "Kodex-Brain-V2", owner: "Am3nd", private: true, token: "" });

// autoUpdater.logger = log;
// log.transports.file.level = 'info';
// log.info('App starting...');
export default class kUpdater {
  // brain: Brain;
  constructor() {
    // this.brain=Brain.getInstance();
  }

  checkForUpdates() {
    autoUpdater.checkForUpdatesAndNotify();

    autoUpdater.on("checking-for-update", () => {
      // this.brain.updateStatus('Checking for update...');
    });

    autoUpdater.on("update-available", (info) => {
      // this.brain.updateStatus('Update available.');
    });

    autoUpdater.on("update-not-available", (info) => {
      // this.brain.updateStatus('Update not available.');
    });

    autoUpdater.on("error", (err) => {
      // this.brain.updateStatus('Error in auto-updater. ' + err);
    });

    autoUpdater.on("download-progress", (progressObj) => {
      let progress = {
        downloadSpeed: progressObj.bytesPerSecond + "b/s",
        downloadPercent: progressObj.percent + "%",
        downloadTransferTotal: "(" + progressObj.transferred + "/" + progressObj.total + ")",
      };

      // this.brain.updateStatus("Download",progress);
    });

    autoUpdater.on("update-downloaded", (info) => {
      // this.brain.updateStatus('Update Download Complete');
      // app.relaunch()
      // app.exit()
    });
  }
}
