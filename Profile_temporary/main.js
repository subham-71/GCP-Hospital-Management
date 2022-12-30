document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2022-12-07',
      // height: '300',
      aspectRatio: 1.5,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
     
    });
  
    calendar.render();
  });