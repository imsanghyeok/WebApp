function colorEm(){
  var $div = $("div");
  var start = Math.floor(Math.random() * $div.length);
  var end = Math.floor(Math.random() * ($div.length - start)) + start + 1;

  if(end === $div.length){
    end = undefined;
  }
  $div.css("background","");
  if ( end ){
    $div.slice(start,end).css("background","yellow");
  } else {
    $div.slice(start).css("background","yellow");
  }
  $("span").text("$('div').slice(" + start +(end ? ","+ end : "" ) + ").css('background','yellow');");
}
$("button").click(colorEm);
