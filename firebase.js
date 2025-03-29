

const firebaseConfig = {
  apiKey: "AIzaSyB1_KiNgG-61JqhtkxvJMYA-Uj6NmUag3U",
  authDomain: "codenseek-f47ef.firebaseapp.com",
  databaseURL: "https://codenseek-f47ef-default-rtdb.firebaseio.com",
  projectId: "codenseek-f47ef",
  storageBucket: "codenseek-f47ef.firebasestorage.app",
  messagingSenderId: "576347037436",
  appId: "1:576347037436:web:f68361f578ac571e184179"
};

 
        firebase.initializeApp(firebaseConfig);
 
        let teamRef = firebase.database()
            .ref('Teams');
 
        // Save message to firebase
        function sameTiming(name, time) {
            let newTeamRef = teamRef.push();
            newTeamRef.set({
                team: name,
                time: time,
            });
        }
