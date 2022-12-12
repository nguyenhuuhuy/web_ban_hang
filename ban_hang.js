// push sản phẩm bán hàng lên local

var listProduct = [
    {
      name: "Áo loại 1",
      prince: "30k",
      image: "/image/ao_1.jpg",
      id: 1 ,
    },
    {
      name: "Áo loại 2",
      prince: "30k",
      image: "/image/ao_2.jpg",
      id: 2 ,
    },
    {
      name: "Áo loại 3",
      prince: "30k",
      image: "/image/ao_3.jpg",
      id: 3,
    },
    {
      name: "Áo loại 4",
      prince: "30k",
      image: "/image/ao_4.jpg",
      id: 4 ,
    },
    {
      name: "Áo loại 5",
      prince: "30k",
      image: "/image/ao_5.jpg",
      id: 5 ,
    },
    {
      name: "Áo loại 6",
      prince: "30k",
      image: "/image/ao_6.jpg",
      id: 6 ,
    },
    {
      name: "Áo loại 7",
      prince: "30k",
      image: "/image/ao_7.jpg",
      id: 7 ,
    },
    {
      name: "Áo loại 8",
      prince: "30k",
      image: "/image/ao_8.jpg",
      id: 8 ,
    },
    {
      name: "Áo loại 9",
      prince: "30k",
      image: "/image/ao_9.jpg",
      id: 9 ,
    },
    {
      name: "Áo loại 10",
      prince: "30k",
      image: "/image/ao_10.jpg",
      id: 10 ,
    },
    {
      name: "Áo loại 11",
      prince: "30k",
      image: "/image/ao_11.jpg",
      id: 11 ,
    },
    {
      name: "Áo loại 12",
      prince: "30k",
      image: "/image/ao_12.jpg",
      id: 12 ,
    },
]
localStorage.setItem ("listProduct", JSON.stringify(listProduct));

// nhấn vào nút đăng nhập
let get_Login = document.getElementById("get_Login");
get_Login.addEventListener("click", function () {
  let get_use_login = document.getElementById("get_use_login");
  get_use_login.style.display = "block";
});

let close_login = document.getElementById("close_login");
close_login.addEventListener("click", function () {
  let get_use_login = document.getElementById("get_use_login");
  get_use_login.style.display = "none";
});

// con mắt
function getEye_3() {
  let showPass = document.getElementById("get_eye_3");
  showPass.classList.toggle("fa-eye");
  let showPassword = document.getElementById("password_login");
  let result = showPassword.getAttribute("type");
  if (result == "password") {
    showPassword.setAttribute("type", "text");
  } else {
    showPassword.setAttribute("type", "password");
  }
}

// phần login đăng nhập và chuyển tới web bán hàng
let email_login = document.getElementById("email_login");
let password_login = document.getElementById("password_login");
let dangnhap = document.getElementById("dangnhap");
let flag = false;
dangnhap.addEventListener("click", function () {
  let getListUser = localStorage.getItem("listUser"); // lấy từ local về thành mảng array
  // console.log(getListUser);
  let check = JSON.parse(getListUser); // chuyển từ array sang object
  for (let i = 0; i < check.length; i++) {
    // console.log(check[i].email);
    // console.log(email_login.value);
    if (
      check[i].email == email_login.value &&
      check[i].password == password_login.value
    ) {
      flag = true;
      console.log("ok");
      let get_use_login = document.getElementById("get_use_login");
      get_use_login.style.display = "none";
    }
  }
  if (flag == false) {
    let error_login = document.getElementById("error_login");
    error_login.style.display = "block";
  }
});

// push mảng

let list = JSON.parse(localStorage.getItem("listProduct"));
function gethtml(addListProduct) {
  let data = "";

  // let listProduct = JSON.parse(localStorage.getItem("listProduct"));

  for (let i = 0; i < addListProduct.length; i++) {
    data += `
        <ul>
          <li class="main-product">
            <div class="img-product">
              <img class="img-prd" src="${addListProduct[i].image}" alt="" />
            </div>
            <div class="content-product">
              <h3 class="content-product-h3">${addListProduct[i].name}</h3>
              <div class="content-product-deltals">
                <div class="price">
                  <span class="money">${addListProduct[i].prince}</span>
                </div>
                <div>
                <input type="number" value="1" style="width: 35px; margin-right: 10px; margin-top: 8px;">
    
            </div>
                <button type="button" class="btn btn-cart" onclick="add(${addListProduct[i].id})">Thêm Vào Giỏ</button>
              </div>
            </div>
          </li>
        </ul>
        `;
  }
  document.getElementById("push_mang").innerHTML = data;
}
gethtml(list);

// kiểm tra id
function add(id) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  //   console.log("listProduct", listProduct);
  //   console.log("id", id);

  let listProductCart = localStorage.getItem("listProductCart");
  if (listProductCart == null) {
    listProductCart = [];
    for (let i = 0; i < listProduct.length; i++) {
      listProductCart.push(listProduct[i]);
      localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
      break;
    }
  } else {
    let listProductAddCart = JSON.parse(listProductCart);
    for (let i = 0; i < listProduct.length; i++) {
      let flag = false;
      if (listProduct[i].id == id) {
        for (let j = 0; j < listProductAddCart.length; j++) {
          if (listProductAddCart[j].id == id) {
            flag = true;
            break;
          } else {
            flag = false;
          }
        }
        if (flag == true) {
          console.log("sản phẩm đã có trong giỏ hàng!");
        } else {
          listProductAddCart.push(listProduct[i]);
          localStorage.setItem(
            "listProductCart",
            JSON.stringify(listProductAddCart)
          );
        }
      }
    }
  }
}
