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

var trainStartMoment = moment("20181031 12:00 am", "YYYYMMDD h:mm a");

// Returns the minutes until an interval
function minutesUntilInterval( frequency ){
  	var intervalMoment = trainStartMoment.clone( );
  	
  	while( moment( ).diff( intervalMoment ) > 0 ) {
  		intervalMoment.add( frequency, "minutes" );
    }
  	
  	return intervalMoment.diff( moment( ), "minutes" );
}


// TODO: Write code to INSERT a train record into the Firebase database when you click the Submit button

// Data:
// Train Name
// Destination
// Frequency

// TODO: SELECT all the train records in the database, and show their data on the page...

// Show the following for each train:

// Train Name
// Destination
// Frequency
// Next Arrival
// Minutes Away

// ...where Next Arrival and Minutes Away are calculated (with Moment.js) using the Frequency and the current time

// 1. Select the train records

var trains = [
  {
    trainName: "Acela Express",
    destination: "New Haven",
   	frequency: 25
  },
  { trainName: "Adirondack", 
   destination: "Montreal", 
   frequency: 3600
  },  
  { 
    trainName: "Amtrack Cascades", 
    destination: "Vancouver",
    frequency: 15
  }
];

var trainNumber = 1;

// 2. For each train...
for( var i = 0; i < trains.length; i++ ){

  // a. Calculate the Next Arrival
  var trainRow = document.createElement( "tr" );
  trainRow.id = "train-row-" + trainNumber;
  document.getElementById( "trainlist" ).append( trainRow );

  console.log( trains[i].frequency );

  var minutesUntilNextArrival = minutesUntilInterval( trains[i].frequency );
  
  var nextArrival = moment().add( minutesUntilNextArrival, "minutes" );

  // b. Show the Next Arrival time on the page

  var nextArrivalContainer = document.createElement( "td" );
  nextArrivalContainer.innerHTML = nextArrival.format( "h:mm a" );

  var trainRow = document.getElementById( "train-row-" + trainNumber );
  trainRow.append( nextArrivalContainer );

  trainNumber++;
}
/*
moment().subtract(10, 'days').calendar(); // 10/30/2018
moment().subtract(6, 'days').calendar();  // Last Saturday at 10:36 PM
moment().subtract(3, 'days').calendar();  // Last Tuesday at 10:36 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 10:36 PM
moment().calendar();                      // Today at 10:36 PM
moment().add(1, 'days').calendar();       // Tomorrow at 10:36 PM
moment().add(3, 'days').calendar();       // Monday at 10:36 PM
moment().add(10, 'days').calendar();     
*/

/*
moment().format('MMMM Do YYYY, h:mm:ss a'); // November 9th 2018, 10:33:04 pm
moment().format('dddd');                    // Friday
moment().format("MMM Do YY");               // Nov 9th 18
moment().format('YYYY [escaped] YYYY');     // 2018 escaped 2018
moment().format();                          // 2018-11-09T22:33:04+09:00
*/

// c. Calculate the Minutes Away
  
  // d. Show the Minutes Away on the page
  