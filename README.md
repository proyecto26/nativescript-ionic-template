# NativeScript Ionic Template {N} ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn3.iconfinder.com/data/icons/logos-3/228/android-32.png) ![ionic](https://cdn3.iconfinder.com/data/icons/logos-3/512/Ionic_Logo-2-64.png)
**Native mobile Apps** with [NativeScript](https://www.nativescript.org/) and **Web Apps (Mobile First)** with [Ionic](http://ionicframework.com/) styles and components sharing the same code with Angular!

![NativeScript and Ionic](img/nativescript-ionic.png)

## Introduction 👨‍💻
Using this template you can create a **Web App (Mobile First)** using **Ionic 3** components and a **Mobile Native App** using **NativeScript** with the **same code**, yay! 👏

For more details you can check the excellent NativeScript team article about **Code Sharing Between Web and Mobile with Angular and NativeScript**: https://www.nativescript.org/blog/code-sharing-between-web-and-mobile-with-angular-and-nativescript

## Run the projects ⏯

* **Ionic Web App (Using the Angular-cli)**:
```
  npm install
  ng serve
```

* **NativeScript Mobile App**:
```
  npm install (It's required to create the symlinks at the first time before to execute the app)
  cd nativescript
  npm install
  npm run livesync
  npm run ios (using other terminal)
```

## Use [Ionic icons](https://ionicframework.com/docs/ionicons/) from the Mobile App
NativeScript requires the **unicode** of the icon, you can find the unicode with the name of the icon from the content of the `src/fonts/ionicons.svg` file and later you can use it from a `<Label>` or `<Button>`, example:
```
// name: ion-ios-contact, unicode: &#xf41a;
<Button class="ion-icon" fontSize="25" text="&#xf41a;"></Button>
```

## Commands 💻
View available commands here: [Seed commands](https://github.com/TeamMaestro/angular-native-seed/wiki/Seed-Commands)

## Contributors 🥇
[<img alt="jdnichollsc" src="https://avatars3.githubusercontent.com/u/2154886?v=3&s=117" width="117">](https://github.com/jdnichollsc) | [<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---: | :---: |
[Juan Nicholls](mailto:jdnichollsc@hotmail.com) | [Sean Perkins](https://github.com/sean-perkins) |

## Credits 👍
* [Angular NativeScript Seed](https://github.com/TeamMaestro/angular-native-seed)

## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.

## Happy coding 💯
Made with ❤️

<img width="150px" src="http://phaser.azurewebsites.net/assets/nicholls.png" align="right">
