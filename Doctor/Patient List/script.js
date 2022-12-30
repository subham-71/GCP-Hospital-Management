$(document).ready(function() {
    $('table').on('click', '.btn-danger', function() {
      
      var row = $(this).closest('tr');
  
    
      row.remove();
    });
  });
  
$(document).ready(function() {
  $('#add').click(function() {
    $('#registration-form').show();
  });

  $('#cancel').click(function() {
    $('#registration-form').hide();
  });
});