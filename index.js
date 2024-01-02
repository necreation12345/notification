let iteam1=document.getElementById("iteam");
let qunt1=document.getElementById("quantity");
let order=document.getElementById("order")
order.addEventListener("click",fun);
var divname=document.getElementById("list");
divname.style.display="none";
var countnot=0;

var sound=new Audio("notsound.mp3");

function fun()
{
    countnot+=1;
    var lastcount=countnot+1;
    if(countnot<lastcount){
        sound.currentTime=0;
        sound.play();
    }

    var newnot=document.createElement("div");
    var li1=document.createElement("h2");
    divname.style.display="block";
    li1.appendChild(document.createTextNode("Your Order SuccesFully Placed"));
    newnot.appendChild(li1);
    divname.appendChild(newnot);
    setTimeout(function(){
            divname.removeChild(newnot);
    },3000)
}
