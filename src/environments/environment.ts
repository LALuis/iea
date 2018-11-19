// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDR5yzGXzNaxdjn34S8fHiDxmgrxF3Oz9k',
    authDomain: 'informaticos-en-accion.firebaseapp.com',
    databaseURL: 'https://informaticos-en-accion.firebaseio.com',
    projectId: 'informaticos-en-accion',
    storageBucket: 'informaticos-en-accion.appspot.com',
    messagingSenderId: '515804351451'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
