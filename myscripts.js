function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("Email").value;
    var phone = document.getElementById("Title").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 4){
      text = "Name Must Be At Least Four Characters";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = email; 
      return false;
    }
    if(isNaN(title) || title.length != 10){
      text = "Please Enter valid Title";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }