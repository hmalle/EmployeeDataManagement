 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwk9IcqtsR3WykpQRc61wPLuXMaysN3CU",
    authDomain: "employee-data-management-17163.firebaseapp.com",
    databaseURL: "https://employee-data-management-17163.firebaseio.com",
    projectId: "employee-data-management-17163",
    storageBucket: "employee-data-management-17163.appspot.com",
    messagingSenderId: "388241225571"
  };
  firebase.initializeApp(config);


var database = firebase.database();

// Initial Values


// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {






}
