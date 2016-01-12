function toggleDay(id){
var Day = document.getElementById('DayTab');
var Week = document.getElementById('WeekTab');
var Month = document.getElementById('MonthTab');
var Year = document.getElementById('YearTab');
var DayLink = document.getElementById('DayLink');
var WeekLink = document.getElementById('WeekLink');
var MonthLink = document.getElementById('MonthLink');
var YearLink = document.getElementById('YearLink');
DayLink.style.fontWeight = "bold";
WeekLink.style.fontWeight = "";
MonthLink.style.fontWeight = "";
YearLink.style.fontWeight = "";
Day.style.display = "block";
Week.style.display = "none";
Month.style.display = "none";
Year.style.display = "none";
}
function toggleWeek(id){
var Day = document.getElementById('DayTab');
var Week = document.getElementById('WeekTab');
var Month = document.getElementById('MonthTab');
var Year = document.getElementById('YearTab');
var DayLink = document.getElementById('DayLink');
var WeekLink = document.getElementById('WeekLink');
var MonthLink = document.getElementById('MonthLink');
var YearLink = document.getElementById('YearLink');
DayLink.style.fontWeight = "";
WeekLink.style.fontWeight = "bold";
MonthLink.style.fontWeight = "";
YearLink.style.fontWeight = "";
Day.style.display = "none";
Week.style.display = "block";
Month.style.display = "none";
Year.style.display = "none";
}
function toggleMonth(id){
var Day = document.getElementById('DayTab');
var Week = document.getElementById('WeekTab');
var Month = document.getElementById('MonthTab');
var Year = document.getElementById('YearTab');
var DayLink = document.getElementById('DayLink');
var WeekLink = document.getElementById('WeekLink');
var MonthLink = document.getElementById('MonthLink');
var YearLink = document.getElementById('YearLink');
DayLink.style.fontWeight = "";
WeekLink.style.fontWeight = "";
MonthLink.style.fontWeight = "bold";
YearLink.style.fontWeight = "";
Day.style.display = "none";
Week.style.display = "none";
Month.style.display = "block";
Year.style.display = "none";
}
function toggleYear(id){
var Day = document.getElementById('DayTab');
var Week = document.getElementById('WeekTab');
var Month = document.getElementById('MonthTab');
var Year = document.getElementById('YearTab');
var DayLink = document.getElementById('DayLink');
var WeekLink = document.getElementById('WeekLink');
var MonthLink = document.getElementById('MonthLink');
var YearLink = document.getElementById('YearLink');
DayLink.style.fontWeight = "";
WeekLink.style.fontWeight = "";
MonthLink.style.fontWeight = "";
YearLink.style.fontWeight = "bold";
Day.style.display = "none";
Week.style.display = "none";
Month.style.display = "none";
Year.style.display = "block";
}