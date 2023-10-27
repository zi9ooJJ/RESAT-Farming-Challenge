const todoInput = document.querySelector('.todo-input');
const allTodosButton = document.querySelector('.all');
const completeButton = document.querySelector('.complete');
const incompleteButton = document.querySelector('.incomplete');
const addTodoButton = document.querySelector('.add-todo');
const prioritySelect = document.querySelector('.priority');
const todosWrapper = document.querySelector('.todos-wrapper');

let todo = '';
let todoPriority = '';
let tasks = [];
let todoProcess = 'all';

const todoInputHandler = (e) => {
  todo = e.target.value;
};

const todoPriorityHandler = (e) => {
  todoPriority = e.target.options[e.target.selectedIndex].text;
};

const addTodoHandler = (e) => {
  e.preventDefault();
  if (todo === '') return alert('할 일을 입력해주세요😇');
  if (todoPriority === '') return alert('우선순위를 선택해주세요🤭');

  const newTask = {
    id: tasks.length,
    text: todo,
    priority: todoPriority,
    complete: false,
  };

  tasks.push(newTask);

  showTodos(tasks);
  resetInput();
};

const resetInput = () => {
  todo = '';
  todoPriority = '';
  todoInput.value = '';
  prioritySelect.value = '';
};

const isChecked = (id, checked) => {
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.complete = checked;
    }
    return task;
  });

  todoProcess === 'all'
    ? showTodos(newTasks)
    : todoProcessHandler(todoProcess, newTasks);
};

const showTodos = (tasks) => {
  todosWrapper.innerHTML = '';
  tasks.forEach((task) => {
    const todoList = document.createElement('li');
    const checkBox = document.createElement('input');
    const todoText = document.createElement('span');
    const priorityLabel = document.createElement('span');

    todoList.classList.add('todo-list');
    todoText.classList.add('todo-text');
    priorityLabel.classList.add('priority-label');

    checkBox.type = 'checkbox';
    checkBox.setAttribute('name', 'checkBox');
    todoText.innerText = task.text;
    priorityLabel.innerText = task.priority;

    if (task.complete) {
      checkBox.setAttribute('checked', '');
    }

    checkBox.addEventListener('click', () =>
      isChecked(task.id, checkBox.checked)
    );

    // 우선순위 별 스타일 클래스 추가
    priorityLabel.classList.remove('low', 'normal', 'high', 'very-high');
    if (task.priority === '낮음') {
      priorityLabel.classList.add('low');
    } else if (task.priority === '보통') {
      priorityLabel.classList.add('normal');
    } else if (task.priority === '높음') {
      priorityLabel.classList.add('high');
    } else if (task.priority === '아주 높음') {
      priorityLabel.classList.add('very-high');
    }

    todoList.appendChild(checkBox);
    todoList.appendChild(todoText);
    todoList.appendChild(priorityLabel);
    todosWrapper.appendChild(todoList);
  });
};

const allSortHandler = () => {
  todoProcess = 'all';
  showTodos(tasks);
};

const todoProcessHandler = (state, list) => {
  todoProcess = state;
  const newTodo = list.filter((task) => task.complete === state);
  showTodos(newTodo);
};

todoInput.addEventListener('change', todoInputHandler);
addTodoButton.addEventListener('click', addTodoHandler);
prioritySelect.addEventListener('change', todoPriorityHandler);
allTodosButton.addEventListener('click', allSortHandler);
completeButton.addEventListener('click', () => todoProcessHandler(true, tasks));
incompleteButton.addEventListener('click', () =>
  todoProcessHandler(false, tasks)
);
