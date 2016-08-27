//checks for complete eval
var check= false;
//screen
var $screen = $('#screen');
//number not opperand
var $numbers = $('span').not('.operator').on('click',function appendToScreen(event) {
    if(check){  $screen.get(0).innerHTML= "";}
    var $tes = $(event.target);
    //adds a space at the end for the array split method
    $screen.append($tes.text()+' ');
});
//opperand
var $opperand = $('.operator').on('click',function appendToScreen(event) {
var $test = $(event.target);
if($test.get(0).innerHTML === '=' || $test.get(0).innerHTML === 'C'){
}else{
    $screen.append($test.text()+' ');
}
check=false;
});
//equals
var $equals = $('#equals').click(function evaluate(event) {
  var str = $screen.text();
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
$screen.append('= '+sum+' ');
check = true;
sum=0;
});
//clear
var $clear = $('#clear').click(function clear(event) {
  $screen.get(0).innerHTML= "";
})
