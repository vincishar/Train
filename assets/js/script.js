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

var database = firebase.database(); 
console.log(database);

$("#btn btn-primary").click(function(event) {
  event.preventDefault(event);
  return false
  console.log('the button is working');
    var trainName = $("#emailHelp").val().trim();  
    var destionation = $("#destiation").val().trim();   
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency").val().trim();

// Creates local "temporary" object for holding employee data
var trainName = {
  name: trainName,
  destination: destionation,
  firstTime: firstTrainTime,
  frequency: frequency
}; 

database.ref().push(trainName);

// Logs everything to console
console.log(trainName.name);
console.log(destionation.destiation);
console.log(firstTrainTime.firstTime);
console.log(frequency.frequency);

alert("Train time successfully added");

// Clears all of the text-boxes
$("#email-Help-input").val("");
$("#destination-input").val("");
$("#first-time-input").val("");
$("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());

// Store everything into a variable.
var trainName = childSnapshot.val().name;
var destiation = childSnapshot.val().role;
var firstTrainTime = childSnapshot.val().start;
var frequency = childSnapshot.val().rate;

// Train Info
console.log(trainName);
console.log(destiation);
console.log(firstTrainTime);
console.log(frequency);



// Calculate the months worked using hardcore math
// To calculate the months worked
var trainName = moment().diff(moment(firstTrainTime, "X"), "hours");
console.log(trainName);



// Create the new row
var newRow = $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(destiation),
  $("<td>").text(firstTrainTime),
  $("<td>").text(frequency)
);

$("#form-group > tbody").append(newRow);
});

// // Assumptions
// var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

var firstTimeConverted = moment(firstTime, "HH:mm");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(firstTimeConverted, "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// // Time apart (remainder)
// var tRemainder = diffTime % tFrequency;
// console.log(tRemainder);

// // Minute Until Train
// var tMinutesTillTrain = tFrequency - tRemainder;
// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// // Next Train
// var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
