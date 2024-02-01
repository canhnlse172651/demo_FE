
var username = document.querySelector('#username')
var password = document.querySelector('#password')
var email = document.querySelector('#email')
var confirm_password = document.querySelector('#confirm_password')
var form = document.querySelector('form')


function showError(input, message) {
    
    let parent = input.parentElement;
    let small = parent.querySelector('small')


    parent.classList.add('error')
    small.innerText = message
}



function showSuccess(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')


    parent.classList.remove('error')
    small.innerText = ''
}


function checkEmpty(listInput) {
    let isEmpty = false
    let listInputs = [listInput]
    listInputs.forEach(input => {

        input.value = input.value.trim()
        if (input.value == '') {
            isEmpty = true

            showError(input, 'value is not empty')

        } 

    });
    return isEmpty

}



function checkEmail(input){
    const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value=input.value.trim()
  if(!regex.test(input.value)){

    showError(input,'Invalid email')
  }else{
    showSuccess(email)
  }
  return regex.test(input.value)
}



function checkLengthError(input,min,max){
    input.value = input.value.trim()
    

    if(input.value.length < min){
        showError(input,`Number letter no less than ${min}`)
        return true
    }

    if(input.value.length > max){
        showError(input,`Number letter no greater than ${max}`)
        return true
    }
    showSuccess(input)
    return false
}


function checkCfpasswordError(password,cfPassword){
    if(password.value !== cfPassword.value){
        showError(cfPassword,'Confirm password false')
        return true
    }else{
        showSuccess(confirm_password)
    }
    return false
}


form.addEventListener('submit', function (e) {

    e.preventDefault();

      // valid user name
   
    if(!checkEmpty(username)){
        checkLengthError(username,5,10)
       
    }else{
        checkEmpty(username)
    }

    // valid email

    if(!checkEmpty(email)){
       checkEmail(email)
    }else{
        checkEmpty(email)
    }
     

    //valid password
   
    if(!checkEmpty(password)){
        checkLengthError(password,5,10)
       
    }else{
        checkEmpty(password)
    }
  

    //valid confirm password


    if(!checkEmpty(confirm_password)){
        checkCfpasswordError(password,confirm_password)
    }else{
        checkEmpty(confirm_password)
    }



    

})