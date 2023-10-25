const todoInput = document.querySelector('.todo-input');
const addTodoButton = document.querySelector('.add-todo');
const priority = document.querySelector('.priority');
const todosWrapper = document.querySelector('.todos-wrapper');

let todo = '';
let todoPriority = '';

const todoInputHandler = (e) => {
  todo = e.target.value;
};

const todoPriorityHandler = (e) => {
  todoPriority = e.target.options[e.target.selectedIndex].text;
};

const addTodoHandler = () => {
  if (todo === '') return alert('할 일을 입력해주세요😇');
  if (todoPriority === '') return alert('우선순위를 선택해주세요🤭');
  showTodos();
  resetInput();
};

const resetInput = () => {
  todo = '';
  todoPriority = '';
  todoInput.value = '';
  priority.value = '';
};

const showTodos = () => {
  const todoList = document.createElement('li');
  const checkBox = document.createElement('input');
  const todoText = document.createElement('span');
  const priorityLabel = document.createElement('span');

  todoList.classList.add('todo-list');
  todoText.classList.add('todo-text');
  priorityLabel.classList.add('priority-label');
  // 우선순위 별 CSS Style 개별 적용
  const selectedValue = priority.value;
  priorityLabel.classList.remove('low', 'normal', 'high', 'very-high');
  if (selectedValue === 'low') {
    priorityLabel.classList.add('low');
  } else if (selectedValue === 'normal') {
    priorityLabel.classList.add('normal');
  } else if (selectedValue === 'high') {
    priorityLabel.classList.add('high');
  } else if (selectedValue === 'very-high') {
    priorityLabel.classList.add('very-high');
  }

  checkBox.type = 'checkbox';
  todoText.innerText = todo;
  priorityLabel.innerText = todoPriority;

  todoList.appendChild(checkBox);
  todoList.appendChild(todoText);
  todoList.appendChild(priorityLabel);
  todosWrapper.appendChild(todoList);
};

todoInput.addEventListener('change', todoInputHandler);
addTodoButton.addEventListener('click', addTodoHandler);
priority.addEventListener('change', todoPriorityHandler);
