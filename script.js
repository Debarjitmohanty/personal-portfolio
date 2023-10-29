function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function Send(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;

  var body="Name: "+name + "<br/> Email: "+email+ "<br/> Message: "+message;
console.log(body);

  Email.send({
    SecureToken :"2f92f85d-109c-4624-81bf-5c2929d276e0",
    To : 'debarjitmohanty@gmail.com',
    From : "debarjitmohanty@gmail.com",
    Subject : "This is the subject",
    Body : body
}).then(
  message => {
    if(message=='OK'){
      swal("Successfull", "Your Data Successfull Received ", "success");
    }
    else{
      swal("Something Wrong", "Your Data Not Received ", "error");
    }
  }
);

}

