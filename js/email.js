var nameFrom = document.getElementById('name');
var email =document.getElementById('email');
var subject =document.getElementById('subject');
var message =document.getElementById('message');
var submit =document.getElementById('submit');

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    sendmail(nameFrom.value,email.value,subject.value,message.value);
    success();
    document.getElementById('myForm').reset();
})
function sendmail(nameFrom,email,subject,message){
    emailjs.send("service_wnfh9hp","template_n9rbi2b",{
        subject: subject,
        name: nameFrom,
        email: email,
        message: message,
    });
}
function success(){
    swal({
        title: "Good job!",
        text: "Successfully sent the message!",
        icon: "success",
        button: "OK!",
      });
      
}
