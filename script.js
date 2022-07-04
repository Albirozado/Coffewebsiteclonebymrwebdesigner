let  mennu = document.querySelector(".links")
let inten = document.querySelector(".caixa")
function caixa(){
    inten.classList.toggle("active")
    mennu.classList.remove("activver")
}
function menubt(){
    inten.classList.remove("active")
    mennu.classList.toggle("activver")

}
window.onscroll = () =>{
    inten.classList.remove("active")
    mennu.classList.remove("activver")
  
  
}
