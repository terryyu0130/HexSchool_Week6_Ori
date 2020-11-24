"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});

(function () {
  $(document).ready(function () {
    // header menu Mobile
    $(".header .box").on("click", function () {
      $(".header .menu").slideToggle();
    }); // alert message

    $(".collection").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("active");
      $(".collect-added").fadeIn();
    });
    $(".collect-added").on("click", function () {
      $(this).fadeOut();
    });
    $(".submition").on("click", function (e) {
      e.preventDefault();
      $(".cart-added").fadeIn();
    });
    $(".cart-added").on("click", function () {
      $(this).fadeOut();
    });
  });
})();
"use strict";

(function () {
  var xhr = new XMLHttpRequest();
  var login = document.querySelector(".login");
  var register = document.querySelector(".register"); // 登入 -> 因瞄點無法與js共存無法跳轉畫面，先選擇瞄點跳轉

  function signin(e) {
    // e.preventDefault();
    var email = document.querySelector("#email").value; // alert(email);

    var password = document.querySelector("#password").value; // alert(password);

    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signin", true);
    xhr.setRequestHeader("Content-type", "application/json");
    var data = {
      email: email,
      password: password
    };
    xhr.send(JSON.stringify(data));

    xhr.onload = function () {
      console.log(xhr.responseText);
      var str = JSON.parse(xhr.responseText);
      console.log(str.message);
      alert(str.message);
    };
  } // 註冊


  function registerin(e) {
    e.preventDefault(); // alert('test');

    var email = document.querySelector("#email").value; // alert(email);

    var password = document.querySelector("#password").value; // alert(password);

    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var data = "email=" + email + "&password=" + password; // alert(data);

    xhr.send(data);

    xhr.onload = function () {
      console.log(xhr.responseText);
      var str = JSON.parse(xhr.responseText);
      console.log(str.message);
      alert(str.message);
    };
  }

  login.addEventListener("click", signin, false);
  register.addEventListener("click", registerin, false);
})();
//# sourceMappingURL=all.js.map
