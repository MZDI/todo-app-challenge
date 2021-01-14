'use_strict'
const lists = document.querySelectorAll(".list");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
let today = document.querySelector('.today');
let completed = document.querySelector('.completed');
let today_task = document.querySelector(".today .task")
let forms = document.querySelectorAll("form");

let valid_task;

btn.addEventListener('click',()=>{
 if (input.value !=""){
    const text = input.value;
    let text_node = document.createTextNode(text);
    let label = document.createElement(`label`);
    label.appendChild(text_node);
    let added_input = document.createElement(`input`); 
    let added_form = document.createElement("form");
    let div = document.createElement("div");

    label.setAttribute("for",`${text}`);
    added_input.setAttribute("type","checkbox");
    added_input.setAttribute("name",`${text}`);
    div.classList.add("task");
    div.classList.add("show");
    added_form.setAttribute('data-id',`${text}`);
    added_form.appendChild(added_input);
    added_form.appendChild(label)
    div.appendChild(added_form);
    today.appendChild(div);
    forms = document.querySelectorAll("form");
    
    forms.forEach( (form)=>{
        form.addEventListener("change",()=>{
            const text =form.dataset.id;
            form.parentElement.remove();
        
            let text_node = document.createTextNode(text);
            let added_text = document.createElement(`p`); 
            let div = document.createElement("div");
            div.classList.add("task");
            div.classList.add("show"); 
            added_text.appendChild(text_node);
            div.appendChild(added_text);
            completed.appendChild(div);
        });
        });
 }
});


lists.forEach((list)=>{
    const label = list.querySelector('.label');
    label.addEventListener('click',()=>{
        const tasks = list.querySelectorAll('.task'); 
        tasks.forEach((task)=>{
            task.classList.toggle('show');
        });
    });
});
