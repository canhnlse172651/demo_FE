

var images = document.querySelectorAll('.image img')
var pre = document.querySelector('.pre')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery_inner img')


var currentIndex = 0;


function showImage() {
 

    if (currentIndex == 0) {
        pre.classList.add('hide')
    } else {
        pre.classList.remove('hide')
    }


    if (currentIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
        
    }

       //display
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}


images.forEach((item,index) => {

    item.addEventListener('click', function() {
        currentIndex = index
        showImage()
        console.log("asds")

    })
})

close.addEventListener('click', function () {
    gallery.classList.remove('show')
   
})

// document.addEventListener('keydown', function (e) {
//     if (e.keycode == 27) {
//         gallery.classList.remove('show')
//     }
// })

pre.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--
        showImage()
        
          console.log("ASdsa")
    }
})


next.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showImage()
        console.log("ASdsa")
    
        
    }
})