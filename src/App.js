import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import { useAuth, useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDr_mMMJNASrd4r8DuVRrFeYrv_738PFh0",
  authDomain: "superchat-4f544.firebaseapp.com",
  databaseURL: "https://superchat-4f544.firebaseio.com",
  projectId: "superchat-4f544",
  storageBucket: "superchat-4f544.appspot.com",
  messagingSenderId: "1051060596746",
  appId: "1:1051060596746:web:4d48d4909d462496582ff3",
  measurementId: "G-E1JTWFG4KM"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

}

export default App;
