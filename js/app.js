//checks for complete eval
var check= false;
//screen
var $screen = $('#screen');
//number not opperand
var $numbers = $('span').not('.operator').on('click',function appendToScreen(event) {
    if(check){  $screen.get(0).innerHTML= "";}
    var $tes = $(event.target);
    //adds a space at the end for the array split method
    $screen.val($screen.val()+$tes.text());
});
//opperand
var $opperand = $('.operator').on('click',function appendToScreen(event) {
var $test = $(event.target);
if($test.get(0).innerHTML === '=' || $test.get(0).innerHTML === 'C'){
}else{
    $screen.val($screen.val()+' '+$test.text()+' ');
}
check=false;
});
//equals
var $equals = $('#equals').click(function evaluate(event) {
  var str = $screen.val();
  var arr = str.split(' ');
  var sum = 0;
  switch (arr[1]) {
    case 'x': sum = 1;
              sum = parseInt(arr[0]) * parseInt(arr[2]);
              break;
    case '+':sum = parseInt(arr[0]) + parseInt(arr[2]);
             break;
    case '-':sum = parseInt(arr[0]) - parseInt(arr[2]);
             break;
    case '\xF7':sum = parseInt(arr[0]) / parseInt(arr[2]);
             break;
    default:

  }

$screen.val(sum);
//set evalution check to true
check = true;
sum=0;
});

var $enter = $screen.keypress(function (e) {
//  var key =  e.which;
 var key = e.keyCode || e.which;
 if(key === 13)  // the enter key code
  {
    var str = $screen.val();
    var arr = str.split(' ');
    var sum = 0;
    switch (arr[1]) {
      case 'x': sum = 1;
                sum = parseInt(arr[0]) * parseInt(arr[2]);
                break;
      case '+':sum = parseInt(arr[0]) + parseInt(arr[2]);
               break;
      case '-':sum = parseInt(arr[0]) - parseInt(arr[2]);
               break;
      case '\xF7':sum = parseInt(arr[0]) / parseInt(arr[2]);
               break;
      default:

    }

  $screen.val(sum);
  //set evalution check to true
  check = true;
  sum=0;
  }
});
//clear
var $clear = $('#clear').click(function clear(event) {
  $screen.val('');
});

var $esc = $screen.keyup(function (e) {
//  var key =  e.which;
 var key = e.keyCode || e.which;
 if(key === 27)  // the enter key code
  {
    $screen.val('');
  }
});


// var code = e.keyCode || e.which;
//  if(code == 13) { //Enter keycode
//    //Do something
//  }
// $('#txtSearchProdAssign').keypress(function (e) {
//  var key = e.which;
//  if(key == 13)  // the enter key code
//   {
//     $('input[name = butAssignProd]').click();
//     return false;
//   }
// });
