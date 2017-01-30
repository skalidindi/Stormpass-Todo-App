import { AngularFireModule, AuthMethods } from 'angularfire2';
import { firebaseConfig } from '../firebase-config';

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
