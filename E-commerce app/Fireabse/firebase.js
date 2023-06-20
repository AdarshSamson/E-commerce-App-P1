import { firebase } from "@react-native-firebase/auth"
import auth from "@react-native-firebase/auth"

const firebaseConfig={
   
    apiKey:"AIzaSyDnX9pzuVpmb5mm5BiRYfc5c86Rft8r3ns",
    authDomain: "702190425538-qmq2t94k2ma86e88pm88en60tk6ivfon.apps.googleusercontent.com",
    databaseURL: "",
    projectId:  "fir-cloud-ee197",
    storageBucket:"fir-cloud-ee197.appspot.com",
    messagingSenderId: "",
    appId:'1:702190425538:android:141e21492d62ba9a71b25b'
}
if(!firebase.apps.length){


firebase.initializeApp(firebaseConfig)}
export{firebase}