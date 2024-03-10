//task 1
"use strict";

//double click counter
var dblClickCnt=0;

//function to display current time(HH:MM:SS format)
function displayTime(){
    //get current hour
    var currentDate=new Date();
    var currentHours=currentDate.getHours();
    var currentMins=currentDate.getMinutes();
    var currentSecs=currentDate.getSeconds();

    //adding 0 at the beggining if the H/M/S contain only one digit
    currentHours=addZero(currentHours);
    currentMins=addZero(currentMins);
    currentSecs=addZero(currentSecs);
    //compose HH:MM:SS string
     var currentTime="The time is "+currentHours+":"+currentMins+":"+currentSecs;
     //display time in resultDiv


     document.getElementById("resultDiv").innerHTML=currentTime;
}

//function for adding zero at the beggining of a single digit number
function addZero(value)
{
    if (value<=9)
    {
        return "0"+value;
    }
    return value;
}

function displayDow()
{
    var currentDate=new Date();

    var dayOfWeek=currentDate.getDay();
    var strDow;

    switch(dayOfWeek)
    {
        case 0:
            strDow="Sunday";
            break;
        case 1:
            strDow="Monday";
            break;

        case 2:
            strDow="Tuesday";
            break;
        case 3:
            strDow="Wednesday";
            break;
        case 4:
            strDow="Thursday";
            break;
        case 5:
            strDow="Friday";
            break;
        case 6:
            strDow="Saturday";
            break;

        default:
            strDow=Invalid;
            break;


    }
    document.getElementById("resultDiv").innerHTML = "Today is " + strDoW;
}

function countDblClick()
{
    dblClickCnt++;
    document.getElementById("resultDiv").innerHTML = "I have been double-clicked " + dblClickCnt + " times";
}

function calcSum()
{
    let sumTo = document.getElementById("sumNum").value;
     let mySum = 0;
     for (let i = 1; i <= sumTo; i++) { mySum += i; }

     document.getElementById("resultDiv").innerHTML = "The sum is " + mySum;
}

