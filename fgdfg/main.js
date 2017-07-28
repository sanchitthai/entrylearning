var firstName=document.getElementById("firstname");
var lastName=document.getElementById("lastname");
var emailId=document.getElementById("emailid");
var password=document.getElementById("password");
var confirmPassword=document.getElementById("confirmpassword");

var loginemailid=document.getElementById("login-emailid");

/*var newobject={};
var list={};
var uniqueid=emailId;
list[uniqueid] = newobject;
newobject={firstName:firstName,lastName:lastName,emailId:emailId,password:password,confirmPassword:confirmPassword};*/

var objlistarray=[];
if(document.getElementById("sign-up")){
document.getElementById("sign-up").addEventListener("click", function(){
 if( checkExistance(emailId.value))
 {
  alert("emailId already exist");
  return;
 }
 else{
addToLocalStorage(firstName.value,lastName.value,emailId.value,password.value,confirmPassword.value);
}
});
}

/*if(document.getElementById("sign-up")){
document.getElementById("sign-up").addEventListener("click", function(){
checkExistance(emailId.value);
});
}*/

function addToLocalStorage(firstName,lastName,emailId,password,confirmPassword){
var objlist={firstName:firstName,lastName:lastName,emailId:emailId,password:password,confirmPassword:confirmPassword};
  objlistarray.push(objlist);

  localStorage.setItem( 'signupList', JSON.stringify(objlistarray) );
  reset();
  }

function reset(){
firstName.value="";
lastName.value="";
emailId.value="";
password.value="";
confirmPassword.value="";
}

function checkExistance(emailid){
  objlistarray=JSON.parse(localStorage.getItem("signupList"));
  for(i=0;i<objlistarray.length;i++){
  if(objlistarray[i].emailId==emailid){
    alert("email id already exist");
  }
}
}