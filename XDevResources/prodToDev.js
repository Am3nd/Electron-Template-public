var fs = require("fs");

function readWriteAsync() {
  fs.readFile("extraResources/environmentFiles/.env", "utf-8", function (err, data) {
    if (err) throw err;

    if (data.includes("NODE_ENV=prod")) {
      var newValue = data.replace("NODE_ENV=prod", "NODE_ENV=dev");

      fs.writeFile("extraResources/environmentFiles/.env", newValue, "utf-8", function (err) {
        if (err) throw err;
        console.log("change to dev complete");
      });
    }
  });
}

readWriteAsync();
