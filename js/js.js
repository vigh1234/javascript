var image = document.getElementById("img1");
var link = document.getElementById("a");
var widthpx=document.getElementById("widthinpx");
var widthpercentage=document.getElementById("percentagewidth");
var heightpx=document.getElementById("heightinpx");
var heightpercentage=document.getElementById("percentageheight");
var paste=document.getElementById("link");
var chkbox=document.getElementById("check");

function myfunction(){
    image.style.width = widthpx.value + "px";
    image.style.width = widthpercentage.value + "%";
    image.style.height = heightpx.value + "px";
    image.style.height = heightpercentage.value + "%";
    
    
}
function imgclk(){
    if(chkbox.checked){
        window.open(paste.value,"_blank")
    }
    else{
        link.setAttribute("href",paste.value)
    }
     
}
  
    
 


