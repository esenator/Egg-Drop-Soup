// Push new events to the calendar
function pushToCal()
{
  // Connect calendar to spreadsheet
  var calendar = CalendarApp.getCalendarById('u.rochester.edu_c9dsli7b5hjgne96dk0l3g0i98@group.calendar.google.com');
  
  // Number correspondes to column in spreadsheet. If you make changes to the spreadsheet, update these numbers
  var groupTypeNum = 0;
  var orgNameNum = 1;
  var descripNum = 2;
  var FoodTypeNum = 3;
  var LinkEventNum = 4;
  var startTimeNum = 5;
  var endTimeNum = 6;
  var eventNameNum = 7;
  var eventDateNum = 8;
  var alreadyEntered = 10;
  
  var startRow = 1; // First row of the spreadsheet with entrees;
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getSheetValues(startRow, 2, sheet.getLastRow(), sheet.getLastColumn());
  
  var numValues = 0;
  for (var i = startRow; i < sheet.getLastRow(); i++)
  {
    // var testVars = data[i]; // If you updated the spreadsheet, debug on this line for new values

    if( data[i][alreadyEntered]!= 'y') //Checks to see if event has already been entered into calendar
    {
      var newEventTitle = data[i][eventNameNum];
      var newEventDate = data[i][eventDateNum];

      var newEventStartDate = new Date(newEventDate);
      var newEventEndDate = new Date(newEventDate);
      var newEventStartTime = new Date(data[i][startTimeNum]);
      var newEventEndTime = new Date(data[i][endTimeNum]);
      
      newEventStartDate.setUTCHours(newEventStartTime.getUTCHours());
      newEventEndDate.setUTCHours(newEventStartTime.getUTCHours());
      newEventStartDate.setUTCHours(newEventStartTime.getUTCMinutes());
      newEventEndDate.setUTCHours(newEventStartTime.getUTCMinutes());
      newEventStartDate.setUTCHours(newEventStartTime.getUTCSeconds());
      newEventEndDate.setUTCHours(newEventStartTime.getUTCSeconds());
      
      var newEvent = calendar.createEvent(newEventTitle, newEventStartDate, newEventEndDate);
      
      data[i][alreadyEntered] = 'y';
    }
    numValues++;
  }
  
}

function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];  
  menuEntries.push({name: "Update Calendar", functionName: "pushToCal"}); 
  sheet.addMenu("Update Calendar", menuEntries);  
}