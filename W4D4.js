/*
1-Write a function myFavoriteSong which takes in no arguments (input values), 
but returns an object with the properties title, artist, 
and durationInSeconds. The values of each property is up to you, 
and you can explicitly type out these values, 
but these three properties should exist within the object your function returns.

function myFavoriteSong() {

}

Calling your function should result in something like:

myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

*/
function myFavoriteSong() {
var obj={};
	obj.title="Countdown";
	obj.artist = "Beyonce";
	obj.durationInSeconds = 212;
	return obj;
}
/*
2-Write a function called nextTwoBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the one after that.

function nextTwoBusTimes(timesArr) {

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."
*/
var bus10Schedule = [12, 24, 35, 47, 60];
function nextTwoBusTimes(timesArr) {
	return "The next 2 busses arrive in " + timesArr[0] + " and " + timesArr[1] +" minutes.";
}

/*

3-Write a function called nextAndLastBusTimes that takes an array of numbers representing (in minutes) 
when the busses come for the day. 
Your function should return a string which denotes when the nearest bus arrives, and the last for the day.

function nextAndLastBusTimes(timesArr) {

}
Calling your function should result in something like:

var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes.
*/
var bus10Schedule = [12, 24, 35, 47, 60];
function nextAndLastBusTimes(timesArr) {
	var l = timesArr.length-1;
	return "The next bus is in " + timesArr[0] + ". The last bus is in  " + timesArr[l] +" minutes." 
}

