var list = document.getElementsByClassName('demo');
var start = document.getElementById('start');
var end = document.getElementById('end');
var time;
function begin(){
     var one = Math.floor(Math.random()*list.length);
     var two = Math.floor(Math.random()*list.length);
     var three = Math.floor(Math.random()*list.length);
     if(one == two){
         one = Math.floor(Math.random()*list.length);
     }
     else if(two == three){
         two = Math.floor(Math.random()*list.length);
     }
     else if(one == three){
         three = Math.floor(Math.random()*list.length);
     }
     list[one].style.backgroundColor = 'rgb' + color();
     list[two].style.backgroundColor = 'rgb' + color();
     list[three].style.backgroundColor = 'rgb' + color();
}
function color(){
    var rgb;
    var r = Math.floor(Math.random()*265);
    var g = Math.floor(Math.random()*265);
    var b = Math.floor(Math.random()*265);
    rgb = '('+r+','+g+','+b+')';
    return rgb;
}
 function myStart(){
     clearInterval(time);
   time = setInterval(function() {
       for (var i = 0; i < list.length; i++) {
           list[i].style.backgroundColor = '';
       }
       begin();
   },1000);
}
 function myEnd(){
    clearInterval(time);
     for (var i = 0; i < list.length; i++) {
         list[i].style.backgroundColor = '';
     }
}