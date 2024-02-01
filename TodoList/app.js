
// dom element
var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todo')



form.addEventListener('submit', function (e) {                           // action to form 
    e.preventDefault();
    let val = input.value.trim()
    if (val) {

        addTodoElement({
            text: val,

        })
        saveTodoList()

    }
    input.value = ""
})


function addTodoElement(todo) {
    // todo : text,status : completed
    // <li>
    // <span>test</span>
    //<box-icon name='trash-alt'></box-icon>
    //</li>

    var li = document.createElement('li')
    li.innerHTML = ` <span>${todo.text}</span>
    <box-icon class="icon" name='trash-alt'></box-icon> `

    if (todo.status === 'completed') {
        li.querySelector('span').setAttribute('class', 'completed')
    }

    li.addEventListener('click', function () {
        this.querySelector('span').classList.toggle('completed')
        saveTodoList()
    })

    li.querySelector('.icon').addEventListener('click', function () {
        this.parentElement.remove()
        saveTodoList()
    })
    todos.appendChild(li)

}



function saveTodoList() {
    let todoListDom = document.querySelectorAll('li')
    let storageTodoList = []
    todoListDom.forEach(function (item) {             // convert  todoList => todoObject
        let text = item.querySelector('span').innerText
        console.log(text)
        let status = item.querySelector('span').getAttribute('class')
        console.log(status)

        storageTodoList.push({
            text,
            status
        })


    })

    localStorage.setItem('todoList', JSON.stringify(storageTodoList))
    //convert object to string
}


function init() {
    let data = JSON.parse(localStorage.getItem('todoList'))
    data.forEach(function (item) {
        addTodoElement(item)
    })
}

init()





