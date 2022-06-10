Need to change the following in the package.json
Will also need to update the extraresources/environmentFiles/.env file as well


  "name": "electron-template-with-packages",
  "description": "Electron Template with Update and Distribution",
  "repository": {
    "type": "git",
    "url": "https://github.com/Am3nd/Electron-Template-with-Update-and-Distribution.git"
  },
  "homepage": "https://github.com/Am3nd/Electron-Template-with-Update-and-Distribution#readme",

  "productName": "Electron-Template",
    "appId": "templateID",
    "protocols": {
      "name": "electron-deep-linking",
      "schemes": [
        "appName"
      ]
    },