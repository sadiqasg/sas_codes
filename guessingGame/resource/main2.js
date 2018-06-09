$(document).ready(function(){
  var howmany = 0;
  var guessed = Math.floor(Math.random()*10000)+1;
  $("#here2").text(guessed);
  $("#run").click(function(){
    howmany++;
    if($("#guess").val()==guessed){
      $("#response").text("took you : "+howmany+" times");
    }//big if statement
    else{
      
        if($("#guess").val()>guessed){
          $("#response").text("Nope. Too large")
        }//small if statement
      else{
        $("#response").text("Try a larger number");
      }//else statement
      $("#guess").val(" ");
    }//big else statement
  });//click function
  $("body").keydown(function(e){
    if ((e.keyCode || e.which) == 13)
    { 
      howmany++;
    if($("#guess").val()==guessed){
      $("#response").text("Nice! Took you : "+howmany+" tries");
    }//big if statement
    else{
        if($("#guess").val()>guessed){
          $("#response").text("Nah. Go smaller")
        }//small if statement
      else{
        $("#response").text("Too small, try bigger");
      }//else statement
      $("#guess").val(" ");
    }//big else statement
    }//if enter button
  });//key
});