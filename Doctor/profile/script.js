$(document).ready(function() {
    $('table').on('click', '.btn-danger', function() {
      // Get the row element that contains the button
      var row = $(this).closest('tr');
  
      // Remove the row from the table
      row.remove();
    });
  });
  

//   $("body").on("click", ".btn-edit", function(){  
//     var name = $(this).parents("tr").attr('data-name');  
//     var email = $(this).parents("tr").attr('data-email');  
  
//     $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');  
//     $(this).parents("tr").find("td:eq(1)").html('<input name="edit_email" value="'+email+'">');  
  
//     $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")  
//     $(this).hide();  
// });  
 
// $("body").on("click", ".btn-cancel", function(){  
//     var name = $(this).parents("tr").attr('data-name');  
//     var email = $(this).parents("tr").attr('data-email');  
  
//     $(this).parents("tr").find("td:eq(0)").text(name);  
//     $(this).parents("tr").find("td:eq(1)").text(email);  
 
//     $(this).parents("tr").find(".btn-edit").show();  
//     $(this).parents("tr").find(".btn-update").remove();  
//     $(this).parents("tr").find(".btn-cancel").remove();  
// });  
 
// $("body").on("click", ".btn-update", function(){  
//     var name = $(this).parents("tr").find("input[name='edit_name']").val();  
//     var email = $(this).parents("tr").find("input[name='edit_email']").val();  
  
//     $(this).parents("tr").find("td:eq(0)").text(name);  
//     $(this).parents("tr").find("td:eq(1)").text(email);  
   
//     $(this).parents("tr").attr('data-name', name);  
//     $(this).parents("tr").attr('data-email', email);  
  
//     $(this).parents("tr").find(".btn-edit").show();  
//     $(this).parents("tr").find(".btn-cancel").remove();  
//     $(this).parents("tr").find(".btn-update").remove();  
// });  
  
$(document).ready(function() {
  $('#add').click(function() {
    $('#registration-form').show();
  });

  $('#cancel').click(function() {
    $('#registration-form').hide();
  });
});