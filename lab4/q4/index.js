var usn = prompt('Enter USN: ');

if(usn!=null){
    validate(usn);
}

function validate(usn)
      {
          var error="";

          var pattern=/^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/; //rejex pattern
          /*
          https://medium.com/factory-mind/regex-cookbook-most-wanted-regex-aa721558c3c1
          https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
          learn more about regular expressions here^
          */

          if (!usn.match(pattern))
             {
                error = "USN is invalid!";
             }

          if (error.length == 0)
             alert("USN is valid!");
          else
             alert(error);
}