[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/100px-Electron_Software_Framework_Logo.svg.png)](https://www.electronjs.org/)

## Electron Template with Auto Update and Firebase setup

A current electron app template with the most popular frameworks, designed and built with firebase and sqlite3. please take a look at the scripts in the package.json and you will find how to publish, distribute your app. For mac os you will need to run the publish script on Mac OS device 

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
