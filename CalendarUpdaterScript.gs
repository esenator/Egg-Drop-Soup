// Push new events to the calendar
function pushToCal()
{
  // Connect calendar to spreadsheet
  var calendar = CalendarApp.getCalendarById('u.rochester.edu_c9dsli7b5hjgne96dk0l3g0i98@group.calendar.google.com');
  
  // Number correspondes to column in spreadsheet. If you make changes to the spreadsheet, update these numbers
  var groupTypeNum = 0;
  var orgNameNum = 1;
  var descripNum = 2;
  var foodTypeNum = 3;
  var linkEventNum = 4;
  var startTimeNum = 5;
  var endTimeNum = 6;
  var eventNameNum = 7;
  var eventDateNum = 8;
  var eventLocationNum = 10;
  var alreadyEntered = 11;
  
  var startRow = 1; // First row of the spreadsheet with entrees;
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getSheetValues(startRow + 1, 2, sheet.getLastRow(), sheet.getLastColumn());
  
  var numValues = 0;
  for (var i = startRow; i < sheet.getLastRow(); i++)
  {
     var testVars = data[numValues]; // If you updated the spreadsheet, debug on this line for new values to use

    if( data[i][alreadyEntered]!= 'y') //Checks to see if event has already been entered into calendar
    {
      var newEventTitle = data[numValues][eventNameNum];
      var newEventDate = data[numValues][eventDateNum];

      var newEventStartDate = new Date(newEventDate);
      var newEventEndDate = new Date(newEventDate);
      var newEventStartTime = new Date(data[numValues][startTimeNum]);
      var newEventEndTime = new Date(data[numValues][endTimeNum]);
      
      newEventStartDate.setHours(newEventStartTime.getHours());
      newEventEndDate.setHours(newEventEndTime.getHours());
      newEventStartDate.setMinutes(newEventStartTime.getMinutes());
      newEventEndDate.setMinutes(newEventEndTime.getMinutes());
      newEventStartDate.setSeconds(newEventStartTime.getSeconds());
      newEventEndDate.setSeconds(newEventEndTime.getSeconds());
      
      
      var newEvent = calendar.createEvent(newEventTitle, newEventStartDate, newEventEndDate);
      newEvent.setLocation(data[numValues][eventLocationNum]);
      newEvent.setDescription(data[numValues][orgNameNum]);
      newEvent.setDescription(newEvent.getDescription() + "\n\n" + data[numValues][descripNum]);
      
      if (data[numValues][linkEventNum]!= null) // Adds link to the event description if link exists
      {
        newEvent.setDescription(newEvent.getDescription() + "\n\n" + data[numValues][linkEventNum]);
      }
      
      if (data[numValues][foodTypeNum]!= null) // Adds a list of the provided food if it is provided
      {
        newEvent.setDescription(newEvent.getDescription() + "\n\n" + "Provided Food: " + data[numValues][foodTypeNum]);
      }
      
      //data[numValues][alreadyEntered] = 'y';
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