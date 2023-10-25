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
  todoPriority = e.target.value;
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
