/**
 * Firebase **web** configuration. These values are not secrets — they identify
 * the project to the client SDK and are restricted by Firebase security rules,
 * App Check, and authorised-domain settings, not by hiding the apiKey.
 */
export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDGPxuBjBgSNp2G0NhxJ3YkwFvdTST4Psk',
    authDomain: 'trump-caligula.firebaseapp.com',
    projectId: 'trump-caligula',
    storageBucket: 'trump-caligula.firebasestorage.app',
    messagingSenderId: '424415083265',
    appId: '1:424415083265:web:e2ab9039188c8f3b773900',
    measurementId: 'G-6TCGXFRE9E',
  },
};
