let myDate = new Date()
// console.log(myDate);//2024-08-15T15:39:48.161Z

// console.log(myDate.toString());//Thu Aug 15 2024 21:10:32 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Thu Aug 15 2024
// console.log(myDate.toTimeString());//21:11:58 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());// 8/15/2024
// console.log(myDate.toISOString());//  2024-08-15T15:41:58.131Z
// console.log(myDate.toLocaleString());//8/15/2024, 9:13:56 PM
// console.log(typeof myDate); // Object 


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString());//    1/23/2023, 12:00:00 AM

// let myDateFormat = new Date("2023-01-14");//YYYY-MM-DD
let myDateFormat1 = new Date("01-14-2023");// DD-MM-YYYY
// console.log(myCreatedDate.getTime());//1674412200000
console.log(Math.floor(Date.now()/1000));



// console.log(myDateFormat.toLocaleString());//   1/14/2023, 5:30:00 AM
// console.log(myDateFormat1.toLocaleString());//    1/14/2023, 12:00:00 AM



// Timestamp 

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);// 1723737359317














