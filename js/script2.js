function Validate()
{
    let fname=document.getElementById("fname");
    let lname=document.getElementById("lname");
    let pwd=document.getElementById("pwd");
    let cpwd=document.getElementById("cpwd");
    let radios=document.getElementsByName("gender");
    let radioValid=false;
    let mobile=document.getElementById('mobile');
    let dob=document.getElementById("dob");
    let email=document.getElementById("email");
    if(fname.value.length==0||lname.value.length==0)
   {
       alert("Name cannot be empty");
       return false;
   }
   if(!fname.value.match(/^[a-zA-z\s]+$/))
   {
       alert("Name must only contain Alphabets");
       fname.focus();
       return false;
   }
   if(!lname.value.match(/^[a-zA-z\s]+$/))
   {
       alert("Name must only contain Alphabets");
       lname.focus();
       return false;
   }
   if(pwd.value.length===0)
   {
       alert("Please enter password");
       pwd.focus();
       return false;
   }
   if(pwd.value.length<=5||pwd.value.length>=21)
   {
       alert("Password should contain characters in range of 6 to 20");
       pwd.focus();
       return false;
   }
   if(cpwd.value.length===0)
   {
       alert("Please Confirm the password");
       cpwd.focus();
       return false;
   }
   if(cpwd.value.length<=5||cpwd.value.length>=21)
   {
       alert("Password should contain characters in range of 6 to 20");
       cpwd.focus();
       return false;
   }
   if(pwd.value!==cpwd.value)
   {
    alert("Passwords are not matching");
    cpwd.focus();
    return false;
   }
   for(let i of radios)
   {
       if(i.checked)
       {
           radioValid=true;
           break;
       }
   }
   if(radioValid==false)
   {
       alert("Please select gender");
       radios[0].focus();
       return false;
   }
   if(mobile.value.length===0)
   {
       alert("Please enter mobile number");
       mobile.focus();
       return false;
   }
   let phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (!mobile.value.match(phone_regex)) {
		alert("Re-enter Mobile Number in XXX XXX XXXX or XXX-XXX-XXXX or XXX.XXX.XXXX formats");
		mobile.focus();
		return false;
    }
    if(dob.value.length===0)
   {
       alert("Please enter Date Of Birth");
       dob.focus();
       return false;
   }
   if(!dob.value.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/))
   {
    alert("Please enter Date Of Birth in format of DD-MM-YYYY");
    dob.focus();
    return false;
   }
   if(email.value.length===0)
   {
    alert("Please enter Email");
    email.focus();
    return false;      
   }
   if(!email.value.match(/^([a-zA-Z0-9\.-]+)@([a-zA-Z-]+).([a-z]{2,10})(.[a-z]{2,10})?$/))
   {
     alert("Please enter valide email");
     email.focus();
     return false;
   }
   document.getElementById("re").innerHTML="Welcome "+fname.value+" "+lname.value+"!";
   
}
var timeout
function Timer()
{
    clearTimeout(timeout);
    timeout=setTimeout(function(){alert("3 mins past");},3*60*1000);
}
Timer();