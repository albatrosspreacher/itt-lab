var usn = prompt('Enter USN: ');

if(usn!=null){
    validate(usn);
}

function validate(usn)
      {
          var error="";

          var pattern=/^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/;

          if (!usn.match(pattern))
             {
                error = "USN is invalid!";
             }

          if (error.length == 0)
             alert("USN is valid!");
          else
             alert(error);
}