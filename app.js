/*
The function should accept a day as an argument and return the number of hours you slept that night.
For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
Use an if/else or switch statement to implement this.
 if (day === 'Monday') {
 return 8;
 }
 else if (day === 'Tuesday') {
 return 7;
 } .....
  else {
   console.log('Please type a day of the week.') 
  }
OR Switch 
 switch (day){
   case 'Monday':
   return 8
   break;
   case 'Tuesday':
   return 7
   break;
   case 'Wednesday':
   return 6
   break;
   ......
     default:
   return "Error!"
  
  }

*/
const getSleepHours = day => {
    switch (day){
     case 'Monday':
     return 8
     break;
     case 'Tuesday':
     return 7
     break;
     case 'Wednesday':
     return 6
     break;
     case 'Thursday':
     return 10
     break;
     case 'Friday':
     return 7
     break;
     case 'Saturday':
     return 6
     break;
     case 'Sunday':
     return 7
     break;

     default:
     return "Error!"
      }
   getSleepHours('Tuesday');
};

const getActualSleepHours = () => 
    getSleepHours('Monday') + 
    getSleepHours('Tuesday') + 
    getSleepHours('Wednesday') +
     getSleepHours('Thursday') +
     getSleepHours('Friday')  + 
     getSleepHours('Saturday') +
      getSleepHours('Sunday');
  
      console.log(getSleepHours('Monday'));
      console.log(getActualSleepHours());

 const getIdealSleepHours = () => {
   let idealHours = 8;
  return idealHours * 7;
 };

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
 
 if (actualSleepHours === idealSleepHours) {
  console.log("You've got the perfect amount of sleep. Well done!");
}
else if (actualSleepHours > idealSleepHours) {
  console.log("You have " + (idealSleepHours - actualSleepHours) + "more hours of sleep this week.");
}
else if (actualSleepHours < idealSleepHours) {
  console.log("Your hours of sleep are low, you should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
}
else {
  console.log('Error! Something went wrong, you should check your code!');
}
};

  calculateSleepDebt();

