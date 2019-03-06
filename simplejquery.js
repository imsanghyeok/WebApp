function colorEm(){
    var $div = $("div");
    var start = Math.floor(Math.random()*$div.length);
    var end = Math.floor(Math.random()*($div.length-start)) + start + 1;

    if (end === $div.length){end = undefined;}
    $div.css("background", "");
    if (end){
        $div.slice(start, end).css("background", "yellow");
    }else {
        $div.slice(start).css("background","yellow");
    }
    $("span").text("$('div').slice(" + start +
        (end ? ", " + end : "") + ").css('background',  'yellow');");
}

$("button").click(colorEm);



$(document).ready(function(){

    $("td").css("background-color",function(index,value){
        if(value=="rbg(255,255,0)") {return "red";}
    });

    //$("td").css("background", "blue");

    // $("li").each(function(){
    //     $(this).click(function(){
    //         $(this).addClass("selected");
    //         $(this).siblings().removeClass("selected");
    //     });
    // });

    //$("div").find("p").css("border", "1px solid red");

    //$("div").filter(".my").css("border", "1px solid red");

    // $("div").filter("p").css("border", "1px solid red");

        // $("ul").find("li").contents().remove("ul");

    // $("li").add("div>p").css("border", "1px solid red");


    // var litext = $("li").map(function (index){
    //     return "[(" + index + ")" + $(this).text() + "]";
    // }).get().join(',');
    // $("#result").text(litext);


    // $("*").each(function(){
    //     if ($(this).is("li")){
    //         $(this).css("border", "1px solid red");
    //     }
    // });

    // $("li").has("ul").css("background", "red");

    // $("td").filter(function(index){
    //     return index % 3 ==0;
    // }).css("background", "red");

    // $("td:nth-child(2n+1)").css("background","red");
    // $("li").css("margin", "5px");
    // $(":checked, :selected").css("border", "2px solid red");
    // $(":selected").css("background", "red");

    //$("#txt:focus").css("background","#F00");
    // $("tr:not(.no)").css("background","#AAA");

    // $("tr:even").css("background", "#F00");

    // $("tr:eq(0) > td:eq(7)").css("background", "#FF0000"); //선택된요소
    // $("tr:eq(1) > td:gt(0)").css("background", "#FF0000"); //gt인덱스 보다 큰 요소
    // $("tr:eq(2) > td:odd").css("background", "#FF0000"); // 홀수요소
    // $("tr:eq(3) > td:first").css("background", "#00FF00"); // 처음 요소
    // $("tr:eq(3) > td:last").css("background", "#0000FF"); // 마지막 요소

    // $("ul.url > li").css("border", "1px solid #ff0000");
    // $(".url2 li").css("border", "1px solid blue");
    // $("label + input").css("border", "1px solid #ff0000");
    // $("#info ~ input").css("background", "blue"); //앞쪽에 잇는걸 제외함

    // $(".callout").css("border", "solid 1px #ff0000"); // 앞부분이 selector 뒷부분이 method
    // $(".code").css("background", "#ccc");
    // $(".code").css("margin", "1px 2px");
    // $(".code").css("padding", "1px 4px");
    // $(".code").css("font-family", "monospace");
    // //$(".highlight").css("background", "#ff0");
    // //$(".highlight").css("font-style", "italic");
    //
    // $("div > a[target]").css("background", "#ccc");
    // $("div > a[href = 'http://www.daum.net']").css("background", "#ff0080");
    // $("div[id^='high']").css("background", "#ccc"); //id가 high로 시작하는 태그는 적용해라
    // $("span[class$='de']").css("font-style", "italic"); //class가 de로 끝나는 태그 적용
    // $("div[id*='o']").css("font-style", "italic");

});
