

function changeImage(type,element) {

    let getType  = document.getElementsByClassName('tab_item')
    
    console.log(type,element)
    console.log(getType)

    for(let i = 0 ; i<getType.length ; i++){

        getType[i].style.background = '#b14c38';
        console.log("ASdsa")

    }

    element.style.background = '#ee4d2d';

    document.getElementById(type).style.display = 'block';


    switch(type){

        case 'trend' :
            document.getElementById('new').style.display = 'none'
            document.getElementById('bestSell').style.display = 'none'
            break;
        case 'new' :
            document.getElementById('trend').style.display = 'none'
            document.getElementById('bestSell').style.display = 'none'
            break;
        case 'bestSell' :
            document.getElementById('trend').style.display = 'none'
            document.getElementById('new').style.display = 'none'
            break;
    }
}