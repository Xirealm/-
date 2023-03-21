// const loginemail = document.getElementsByName("loginemail")
// const loginpassword = document.getElementsByName("loginpassword")
var login=document.getElementsByClassName("login--")
// var sel = document.getElementById("sel")
// var role = sel.options[sel.options.selectedIndex].value
function loginemail() {
    var str = login[0].value;
    var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var res = reg.test(str);
    var error1 = document.getElementById("error1");
    console.log(error1);
    console.log(res);
    if (res === false) {
        error1.style.display = "block";
    } else {
        error1.style.display = "none";
    }
}

// axios.defaults.baseURL='http://stntit.natappfree.cc/yuteng_war_exploded'
function login0() {
     var username = login[0].value;
    var password = login[1].value;
    console.log(username)
    console.log(password)
    axios({
        method: 'post',
        url: 'http://rmk2x2.natappfree.cc/Books_Managerment_System_war_exploded/LoginServlet',
        data: {
            "username" : username,
            "password" : password,
        }
    }).then((res) => {
        alert(res.data.message)
    }).catch((e) => { })
    console.log("hahaha");
}
function jump() {
    window.location.href = "http://127.0.0.1:5500/book_login/register.html";
}


