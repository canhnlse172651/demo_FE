

// var btnSuccess = document.querySelector('.control .success')
// var btnWarning = document.querySelector('.control .warning')
// var btnError = document.querySelector('.control .error')


let listBtn = document.querySelectorAll('button')
let time = 4500
listBtn.forEach(element => {
    
    element.addEventListener('click',function(){
        
        let toast = element.value
       createToast(toast)

    })
  
   
});



function createToast(status){

    // <div class="toast success">
    //         <box-icon class="icon" color="white" name='message-rounded-dots'></box-icon>
    //         <span class="message" >This is a message</span>
    //         <span class="line" ></span>
    //     </div>

    //     <div class="toast warning">
    //         <box-icon class="icon" color="white" name='message-rounded-dots'></box-icon>
    //         <span class="message" >This is a message</span>
    //         <span class="line" ></span>
    //     </div>

    //     <div class="toast error">
    //         <box-icon class="icon" color="white" name='message-rounded-dots'></box-icon>
    //         <span class="message" >This is a message</span>
    //         <span class="line" ></span>
    //     </div>

     var toast  = document.createElement('div')

     toast.classList.add('toast')
     toast.classList.add(status)

    toast.innerHTML = `  <box-icon class="icon" color="white" name='message-rounded-dots'></box-icon>
             <span class="message" >This is a message</span>
              <span class="line" ></span>  `

          var toastList = document.getElementById('toasts')

          toastList.appendChild(toast)


          setTimeout(function(){
            toast.remove()
          },time)

        
     

}






