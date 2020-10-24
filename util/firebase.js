import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
// import 'firebase/database'
// import 'firebase/storage'

var firebaseConfig = {
	apiKey: "AIzaSyAj-8XpQnwh6kOgF8f5baBgUCoVBR6aR3k",
	authDomain: "headsup-official.firebaseapp.com",
	databaseURL: "https://headsup-official.firebaseio.com",
	projectId: "headsup-official",
	storageBucket: "headsup-official.appspot.com",
	messagingSenderId: "204734724344",
	appId: "1:204734724344:web:8989aaa08429d28ef8630d",
	measurementId: "G-GC1Z26FKTB"
}

export const loadFirebase = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig)
		firebase.analytics()
	}
	return firebase
}