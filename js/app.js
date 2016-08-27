var $screen = $('#screen');
var $buttons = $('.buttons').on('click',function appendToScreen(event) {
var $test = $(event.target);
if($test.get(0).innerHTML === '=' || $test.get(0).innerHTML === 'C'){

}else if ($test.get(0).innerHTML === 'x') {
    $screen.append('*');
}else{
    $screen.append($test.text());
}
});
// $(".content_box a:not('.button')")
var $equals = $('#equals').click(function evaluate(event) {
// var str = $screen.text();
// var arr = str.split('=');
// $screen.get(0).innerHTML= "";
$screen.append('='+eval($screen.text()));
});

var $clear = $('#clear').click(function clear(event) {
  $screen.get(0).innerHTML= "";

})
