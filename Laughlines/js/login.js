function check(){
    var x = document.getElementById("email");
    var y = document.getElementById("pass");
    var print = document.querySelector("#tb");
    if( x.value == ""){
        alert("Hãy Nhập Email !");
        x.style.backgroundColor="rgb(200,200,200)";
        x.focus();
        return false;
    } else if(!/@/.test(x.value)){
        alert("Email Phải Có @ !");
        x.style.backgroundColor="rgb(200,200,200)";
        x.focus();
        return false;
    }
    if( y.value == ""){
        alert("Hãy Nhập Password !")
        y.style.backgroundColor="rgb(200,200,200)";
        y.focus();
        return false;
    } else if (y.value.length<6){
        alert("Password Phải 6 ký tự trở lên !");
        y.style.backgroundColor="rgb(200,200,200)";
        y.focus();
        return false;
    } else if (y.value.length>15){
        alert("Password Phải Dưới 15 Ký Tự !");
        y.style.backgroundColor="rgb(200,200,200)";
        y.focus();
        return false;
    } else if (!/[A-Z]/.test(y.value)) {
        alert("Password Phải Có Ít Nhất Một Ký Tự Viết Hoa !");
        y.style.backgroundColor = "rgb(200,200,200)";
        y.focus();        
        return false;
    } else{
        alert("Login Thành Công !");
        window.location.assign('index.html');
    }
    
    return true;
}
var look = true ;
function lookpass(){
    if(look){
        document.getElementById("pass").type ="text";
        look = false;
    } else {
        document.getElementById("pass").type = "password";
        look = true;
    }
}