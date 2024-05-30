// const products = [
//     {
//         id:0,
//         img:"img/sp1.webp",
//         img1:"img/sp1.1.webp",
//         img2:"img/sp1.2.webp",
//         img3:"img/sp1.3.webp",
//         name:"BẤT NGỜ CHƯA BÀ GIÀ",
//         quantity: 1,
//         price: 19.000,
//         status: true

//     },
//     {
//         id:1,
//         img:"img/sp2.webp",
//         img1:"img/sp2.1.webp",
//         img2:"img/sp2.2.webp",
//         img3:"img/sp2.3.webp",
//         name:"GÌ? MUỐN GÌ??? DOG",
//         quantity: 1,
//         price: 19.000,
//         status: true

//     },
//     {
//         id:2,
//         img:"img/sp3.webp",
//         img1:"img/sp3.1.webp",
//         img2:"img/sp3.2.webp",
//         img3:"img/sp3.3.webp",
//         name:"NGỦ CÁI RỒI TÍNH NHA!!! DOG",
//         quantity: 1,
//         price: 19.000,
//         status: true

//     },
//     {
//         id:3,
//         img:"img/sp4.webp",
//         img1:"img/sp4.1.webp",
//         img2:"img/sp4.2.webp",
//         img3:"img/sp4.3.webp",
//         name:"FIRE HELMET SKULL BIKER",
//         quantity: 1,
//         price: 19.000,
//         status: true

//     },
//     {
//         id:4,
//         img:"img/sp5.webp",
//         img1:"img/sp5.1.webp",
//         img2:"img/sp5.2.webp",
//         img3:"img/sp5.3.webp",
//         name:"Koala Dễ Thương",
//         quantity: 1,
//         price: 20.000,
//         status: true

//     },
//     {
//         id:5,
//         img:"img/sp6.webp",
//         img1:"img/sp6.1.webp",
//         img2:"img/sp6.2.webp",
//         img3:"img/sp6.3.webp",
//         name:"Outter Space - Enjoy sticker sheet",
//         quantity: 1,
//         price: 20.000,
//         status: true

//     },
//     {
//         id:6,
//         img:"img/sp7.webp",
//         img1:"img/sp7.1.webp",
//         img2:"img/sp7.2.webp",
//         img3:"img/sp7.3.webp",
//         name:"Phi Hành Gia",
//         quantity: 1,
//         price: 25.000,
//         status: true

//     },
//     {
//         id:7,
//         img:"img/sp8.webp",
//         img1:"img/sp8.1.webp",
//         img2:"img/sp8.2.webp",
//         img3:"img/sp8.3.webp",
//         name:"Phi Hành Gia Ngồi Thiền",
//         quantity: 1,
//         price: 20.000,
//         status: true

//     }
    
// ]
// const categories = [... new Set(products.map((item)=>
//     {return item}))]
// console.log(categories);
// let i = 0;
// document.getElementById("container").innerHTML = categories.map((item) => {
//     var {name, price, img, status} = item;
    
//     return `<div class="box">
//                 <a href="product-detail.html"><img src="${img}" alt="" onclick="view_product(${item.id})"></a>
//                 <h3 id="name">${name}</h3> <br>
//                 <span id="price">${price},000 đ</span><br>
//                 <div class="wrapper"> 
//                     `+"<button onclick='addCart("+(i++)+")'>"+`
//                     <a href="#"><i class="far fa-shopping-basket"></i>THÊM VÀO GIỎ</a></button>
//                     </div>
//             </div>`
//     }).join('') ;
    
// //Chi tiết sản phẩm 
// function view_product(productId) {
//   localStorage.setItem('selectedProductId', productId);
// }
// var cart = [];
// function addCart(a) {
//     cart.push({ ...products[a] });
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCart(cart);
//     // window.location.href = 'cart.html';
//   }
// function delElement(a){
//     cart.splice(a,1);
//     displayCart();
// }
// function displayCart(cart) {
//     let sum = 0;
//     document.getElementById('count').innerHTML = cart.length;
//     let cartItems = {};
//     for (let i = 0; i < cart.length; i++) {
//     let currentItem = cart[i];
//     let itemId = currentItem.id;
//     if (cartItems[itemId]) {
//       cartItems[itemId].quantity++;
//       cartItems[itemId].totalPrice += currentItem.price;
//     } else {
//       // Sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng và khởi tạo số lượng và giá tiền
//       cartItems[itemId] = {
//         item: currentItem,
//         quantity: 1,
//         totalPrice: currentItem.price
//       };
//     }
//   }
//     if (cart.length == 0) {
//       document.getElementById('cartItem').innerHTML = "Giỏ hàng trống !";
//       document.getElementById('sum_cart').innerHTML = sum + "đ";
//     } else {
//       document.getElementById('cartItem').innerHTML = "";
//         document.getElementById('pro_cart').innerHTML = Object.values(cartItems).map((item) => {
//             var {id, name, price, img } = item.item;
//             var quantity = item.quantity;
//             var totalPrice = item.totalPrice;
//             sum += totalPrice;
//         return (
//           `<tr>
//             <td>${name}</td>
//             <td><img src="${img}" alt="" width="100px" height="auto"></td>
//             <td>${quantity}</td>
//             <td>${price},000 đ</td>
//             <td> <img type="button" src="img/delete.png" alt="" width="20px" height="auto" onclick="removeItem(${id})"></td>
//           </tr>`
//         )
//       }).join('');
//       document.getElementById('sum_cart').innerHTML = sum + ",000 đ";
//     }
//   }
//   function sum() {
//     let sum = 0;
//     for (let i = 0; i < cart.length; i++) {
//       sum += cart[i].price;
//     }
//     return sum;
//   }
  
//   window.onload = function() {
//     cart = JSON.parse(localStorage.getItem('cart')) || [];
//     displayCart(cart);
//   };
//   function removeItem(id) {
//     // Lọc các sản phẩm không trùng khớp với ID cần xóa
//     cart = cart.filter((item) => item.id !== id);
//     // Cập nhật lại giỏ hàng trong localStorage
//     updateLocalStorage(cart);
//     if (cart.length === 0) {
//       // Clear the local storage if the cart is empty
//       localStorage.removeItem('cart');
//       displayCart(cart);
//       return;
//     }
//     // Hiển thị lại giỏ hàng sau khi xóa sản phẩm
//     displayCart(cart);
//     // Tính tổng giá trị giỏ hàng
//     sum();
//   }
  
//   function updateLocalStorage(cart) {
//     // Cập nhật giỏ hàng trong localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }

  function showcart(){
    const cartshow = document.getElementById('cart1');
    if(cartshow.style.display === 'block'){
      cartshow.style.display = 'none';
    } else {
      cartshow.style.display ='block';
      
    }
    displayCart(cart);
  }
