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
        `<div class="layout big"><img src=${
          data[i].image
        } alt=""> <div class="bg">
          <p>${data[i].nick}</p>
          <p>${data[i].name}</p>
          <p>${data[i].description}</p>
          <p>${data[i].hunt_info}</p>
          <p>폭발${data[i].debuff.explosion}</p>
          <p>기절${data[i].debuff.faint}</p>
          <p>마비${data[i].debuff.paralysis}</p>
          <p>독${data[i].debuff.poison}</p>
          <p>수면${data[i].debuff.sleep}</p>
          <p>${data[i].location}</p>
          </div>
        </div>`
      );
    } else if (data[i].gubun === "소형") {
      $("#monster").append(
        `<div class="layout small"><img src=${
          data[i].image
        } alt=""><p>${data[i].name}</p>
        <p>${data[i].location}</p>
        </div>`
      );
    } else if (data[i].gubun === "환경") {
      $("#monster").append(
        `<div class="layout env"><img src=${
          data[i].image
        } alt=""><p>${data[i].name}</p></div>`
      );
    }
  }
  console.log(data);
}

function big() {
  $("#big").click(function(e) {
    e.preventDefault();
    $(".big").css("display", "inline-block                                              ");
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