function change(){
   document.getElementById("start").src = "../imgs/start.gif";
    document.getElementById("start").style.opacity="1";
}
function change1(){
   document.getElementById("question").src = "../imgs/question.gif";
         document.getElementById("question").style.opacity="1";
}
function change2(){
   document.getElementById("img1").src = "../imgs/emb.gif";
   document.getElementById("img1").style.opacity = "1";
   document.getElementById("img1").style.height = "216px";

}
function change3(){
   document.getElementById("img2").src = "../imgs/eating.gif";
   document.getElementById("img2").style.opacity = "1";
   document.getElementById("img2").style.height = "216px";

}
function change4(){
   document.getElementById("img3").src = "../imgs/times.jpg";
   document.getElementById("img3").style.opacity = "1";
   document.getElementById("img3").style.height = "200px";

}



document.getElementById("p1").addEventListener("click",change);
document.getElementById("p2").addEventListener("click",change1);
document.getElementById("img1").addEventListener("click",change2);
document.getElementById("img2").addEventListener("click",change3);
document.getElementById("img3").addEventListener("click",change4);
