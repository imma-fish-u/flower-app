

con = {
    "apiKey": "your key",
    "authDomain": "example.firebaseapp.com",
    "databaseURL": "https://example.firebaseio.com/",
    "projectId": "example",
    "storageBucket": "example.appspot.com",
    "messagingSenderId": "id"
};

firebase.initializeApp(con);

var storage = firebase.storage();
var storageRef = storage.ref();
//urll is the url for image
storageRef.child(urll).getDownloadURL().then(function(url) {
  // Or inserted into an <img> element:
  var img = document.getElementById('myImgId');
  img.src = url;
}).catch(function(error) {
  // Handle any errors
});