import 'tailwindcss/tailwind.css';

const input = document.getElementById('todo');
const todoBtn = document.getElementById('submitBtn');
const todoContainer = document.querySelector('.todo_container');

todoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const paragraph = document.createElement('p');
  paragraph.className =
    'block bg-blue-200 w-full text-2xl mb-2 p-3 cursor-pointer rounded';

  if (input.value === '') {
    alert('Please enter a todo');
    return;
  } else {
    paragraph.textContent = input.value;
  }

  paragraph.addEventListener('click', () => {
    if (paragraph.classList.contains('line-through')) {
      paragraph.className =
        'block bg-blue-200 w-full text-2xl  p-3 cursor-pointer rounded';
    } else {
      paragraph.className =
        'block bg-blue-200 w-full text-2xl  p-3 cursor-pointer rounded line-through';
    }
  });

  paragraph.addEventListener('dblclick', () => {
    paragraph.remove();
  });

  todoContainer.appendChild(paragraph);
  input.value = '';
});
