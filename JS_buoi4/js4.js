function login(){
     //lây username và password
  var usernameInput=document.getElementById ("txtUsername") 
  var passwordInput=document.getElementById  ("txtPassword") 

if(usernameInput.value==="ctnam890"
&& passwordInput.value==="ctnam890"
){
    alert("Hi ban")
}else{
    alert('sai mk òi')
}


}


function changetext(){
    var title=document.getElementById("title")
    title.innerHTML="mee too"
    title.style.color='pink'

}


function changetext2(){
    var title=document.getElementById("title")
    title.innerHTML="how are u"
    title.classList.add("text")
    // title.classList.remove("text")
    // title.classList.toggle("text")


}


function changeTab(e){
    var btnAnime=document.getElementById("btnAnime")
    var btnDrama=document.getElementById("btnDrama")
    var btnRomance=document.getElementById("btnRomance")

btnAnime.classList.remove("active")
btnDrama.classList.remove("active")
btnRomance.classList.remove("active")

e.target.classList.add("active")


var animeTab=document.getElementById("animeTab")
var dramaTab=document.getElementById("dramaTab")
var romanceTab=document.getElementById("romanceTab")

animeTab.classList.remove("show")
dramaTab.classList.remove("show")
romanceTab.classList.remove("show")

var activeTabId=e.target.getAttribute("data-target")

document.getElementById(activeTabId).classList.add("show")



}



// function calcMoney(e){
// var bill=+document.getElementById("bill").value
// // thêm dấu + sẽ chuyển từ chuỗi sang số
// var selectip=document.getElementById("selectip").value
// var person=document.getElementById("person").value


// // bill=parseFloat(bill)


// if(selectip=)


// }






