// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false ,
  firebase: {
    apiKey: "AIzaSyCKr-IVQLmMykJvWz_mMM11YNXD6HarJM4",
    authDomain: "projet-collectif.firebaseapp.com",
    databaseURL: "https://projet-collectif.firebaseio.com",
    projectId: "projet-collectif",
    storageBucket: "projet-collectif.appspot.com",
    messagingSenderId: "375435013681",
    appId: "1:375435013681:web:c08723575c6658c07caf10",
    measurementId: "G-Q1Y5KB6Q68"
  }
  };

  
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
