// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(year){
    if(i=4){
       var leapYearCheck = year % i;
        return true;
    }
    else{
        return false;
}
}
 var newLeapYear = leapYear(2023);
//  console.log(newLeapYear);

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function ageChecker (number){
    if(number % 2 ===0){
         return true;
     }
     else {
         return false;
 }
}
var myAge = ageChecker(29);
//  console.log(newLeapYear);

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function convertHourToMin (hour){
    var convertion = hour * 60;
    return convertion;
}
var getMinute = convertHourToMin(5);
// console.log(getMinute);

///////////////////// 4.inche to feet/////////////////////

function inchToFeet(inche){
    var convertion = inche/12;
    return convertion;
}
var getfeet = inchToFeet(70);
// console.log(getfeet);

///////////////////// 5.miles to kilometer////////////////////

function milrToKilo(mile){
    var convertion = mile*1.609344;
    return convertion;
}
var getkilo = milrToKilo(890);
// console.log(getkilo);

//////////////////////// 6.check odd number///////////////////////

function findOdd(numbers)
{
    const oddNumbers=[];

   for(let i = 0; i < numbers.length; i++)
   {   
        const index=i;
        const element=numbers[index];

         if(element %2 !== 0)
            {
                // console.log(index,element);
                oddNumbers.push(element);
            }
   }
   return oddNumbers;
}

var numbers=[11,12,13,14,15,16,17,18,19,20];
const oddNumbers=findOdd(numbers);
// console.log(oddNumbers);
// findOdd(numbers);


// 7.check even number


function findEven(numbers)
{
    const evenNumbers=[];

   for(let i = 0; i < numbers.length; i++)
   {   
        const index=i;
        const element=numbers[index];

         if(element %2 == 0)
            {
                // console.log(index,element);
                evenNumbers.push(element);
            }
   }
   return evenNumbers;
}

var numbers=[11,12,13,14,15,16,17,18,19,20];
// const evenNumbers=findEven(numbers);
// console.log(evenNumbers);
// findEven(numbers);


// 8.calculate sum of all numbers of an array

var numbers=[11,12,13,14,15,16,17,18,19,20];

function sumOfAnArray(numbers)
{
    let sum = 0;

   for(let i = 0; i < numbers.length; i++)
        {   
            const index=i;
            const element=numbers[index];
              sum =sum+element;
                   console.log(sum);
        }
   return sum;
}

let totalSum=sumOfAnArray(numbers);
      console.log(totalSum);

      






