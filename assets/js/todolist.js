//Check off todos by clicking. We can also use toggleClass method for this operation.

$("ul").on("click","li", function(){

  if($(this).css("color")==="rgb(128, 128, 128)"){
    $(this).css({
      color:"black",
      textDecoration:"none",
    });
  }
  else{
    $(this).css({
      color:"grey",
      textDecoration:"line-through"
    });
  }
});

//Delete todos by Clicking X.

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});


//Create a new todo using input button.

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    //grabbing todo from input
    var text = $(this).val();
    //create a new li
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");
    $(this).val("")
  }
});


//toggle the form

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});
