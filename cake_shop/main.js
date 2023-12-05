// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = ()=>{
//     navbar.classList.toggle('active');
// }




// window.onscroll =()=>{
//     navbar.classList.remove('active');
// }






// /////////////////////////////////////////////////

// var te=document.getElementsByClassName("m");
// var photoUrls = [
//     '../marbels/marble1.jpg',
//     '../marbels/marble3.jpg',
    
//   ];
//   console.log(te);
//   var c=0;
//   var e=0;

//   function counter(){
      
//         te[(e%5)].src=photoUrls[1];
//         te[(e+1)%5].src=photoUrls[0];
//         te[(e+2)%5].src=photoUrls[0];
//         te[(e+3)%5].src=photoUrls[0];
//         te[(e+4)%5].src=photoUrls[0];
//         e++;
    
//     };

//     te[0].addEventListener('mouseover', function() {
//         // Clear the interval when the mouse hovers over the image
//         clearInterval(c);
//       });
      
//       // Add event listener for mouse leave
//       te[0].addEventListener('mouseout', function() {
//         // Restart the interval when the mouse leaves the image
//         c = setInterval(counter, 1000);
//       });
    
//       te[1].addEventListener('mouseover', function() {
//         // Clear the interval when the mouse hovers over the image
//         clearInterval(c);
//       });
      
//       // Add event listener for mouse leave
//       te[1].addEventListener('mouseout', function() {
//         // Restart the interval when the mouse leaves the image
//         c = setInterval(counter, 1000);
//       });
//       te[2].addEventListener('mouseover', function() {
//         // Clear the interval when the mouse hovers over the image
//         clearInterval(c);
//       });
      
//       // Add event listener for mouse leave
//       te[2].addEventListener('mouseout', function() {
//         // Restart the interval when the mouse leaves the image
//         c = setInterval(counter, 1000);
//       });
//       te[3].addEventListener('mouseover', function() {
//         // Clear the interval when the mouse hovers over the image
//         clearInterval(c);
//       });
      
//       // Add event listener for mouse leave
//       te[3].addEventListener('mouseout', function() {
//         // Restart the interval when the mouse leaves the image
//         c = setInterval(counter, 1000);
//       });
//       te[4].addEventListener('mouseover', function() {
//         // Clear the interval when the mouse hovers over the image
//         clearInterval(c);
//       });
      
//       // Add event listener for mouse leave
//       te[4].addEventListener('mouseout', function() {
//         // Restart the interval when the mouse leaves the image
//         c = setInterval(counter, 1000);
//       });
    
//      c=setInterval(counter, 2000);

// var arr=[
// "./slider_image/1.jpg",
// "./slider_image/2.jpg",
// "./slider_image/3.jpg",
// "./slider_image/4.jpg",
// "./slider_image/5.jpg",
// "./slider_image/6.jpg",
// "./slider_image/7.jpg",
// "./slider_image/8.jpg",
// "./slider_image/9.jpg",];

// var n=0;
// var ty=document.getElementsByClassName("img");

// var next=document.getElementById("next");

// var last=document.getElementById("last");
// var start=document.getElementById("ne");

// var stop=document.getElementById("la");
// next.addEventListener("click",ne);

// function ne(){
// console.log(ty[0].scr)
//   n++;
//   if(n==0)
//   {
//   ty[0].src= arr[0];
//   }
//   else if(n==1)
//   {
//     ty[0].src= arr[1];
//   }
//   else if(n==2)
//   {
//       ty[0].src= arr[2];
//   }else if(n==3)
//   {
//       ty[0].src= arr[3];
//   }else if(n==4)
//   {
//       ty[0].src= arr[4];
//   }else if(n==5)
//   {
//       ty[0].src= arr[5];
//   }else if(n==6)
//   {
//       ty[0].src= arr[6];
//   }else if(n==7)
//   {
//       ty[0].src= arr[7];
//   }else if(n==8)
//   {
//       ty[0].src= arr[8];
//   }else if(n==9)
//   {
//       ty[0].src= arr[9];
//   }
  
//   n=n%9;
// }

// last.addEventListener("click",la);

// function la(){

//   n++;
//   if(n==0)
//   {
//   ty[0].src= arr[9];
//   }
//   else if(n==1)
//   {
//     ty[0].src= arr[0];
//   }
//   else if(n==2)
//   {
//       ty[0].src= arr[1];
//   }
//   else if(n==3)
//   {
//       ty[0].src= arr[2];
//   }
//   else if(n==4)
//   {
//       ty[0].src= arr[3];
//   }
//   else if(n==5)
//   {
//       ty[0].src= arr[4];
//   }
//   else if(n==6)
//   {
//       ty[0].src= arr[5];
//   }
//   else if(n==7)
//   {
//       ty[0].src= arr[6];
//   }
//   else if(n==8)
//   {
//       ty[0].src= arr[7];
//   }else if(n==9)
//   {
//       ty[0].src= arr[8];
//   }
  
  
//   n=n%9;
// }




// var e;

// start.addEventListener("click",auto);

// function auto() { e=setInterval(ne , 1000);}
// stop.addEventListener("click",au);

// function au(){  clearInterval(e);
// }


var pictureNumber = 1;
var imageTag = document.querySelector(".container_of_slider img");
console.log(imageTag);
showNextImage();
function showNextImage() {
  pictureNumber = (pictureNumber+1)%7;
  if(pictureNumber<=0){
    pictureNumber=1;
}
else if(pictureNumber>7)
{
  pictureNumber=1;
}
  changeNewImage();
}

function showPreviesImage() {
    
  pictureNumber =  pictureNumber - 1;
  if(pictureNumber<=0){
    pictureNumber=6;
}
  changeNewImage();
}

function changeNewImage() {
  var imagePath = "./slider_new/" + pictureNumber + ".jpg";
  imageTag.setAttribute("src", imagePath);
}

var interval;

function startSlider() {
  interval = setInterval(showNextImage, 1000);
}

function stopSlider() {
  clearInterval(interval);
}




// *********************************************************************************************************************************




let tot=document.getElementsByClassName("content");
for(var e=0;e<tot.length;e++){
  tot[e].addEventListener("click",write_on_item_page);}
var items=[];
let t=document.getElementById("myheadIcon");
// t.innerText(0);
var count=0;
function write_on_item_page(itemId) {
  if(count%2==0){
  items[count]=(itemId);
  console.log("All selected items:", items);
}count++;
items[count]==[];}
// function write_on_item_page( is){
//   items.push(is);
//   t.innerText(items.length);
//   console.log(t.innerText());

// }
  
  function openOtherHTML() {
    // Open other.html in a new window or tab
    const myObjectString = JSON.stringify(items);
    localStorage.setItem('objectGreeting', myObjectString);
    const otherWindow = window.open('./add.html');
  }
  // otherWindow.onload = function () {
  //   if(otherWindow!=null){
  //     const myObjectString = JSON.stringify(items);
  //     localStorage.setItem('objectGreeting', myObjectString);
  //   }
  // }
// Sending a message to the opened window
// otherWindow.postMessage(items);
// window.addEventListener('message', function(event) {
//   if (event.source === otherWindow) {
//     console.log('Received message from the opened window:', event.data);
//   }
// });
// Listening for messages from the opened window

    // // Wait for the new window to finish loading
    // otherWindow.onload = function () {
    //   // Access the document of the new window
    //   const otherDocument = otherWindow.document;

    //   // Write content to the new window's document
    //   otherDocument.write('<h1>Hello from main.html!</h1>');
    //   otherDocument.write('<p>This content is written dynamically.</p>');
    // };
  
  var cakes=document.getElementsByClassName("gallery")[0];
  var biscuits=document.getElementsByClassName("gallery")[1];
  var cupcakes=document.getElementsByClassName("gallery")[2];

function view_cakes()
{
    cupcakes.style.display = 'none';
    cakes.style.display = 'none';

    biscuits.style.display = 'none';
    cakes.style.display = 'flex';
}
function view_biscuits()
{
    cupcakes.style.display = 'none';
    cakes.style.display = 'none';

    biscuits.style.display = 'none';
    biscuits.style.display = 'flex';
}
function view_cupcakes()
{
    cupcakes.style.display = 'none';
    cakes.style.display = 'none';

    biscuits.style.display = 'none';
    cupcakes.style.display = 'flex';
}

