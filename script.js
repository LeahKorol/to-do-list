//document.querySelector('#submit').disabled='true'; //can't submit if didnt enter a task

document.querySelector('form').onsubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting

    const task = document.querySelector('#task').value;
    if(task==""){
        alert("Please enter a task");
    }
    else{
        /*
        In each list item there are 3 elements: 
        checkbox
        task text - wrap with span
        remove button
        */

        let li = document.createElement('li');
        li.classList.add('list-item');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => {
            if (checkbox.checked) {
                li.classList.add('done');
            } else {
                li.classList.remove('done');
            }
        };

        let textSpan=document.createElement('span');
        textSpan.textContent=task;
        textSpan.classList.add('task-text'); //task text

        let btn = document.createElement('button');
        btn.textContent = "remove";
        btn.classList.add('remove-btn');
        btn.onclick = () => {
            li.remove(); // Remove the task when the button is clicked
        };

        li.prepend(checkbox);
        li.append(textSpan);
        li.append(btn);
        document.querySelector('#task-list').appendChild(li);

        document.querySelector('#task').value = ''; // Clear the input field after adding the task
    }
};


