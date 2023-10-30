function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pj5179159@gmail.com",
        Password : "FB5A05371B67840D9209695B931E80BA6375",
        To : 'joaopaulino399@gmail.com',
        From : "pj5179159@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}
