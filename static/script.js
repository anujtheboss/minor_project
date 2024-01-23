const showpopup=document.querySelector(".login-btn");
const hidepopup=document.querySelector(".popup-form .close-btn");
const formpopup=document.querySelector(".popup-form");
const loginsignuplink =document.querySelectorAll(".formbox .button-link a");
showpopup.addEventListener("click",() => {
    document.body.classList.toggle("show-popup");
    // this script adds the class i.e.show-popup if it doesnot exists else 
    // remove it if it exists
});
hidepopup.addEventListener("click",() =>showpopup.click());
// this allows=when the button in close-btn class inside popup-form class is clicked then it clicks the login button which undo the initial click

loginsignuplink.forEach(link =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(link.id);
        formpopup.classList[link.id==="signup-link"? 'add':'remove']("show-signup");
        //if the clicked link is signup then add show-signup class to the popup-form else remove the class.
    });
})