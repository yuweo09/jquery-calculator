//screen
var $screen = $('#screen');
//number not opperand
var $numbers = $('span').not('.operator').on('click',function appendToScreen(event) {
    var $tes = $(event.target);
    $screen.append($tes.text());
});
//opperand
var $opperand = $('.operator').on('click',function appendToScreen(event) {
var $test = $(event.target);
if($test.get(0).innerHTML === '=' || $test.get(0).innerHTML === 'C'){

}else if ($test.get(0).innerHTML === 'x') {
    $screen.append('*');
}else{
    $screen.append($test.text());
}
});
//equals
var $equals = $('#equals').click(function evaluate(event) {
$screen.append('='+eval($screen.text()));
});
//clear
var $clear = $('#clear').click(function clear(event) {
  $screen.get(0).innerHTML= "";
})
