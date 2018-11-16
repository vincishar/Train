 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBzerOGZSqY0g_K3rz_UGdNJokCNKjJXf8",
  authDomain: "captain-vin.firebaseapp.com",
  databaseURL: "https://captain-vin.firebaseio.com",
  projectId: "captain-vin",
  storageBucket: "captain-vin.appspot.com",
  messagingSenderId: "334060278662"
};
firebase.initializeApp(config);
var database = firebase.database()
function Train(name, time, destination, frequency) {
      this.name = name;
      this.time = time;
      this.destination = destination;
      this.frequency = frequency;
	}
$(".btn btn-primary").on("click", function(event)    {
  event.preventDefault();
})

var name = $(".name-input").val(); 
var destination = $(".destination-input").val(); 
var time = $(".time").val(); 
var frequency = $(".frequency-input").val();
 
var newTrain = {
     name: name, 
     destination: destination, 
     time: time, 
     frequency: frequency
};


var form = document.getElementById("train-form");

function handleForm(event) {
  // prevent page reload
  event.preventDefault();
    var name = document.getElementById('name').value;
    var destination = document.getElementById('destination').value;
    var frequency = document.getElementById('frequency').value;
    var time = document.getElementById('time').value;

  	var trainDatabase = firebase.database().ref("/trains");
  
  	var newTrain = new Train(name,destination, frequency, time);
  	console.log(newTrain);

 
    trainDatabase.push(newTrain);     
    
    console.log(newTrain.name); 
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

  
    alert("Success"); 
    
    }

form.addEventListener('submit', handleForm);

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val()); 

var name = childSnapshot.val().name; 
var destination = childSnapshot.val().destination; 
var frequency = childSnapshot.val().frequency; 
var time = childSnapshot.val().time;    

console.log(name); 
console.log(destination); 
console.log(time); 
console.log(frequency);

var newRow = $("<tr>").append(
  $("<td>").text(name),
  $("<td>").text(destination),
  $("<td>").text(frequency),
  $("<td>").text(time)
);

var addToTrainList = function(train){
  var trainList = $("#trainlist");
  trainList.append(`
      <tr>
      <th scope="row">${train.name}</th>
      <td>${train.destination}</td>
      <td>${train.frequency}</td>
      <td>${train.time}</td>  
    </tr>
  `)

}
var trainDatabase = firebase.database().ref("/trains");
trainDatabase.on("value", function(snapshot){
  var trainList = $("#trainlist");
  trainList.html("")
  snapshot.forEach(function(train){
      addToTrainList(train.val())

  })

})



// Append the new row to the table
$(".table > tbody").append(newRow);
});






































