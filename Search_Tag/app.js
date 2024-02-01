
var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')


var tags = []


function render() {
    content.innerHTML = ''

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `<li>
           ${tag}
            <box-icon  onclick="removeTag(${i})"  class="icon" color="white" name='window-close'></box-icon>
        </li>`
    }

    content.appendChild(input)
    input.focus()
}


function removeTag(index){
    console.log("sadsa")
    tags.splice(index,1)
    render()

}


input.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            var getValue = input.value.trim()
            if(inArray(getValue,tags)){
              
                input.value = ''
              
            }else{
                tags.push(getValue)
                render()
                input.value = ''
            }

        }
})



function inArray(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}


btnRemoveAll.addEventListener('click',function(){
           tags = []
           render()
})