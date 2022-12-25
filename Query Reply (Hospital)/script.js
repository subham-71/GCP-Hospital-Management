$(document).ready(function() {
    $('#query_table').DataTable({
      
        pageLength: 8,
        pagingType: 'simple_numbers'
    });
  });
  
 

  
  
  $(document).ready(function() {
    // Select all radio buttons in the table
    var radioButtons = $("table tbody input[type='radio']");
  
    // When a radio button is clicked
    radioButtons.click(function() {
      // Get the row that contains the radio button
      var row = $(this).closest("tr");
  
      // If the radio button is checked
      if ($(this).prop("checked")) {
        // Clone the row and append it to the details table
        row.clone().appendTo("#details tbody");
        // Remove the row from the query_table
        row.remove();
      } else {
        // Find the row with the same data in the details table
        var detailsRow = $("#details tbody tr").filter(function() {
          return $(this).find("td:eq(0)").text() === row.find("td:eq(0)").text() &&
                 $(this).find("td:eq(1)").text() === row.find("td:eq(1)").text() &&
                 $(this).find("td:eq(2)").text() === row.find("td:eq(2)").text() &&
                 $(this).find("td:eq(3)").text() === row.find("td:eq(3)").text() &&
                 $(this).find("td:eq(4)").text() === row.find("td:eq(4)").text(); 
        });
        // Clone the row and append it to the query_table
        detailsRow.clone().appendTo("#query_table tbody");
        // Remove the row from the details table
        detailsRow.remove();
      }
    });
  });

  document.querySelector('.item3 button').addEventListener('click', function() {
    alert('email has been sent to the hospital');
  });
 