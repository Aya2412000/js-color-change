var btn = document.getElementById('btn');
var box = document.getElementById('box');

var color=["blue","green","aqua"];

// for(var i=0; i<color.length; i++){
// btn.onclick=function(){
//     box.style.backgroundColor=color[i];
// }}
var i = 0;
btn.onclick=function(){
        box.style.backgroundColor=color[i];
        i++;
        if(i==3){//array.length
            i=0;
        }
    }
