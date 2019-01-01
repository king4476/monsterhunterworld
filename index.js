let data;

$(document).ready(function() {
  loadDb();
  big();
  small();
  env();
  init();
});

function loadDb() {
  $.ajax({
    type: "get",
    url: "http://www.mhwdb.kr/apis/monsters",
    success: function(res) {
      data = res;
    }
  });
}



function loadDb(){
  return new Promise(function (resolve, reject){
    $.get('http://www.mhwdb.kr/apis/monsters/products/1', function(response) {
      if(response){
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}


loadDb().then(function (data) {
  init(data);
}).catch(function (err) {
  console.log(err);
});

function init(data) {
  for (let i = 0; i < 113; i++) {
    if (data[i].gubun === "대형") {
      $("#monster").append(
        `<div class="layout big"><p>${data[i].name}</p><img src=${
          data[i].image
        } alt=""></div>`
      );
    } else if (data[i].gubun === "소형") {
      $("#monster").append(
        `<div class="layout small"><p>${data[i].name}</p><img src=${
          data[i].image
        } alt=""></div>`
      );
    } else if (data[i].gubun === "환경") {
      $("#monster").append(
        `<div class="layout env"><p>${data[i].name}</p><img src=${
          data[i].image
        } alt=""></div>`
      );
    }
  }
  console.log(data);
}

function big() {
  $("#big").click(function(e) {
    e.preventDefault();
    $(".big").css("display", "block");
    $(".small").css("display", "none");
    $(".env").css("display", "none");
    console.log(123)
  });
}

function small() {
  $("#small").click(function (e) { 
    e.preventDefault();
    $(".big").css("display", "none");
    $(".small").css("display", "block");
    $(".env").css("display", "none");
  });
}

function env() {
  $("#env").click(function (e) { 
    e.preventDefault();
    $(".big").css("display", "none");
    $(".small").css("display", "none");
    $(".env").css("display", "block");
  });
}