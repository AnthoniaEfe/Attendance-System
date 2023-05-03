import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";

function MyComponent() {
  useEffect(() => {
    // Initialize Firebase app
    firebase.initializeApp({
      apiKey: "<your-api-key>",
      authDomain: "<your-auth-domain>",
      databaseURL: "<your-database-url>",
      projectId: "<your-project-id>",
      storageBucket: "<your-storage-bucket>",
      messagingSenderId: "<your-messaging-sender-id>",
      appId: "<your-app-id>",
      measurementId: "<your-measurement-id>",
    });

    // Set user's name
    const userId = "123";
    firebase
      .database()
      .ref("users/" + userId)
      .set({ name: "John Doe" });

    // Get user's name
    firebase
      .database()
      .ref("users/" + userId + "/name")
      .on("value", (snapshot) => {
        console.log(snapshot.val());
      });
  }, []);

  return <div>Hello World</div>;
}

export default MyComponent;
