const inp = document.getElementById('inp');
const addTodo = document.getElementById('addTodo');
const list = document.getElementById('list');

let counter = 0;

addTodo.addEventListener('click', (e) => {
    if (inp.value.trim() === '') {
        return;
    }
    let crossBtn = document.createElement('button');
    let newLi = document.createElement('li');
    let newBtn = document.createElement('button');
    
    let newP = document.createElement('p');
    newP.innerHTML = inp.value;
    
    newBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    crossBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    
    crossBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.style.textDecoration = 'line-through';
        
    });
    
    newBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.style.display = 'none';
    });
    
    newLi.append(crossBtn, newP, newBtn);
    list.appendChild(newLi);
    inp.value = '';
    counter++;
});
