


const product = [
    {
        id: 0,
        image: './cake/depositphotos_13613299-stock-photo-chocolate-cake.jpg',
        title: 'Extra Chocolate Cake',
        price: 180,
    },
    {
        id: 1,
        image: './cake/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg',
        title: 'Chocolate Cake',
        price: 100,
    },
    {
        id: 2,
        image: './cake/depositphotos_10048632-stock-photo-chocolate-cake.jpg',
        title: 'Extra Chocolate Cake with Cramel',
        price: 200,
    },
    {
        id: 3,
        image: './cake/depositphotos_67056547-stock-photo-cream-chocolate-cake-with-icing.jpg',
        title: 'Chocolate Cake with Extra Cramel',
        price: 50,
    },
    {
        id: 4,
        image: './bread/depositphotos_174069000-stock-photo-homemade-chocolate-chip-cookies.jpg',
        title: 'Cookies',
        price: 80,
    },
    {
        id: 5,
        image: './bread/depositphotos_18339921-stock-photo-baked-goods.jpg',
        title: 'Delecious Bread',
        price: 60,
    },
    {
        id: 6,
        image: './bread/depositphotos_311021426-stock-photo-choco-pie-chocolate-sweets.jpg',
        title: 'Chocolate Biscuits',
        price: 60,
    },
    {
        id: 7,
        image: './bread/depositphotos_194847802-stock-photo-close-shot-delicious-chocolate-cookies.jpg',
        title: 'Biscuits',
        price: 80,
    },
    {
        id: 8,
        image: './cupcake/depositphotos_68316949-stock-photo-three-cupcakes-with-sparklers.jpg',
        title: 'Vanilla cupcake',
        price: 70,
    },
    {
        id: 9,
        image: './cupcake/depositphotos_32764241-stock-photo-chocolate-cupcake-on-dark-background.jpg',
        title: 'Extra Chocolate  Cupcake',
        price: 60,
    },
    {
        id: 10,
        image: './cupcake/Chocolate-and-Vanilla-Cupcakes-11-scaled.jpg',
        title: 'Chocolate Cupcake',
        price: 70,
    },
    {
        id: 11,
        image: './cupcake/depositphotos_89817692-stock-photo-tasty-cupcakes-isolated-on-white.jpg',
        title: 'Strawbery Cupcake',
        price: 80,
    }
];
var cart=[];
const myObjectString2 = localStorage.getItem('objectGreeting');
const myObject2 = myObjectString2 ? JSON.parse(myObjectString2) : [];
//   if(myObject2==null||myObject2==undefined){
//     myObject2=default Array;
//   }
  console.log(myObject2);

  var arr= Object.values(myObject2);
  var c=[];
  var mm;
  console.log(typeof arr[0]);
  var im=[];
  for(var co=0,mm=0;co<arr.length;co++,mm++)
  {
    if(co%2!=0)
    {
        mm--;
   continue;
    }
    c[mm]=arr[co];
    console.log(arr[co]);
  }
  for(var co=0;co<c.length;co++)
  {
    if(c[co]>11){
        c[co]=11;
    }
  console.log("c:"+c[co]);
  console.log(product[c[co]]);
    im[co]=product[c[co]];
    console.log("im:"+im[co]);

  }
  
// const categories = [...new Set(c.map((item)=>
//     {return item}))]
//     let i=0;
// document.getElementById('root').innerHTML = categories.map((item)=>
// {
//     const productItem = product[item];
//     const { image, title, price } = productItem;

//     return (
//         `<div class='box'>
//           <div class='img-box'>
//             <img class='images' src=${image}></img>
//           </div>
//           <div class='bottom'>
//             <p>${title}</p>
//             <p>
//             <h2>$ ${price}.00</h2>
//             <button onclick='addtocart(${i},${item.id})'>Are you sure?</button>
//           </div>
//         </div>`
//       );
// }).join('')


var gg=0;
function delElement(a){
    c.splice(a,1);
    to();
}

// const categories = [...new Set(c.map((item)=>
//     {console.log("item:"+item)
//         return item}))]
    let i=0;

    let j = 1, total=0;
    console.log("  c:"+c);
    document.getElementById("count").innerHTML=c.length;
    if(c.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = c.map((items)=>
        {
            console.log("the items is :"+items.values);
            const productItem = im[gg];
            gg++;
            console.log(im[gg]);
            console.log(gg);
            console.log(productItem);

    var { id,image, title, price } = productItem;
            // var {image, title, price} = items;
            
                id=j;
            
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+console.log(j)+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (id) +")'></i></div>"

            );
        }).join('');
    


    }
    function to(){
        let i=0;
        let total=0;
        j++;
        var gg=0;
console.log(j);
    document.getElementById("count").innerHTML=c.length;
    if(c.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = c.map((items)=>
        {
            console.log("the items is :"+items.values);
            const productItem = im[gg];
            gg++;
    var { id,image, title, price } = productItem;
    id=jj;
            // var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (id) +")'></i></div>"
            );
        }).join('');
    


    }

    }

// ####################################################################
// var gg=0;
// function addtocart(a){
//     cart.push({...categories[a]});
//     displaycart();
// }

// function displaycart(){
//     let j = 0, total=0;
//     document.getElementById("count").innerHTML=cart.length;
//     if(cart.length==0){
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//         document.getElementById("total").innerHTML = "$ "+0+".00";
//     }
//     else{
//         document.getElementById("cartItem").innerHTML = cart.map((items)=>
//         {
//             console.log("the items is :"+items.values);
//             const productItem = product[im[gg]];
//             gg++;
//     var { image, title, price } = productItem;
//             // var {image, title, price} = items;
//             total=total+price;
//             document.getElementById("total").innerHTML = "$ "+total+".00";
//             return(
//                 `<div class='cart-item'>
//                 <div class='row-img'>
//                     <img class='rowimg' src=${image}>
//                 </div>
//                 <p style='font-size:12px;'>${title}</p>
//                 <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
//                 "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
//             );
//         }).join('');
//     }

    
// }

// var cartItems=[] ;
// const cartItemsDiv = document.getElementById('cartItems');

// // function addToCart(item) {
// //   console.log(item);

// //      cartItems.push(item);
// //   }


//  cartItems = window.cartItems;

// // Get the cartItems div element

// // Iterate over the cartItems array and generate HTML for each item
// cartItems.forEach(element => {
    
// });(element => {
  
// });(element => {
  
// });((item) => {
//   const { image, title, price } = item;
//   const itemHTML = `
//     <div class="cart-item">
//       <img src="${image}" alt="${title}">
//       <h3>${title}</h3>
//       <p>$${price}</p>
//     </div>
//   `;
//   cartItemsDiv.innerHTML += itemHTML;
// });



// Listening for messages from the parent window

// window.addEventListener('message', function(event) {
//   if (event.source === otherWindow) {
    
//   }
//     console.log('Received message from the opened window:', event.data);

//     // Access the received data
//     var receivedData = event.data;

//   console.log('Received message from the parent window:', event.data);

//   // Sending a message back to the parent window
//   event.source.postMessage('Hello from the opened window!', event.origin);
// });

// var ret = document.getElementsByClassName("cdcd");
// ret.addEventListener("click",nini);

// function nini(){
//     const otherWindow = window.open('./index.html');
//     window.close();

// }

var ret = document.getElementsByClassName("cdcd")[0];
ret.addEventListener("click", nini);

function nini() {
  const otherWindow = window.open('./index.html');
  window.close();
}
