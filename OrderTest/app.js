

let listItem = document.querySelectorAll('li')

let button = document.querySelector('.btn')

let headReceipt = document.querySelector('.head_receipt')

let fotter = document.querySelector('.fotter_receipt')



let total = 0

button.addEventListener('click',function(){


    
    listItem.forEach(e=>{

       let tmp = e.children;

       if(tmp[0].checked){

        createElement(tmp[1].innerText,tmp[2].innerText)

        total += parseFloat(tmp[2].innerText)
           
       }
    })

    p2 = document.createElement('p')

    p2.innerText = `Total : ${total}`

    fotter.appendChild(p2)


})


function createElement(name,price){
  
   
     let p = document.createElement('p')
     
     let p2 = document.createElement('p')

     p.innerText = ` tên sản phẩm : ${name} , giá tiền ${price} `
    
     headReceipt.appendChild(p)

    



     
     

}
