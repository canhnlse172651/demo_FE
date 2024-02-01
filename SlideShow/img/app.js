

var imgFeature = document.querySelector('.img-feature')

var listImg = document.querySelectorAll('.list_Img img')

var preBtn = document.querySelector('.pre')

var nextBtn = document.querySelector('.next')


var currentIndex = 0;

listImg.forEach((imgElement,index) =>{
    
    imgElement.addEventListener('click',imgElement=>{

        currentIndex = index;

        let url = imgElement.target.getAttribute('src')

       imgFeature.setAttribute('src',url)

       ShowActive(currentIndex)
       console.log(currentIndex)

    

      
    
    })
})


preBtn.addEventListener('click',function(){
    if(currentIndex == 0 ){
        preBtn.classList.add('hide')
    }else{
        preBtn.classList.remove('hide')
    }
   
    let url = listImg[--currentIndex].getAttribute('src')
    imgFeature.setAttribute('src',url)
    ShowActive(currentIndex)
    

})

nextBtn.addEventListener('click',function(){
    
    if(currentIndex == listImg.length-1){
        nextBtn.classList.add('hide')
    }else{
        nextBtn.classList.remove('hide')
    }
    let url = listImg[++currentIndex].getAttribute('src')
    imgFeature.setAttribute('src',url)
    ShowActive(currentIndex)

})


function ShowActive(index){

    listImg.forEach(imgElement=>{
        imgElement.parentElement.classList.remove('active')
    })
   listImg[index].parentElement.classList.add('active')
}





