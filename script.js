const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskBoard = document.getElementById('taskBoard');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('请输入任务内容');
        return;
    }
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <span>${taskText}</span>
        <button class="delBtn">删除</button>
    `;
    taskCard.querySelector('.delBtn').addEventListener('click', () => {
        taskCard.remove();
    })
    taskBoard.appendChild(taskCard);
    taskInput.value = '';
})
