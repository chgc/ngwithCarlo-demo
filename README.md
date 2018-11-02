# Some Information

This is an experimental for Carlo with Angular project.

This repo can use pkg to build this project to a single executable file. (You need install pkg as global to make this command to work)

# Carlo

> Carlo provides Node applications with the rich rendering capabilities powered by the Google Chrome browser. It uses Puppeteer project to communicate with the locally installed browser instance, provides remote call infrastructure for communication between Node and the browser.

https://github.com/GoogleChromeLabs/carlo

# pkg

> Package your Node.js project into an executable

https://github.com/zeit/pkg

In package.json file.

```json
"bin": {
    "ngcarlodemo-app": "./dist/ngWithCarlo/server.js"
  },
  "pkg": {
    "scripts": "dist/ngWithCarlo/**/*.js",
    "assets": "dist/ngWithCarlo/**/*"
  },
```

## targets
when run `pkg package.json`, it can add `--targets` to specific target platform. More information can be found in pkg repo.
