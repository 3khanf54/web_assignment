var image_about;
var image_vol;
var image_qua;
var image_blog;

function main(){
    image_about = document.getElementById("about").src;
    
    
    image_about.addEventListener("mouseover", mouseOver); 
    image_about.addEventListener("mouseout", mouseOut); 
}

function mouseOver() {
    //update image src attribute
    image_about.src = "images/about_grey.png";   
}


function mouseOut() {
   //update image src attribute
  image_about.src = "images/about.png";      
}