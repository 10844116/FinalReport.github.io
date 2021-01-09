var Dictionary = new Array();
Dictionary.push(["蛋糕", "2"]);
Dictionary.push(["塔類", "3"]);
Dictionary.push(["餅乾", "4"]);
Dictionary.push(["常溫點心", "5"]);

function onSearch() {
    var inSearch = document.getElementById("inSearchTxt");
    inSearch.hidden = true;
    var txt = inSearch.value;

    for(var i = 0; i < Dictionary.length; i++) {
        if(Dictionary[i][0].includes(txt) == true) {
            inSearch.value = Dictionary[i][1];
            return;
        }
    }

    alert("查無商品，請重新輸入!");
    this.event.preventDefault();
}


function getUrlQueryParams(url) {
    var queryString = url.split("?")[1];
    if (queryString == undefined) {
        return undefined;
    }

    var keyValuePairs = queryString.split("&");
    var keyValue = [];
    var queryParams = {};
    keyValuePairs.forEach(function (pair) {
        keyValue = pair.split("=");
        queryParams[keyValue[0]] = decodeURIComponent(keyValue[1]).replace(/\+/g, " ");
    });

    return queryParams;
}

function doLogin() {
    var chk = document.getElementById("chkRemem").checked;

    var user = document.getElementById("user").value;

    if (chk == true) {
        if (user != null && user.length != 0) {
            sessionStorage.setItem("User", user);
        }
    } else {
        sessionStorage.removeItem("User");
    }

    alert("登入成功!")
}

function doLogout() {
	var user = sessionStorage.getItem("User");
	
	if(user == null) {  // 沒有登入
		return;
	}
	
	sessionStorage.removeItem("User"); // 移除登入資訊
    alert("登出成功!");

}

function chkLogin() {
	var loggedIn = sessionStorage.getItem("User");

	if (loggedIn == null) {
		alert("請先登入或註冊會員!");
		document.getElementById('id01').style.display = "block";
		this.event.preventDefault();
		return false
	}
	
	return true;
}
