let list1=[];
let list2=[];
let list3=[];
let data=[];

let n=1;
let x=0;





function AddRow(){
   
    let name_input = document.getElementById('name').value;
    let email_input = document.getElementById('email').value;
    
    let mobile_input = document.getElementById('mobile').value;
    
    if(isValidate(name_input,email_input,mobile_input)){
    localStorage.setItem("name",name_input);
    localStorage.setItem("email",email_input);
    localStorage.setItem("mobile",mobile_input);

         data[x] = {
         "name" : name_input,
         "email" : email_input,
         "mobile" : mobile_input,
     }
    
     localStorage.setItem('infoDetails', JSON.stringify(data));
    
    let AddNewRow = document.getElementById('show');
    let NewRow = AddNewRow.insertRow(n);
    
    list1[x] = localStorage.getItem("name");
    list2[x] = localStorage.getItem("email");
    list3[x] = localStorage.getItem("mobile");
    
    
   
    let cell1 = NewRow.insertCell(0);
    let cell2 = NewRow.insertCell(1);
    let cell3 = NewRow.insertCell(2);
    let cell4 = NewRow.insertCell(3);

   
    cell1.innerHTML = n;
    cell2.innerHTML = list1[x];
    cell3.innerHTML = list2[x];
    
    cell4.innerHTML = list3[x];

    x++;
    n++;
  
    
}
}
function isValidate(name_input,email_input,mobile_input){
   
    
   return isValidName(name_input) && (isValidEmail(email_input) && isValidMobile(mobile_input));
}

function isValidName(name_input){
    let nameRegex = /^[a-zA-Z ]*$/;
    if(name_input === ""){
        alert("Please Enter Your Name");
        return false
    }
    else if(nameRegex.test(name_input)){
        return true;
    }
    else{
        alert("Sorry! Name is not valid")
        return false;
    }
     
}
function isValidEmail(email_input){
    let emailRegex = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;
    if(email_input === ""){
        alert("Please Enter Email");
        return false;
    }
    else if(emailRegex.test(email_input)){
        return true;
    }
    else{
        alert("Sorry! Email is not valid")
        return false;
    }
     
}
function isValidMobile(mobile_input){
    let mobileRegex = /^\d{10}$/;
    if(mobile_input === ""){
        alert("Please Enter Mobile Number");
        return false
    }
    else if(mobileRegex.test(mobile_input)){
        return true;
    }
    else{
        alert("Sorry! Mobile Number is not valid")
        return false;
    }
     
}